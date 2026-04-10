import { useState, useEffect, useRef } from "react";
import "./App.css";

const NAV_LINKS = ["Home", "About", "Projects", "Contact","Resume"];

const SKILLS = [
  { name: "Python", level: 90 },
  { name: "FastAPI / Django", level: 82 },
  { name: "React", level: 78 },
  { name: "HTML / CSS", level: 88 },
  { name: "JavaScript", level: 75 },
  { name: "SQL", level: 80 },
  { name: "MongoDB", level: 72 },
];

const PROJECTS = [
  {
    number: "01",
    title: "Personal Portfolio",
    desc: "A sleek developer portfolio built with React showcasing projects, skills, and contact info with smooth animations and responsive design.",
    tags: ["React", "CSS3", "JavaScript"],
    featured: true,
    emoji: "🌐",
  },
  {
    number: "02",
    title: "Expense Tracker",
    desc: "A full-stack expense management app with category filters, monthly summaries, and real-time balance updates backed by a Python REST API.",
    tags: ["Python", "FastAPI", "React", "MongoDB"],
    emoji: "💰",
  },
  {
    number: "03",
    title: "Calculator",
    desc: "A clean, responsive calculator with keyboard support, history log, and scientific mode, built with vanilla JavaScript and CSS Grid.",
    tags: ["HTML", "CSS", "JavaScript"],
    emoji: "🧮",
  },
  {
    number: "04",
    title: "GPS Bus Tracking System",
    desc: "A real-time GPS bus tracking platform with live map integration, route management, and ETA predictions for commuters.",
    tags: ["Python", "Django", "React", "SQL", "Maps API"],
    emoji: "🚌",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [animatedSkills, setAnimatedSkills] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimatedSkills(true); },
      { threshold: 0.3 }
    );
    if (skillsRef.current) observer.observe(skillsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSend = (e) => {
    e.preventDefault();
    setSent(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    
    <div className="app">
      {/* ── NAV ── */}
      <nav className="nav">
        <a className="nav-logo" onClick={() => scrollTo("home")}>Rihasha.</a>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((l) => (
            <li key={l}>
              <a
                className={activeSection === l.toLowerCase() ? "active" : ""}
                onClick={() => scrollTo(l)}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          <span /><span /><span />
        </button>
        {NAV_LINKS.map((link) => {
  if (link === "Resume") {
    return (
      <a
        key={link}
        href="/resume.pdf"
        target="_blank"
        className="nav-resume"
      >
        {link}
      </a>
    );
  }

  return (
    <a key={link} href={`#${link.toLowerCase()}`}>
      {link}
    </a>
  );
})}
      </nav>

      {/* ── HERO ── */}
      <section id="home" className="hero">
        <div className="hero-bg-text">RIHASHA</div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            Available for work
          </div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Rihasha</span>
            <br />
            <span className="hero-sub">Python Full Stack Developer</span>
          </h1>
          <section className="hero">
  <h1>Hi, I'm Rihasha 👋</h1>
  <h2>Python Full Stack Developer</h2>
</section>
          <p className="hero-desc">
            Building performant REST APIs and responsive web apps — from
            FastAPI backends to React frontends.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("Projects")}>View Projects</button>
            <button className="btn-ghost" onClick={() => scrollTo("Contact")}>Let's talk</button>
          </div>
          <div className="hero-socials">
            <a href="https://www.linkedin.com/in/rihasha-fdo-658b6329b" target="_blank" rel="noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
            <a href="https://github.com/Rihasha" target="_blank" rel="noreferrer" className="social-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              GitHub
            </a>
            
          </div>
        </div>
        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="about">
        <div className="section-label">About me</div>
        <h2 className="section-title">Turning ideas into<br /><em>digital realities</em></h2>
        <div className="about-grid">
          <div className="about-avatar">
            <div className="avatar-ring">
              <div className="avatar-inner">R</div>
            </div>
            <div className="about-badge-open">Open to work</div>
          </div>
          <div className="about-text">
            <p>
              Hi, I'm <strong>Rihasha</strong> 👋 — a Motivated Python Full Stack Developer
              with hands-on experience in <strong>Python, FastAPI/Django,</strong> and <strong>React</strong>.
            </p>
            <p>
              I'm skilled in building <strong>REST APIs</strong> and responsive web applications
              using HTML, CSS, and JavaScript. Proficient in <strong>SQL and MongoDB</strong> for
              efficient database management.
            </p>
            <p>🚀 Currently: Learning · Building · Improving</p>
            <div className="tech-chips">
              {["Python", "FastAPI", "Django", "React", "JavaScript", "SQL", "MongoDB", "HTML5", "CSS3", "Git"].map((t) => (
                <span key={t} className="chip">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Skills bars */}
        <div className="skills-section" ref={skillsRef}>
          <div className="skills-label">Proficiency</div>
          <div className="skills-bars">
            {SKILLS.map(({ name, level }) => (
              <div key={name} className="skill-row">
                <div className="skill-meta">
                  <span>{name}</span>
                  <span>{level}%</span>
                </div>
                <div className="skill-track">
                  <div
                    className="skill-fill"
                    style={{ width: animatedSkills ? `${level}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="projects">
        <div className="section-label">Work</div>
        <h2 className="section-title">Selected projects</h2>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <div key={p.number} className={`project-card ${p.featured ? "featured" : ""}`}>
              <div className="project-header">
                <span className="project-num">{p.number}</span>
                {p.featured && <span className="featured-tag">Featured</span>}
              </div>
              <div className="project-emoji">{p.emoji}</div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
              <div className="project-links">
                <a href="https://github.com/Rihasha" target="_blank" rel="noreferrer" className="project-link">GitHub ↗</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="contact">
        <div className="section-label">Contact</div>
        <h2 className="section-title">Let's build something<br /><em>together</em></h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-intro">
              I'm currently available for freelance work and full-time opportunities.
              Feel free to reach out!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">✉</span>
                <a href="mailto:rihasha@email.com">rihasha@email.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Chennai, Tamil Nadu</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💼</span>
                <a href="https://www.linkedin.com/in/rihasha-fdo-658b6329b" target="_blank" rel="noreferrer">LinkedIn Profile ↗</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🐙</span>
                <a href="https://github.com/Rihasha" target="_blank" rel="noreferrer">GitHub Profile ↗</a>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSend}>
            <div className="form-row">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              value={formData.subject}
              onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              required
            />
            <textarea
              rows="5"
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <button type="submit" className="btn-send">
              {sent ? "Message sent! 🎉" : "Send message →"}
            </button>
          </form>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <p>© 2026 Rihasha.</p>
        <p className="footer-loc">Chennai, Tamil Nadu 🇮🇳</p>
      </footer>
    </div>
  );
}
import { useEffect, useState } from "react";
import "./App.css";

const projects = [
  {
    number: "01",
    category: "PRODUCT DESIGN / FRONTEND",
    title: "Ecommerce website",
    description:
      "An e-commerce website is an online platform that allows to sell goods and services over the internet.(on github admin dashboard is saperated from Backend and frontend u can look from my github profile)",
    stack: ["React", "JavaScript", "CSS"],
    theme: "project-lime",
    live: "",
    github: "https://github.com/IamOruj/Ecommerce",
  },
];

const skills = [
  ["01", "JavaScript", "INTERACTIVITY"],
  ["02", "React", "COMPONENTS"],
  ["03", "HTML & CSS", "FOUNDATIONS"],
  ["04", "REST APIs", "INTEGRATION"],
  ["05", "Git & GitHub", "WORKFLOW"],
  ["06", "Responsive UI", "ACCESSIBILITY"],
  ["07", "AND ME", "USEFUL"],
];

function Arrow({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      return window.localStorage.getItem("portfolio-theme") === "dark";
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = darkMode ? "dark" : "light";
    try {
      window.localStorage.setItem("portfolio-theme", darkMode ? "dark" : "light");
    } catch {
      return;
    }
  }, [darkMode]);

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <header className="site-header">
        <nav className="nav container" aria-label="Main navigation">
          <a
            className="logo"
            href="#home"
            onClick={closeMenu}
            aria-label="Oruj Novruzov, home"
          >
            oruj
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className={`menu-icon ${menuOpen ? "menu-icon-open" : ""}`}>
              <i />
              <i />
            </span>
          </button>

          <div
            id="primary-navigation"
            className={`nav-links ${menuOpen ? "nav-open" : ""}`}
          >
            {[
              ["Work", "#work"],
              ["About", "#about"],
              ["Skills", "#skills"],
            ].map(([label, href]) => (
              <a key={label} href={href} onClick={closeMenu}>
                {label}
              </a>
            ))}
            <a className="nav-contact" href="#contact" onClick={closeMenu}>
              Let's talk <Arrow diagonal />
            </a>
            <button
              className="theme-toggle"
              type="button"
              onClick={() => setDarkMode((enabled) => !enabled)}
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              aria-pressed={darkMode}
            >
              <span className="theme-toggle-icon" aria-hidden="true">
                {darkMode ? "☀" : "☾"}
              </span>
              <span>{darkMode ? "Light mode" : "Dark mode"}</span>
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              OPEN TO WORK :)
            </div>

            <p className="eyebrow hero-eyebrow">
              DEVELOPER · BUILDER · PROBLEM SOLVER
            </p>

            <h1>
              Thoughtful code.
              <br />
              <span>Meaningful</span>
              <br />
              experiences<span className="title-period">.</span>
            </h1>

            <p className="hero-description">
              I'm Oruj Novruzov, a developer who turns ideas into considered
              digital experiences — with clean code, useful details, and a
              little curiosity.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href="#work">
                Explore selected work <Arrow />
              </a>
              <a className="underlined-link" href="#contact">
                Get in touch <Arrow diagonal />
              </a>
            </div>

            <div className="hero-meta">
              <span>BASED IN AZERBAIJAN</span>
            </div>
          </div>

          <div
            className="hero-art"
            aria-label="Abstract lime and charcoal orbital artwork"
          >
            
            <div className="art-core">
              <span className="art-core-text-pic">I Dont want to put my pic</span>
            </div>
          </div>

          <a href="#work" className="scroll-cue">
            <span className="scroll-line" /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="work-section section" id="work">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">A SELECTION OF MY WORK</p>
                <h2>
                  Made with <span>intention.</span>
                </h2>
              </div>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <article
                  className={`project-card ${project.theme} reveal`}
                  key={project.number}
                  style={{ "--reveal-delay": `${index * 100}ms` }}
                >
                  <div className="project-visual">
                    <div className="project-visual-top">
                      <span>SELECTED PROJECT / {project.number}</span>
                      <span>2026</span>
                    </div>

                    <div className="project-cover">
                      <span className="project-cover-icon" aria-hidden="true">
                        🛍
                      </span>
                      <h3>{project.title}</h3>
                      <p>ONLINE STORE · REACT</p>
                     
                    </div>
                  </div>

                  <div className="project-details">
                    <div className="project-title-row">
                      <div>
                        <p className="eyebrow">{project.category}</p>
                        <h3>
                          {project.title}
                          <span>.</span>
                        </h3>
                      </div>
                      <span className="project-number">{project.number}</span>
                    </div>

                    <p className="project-description">{project.description}</p>

                    <div className="project-bottom">
                      <div className="tag-list">
                        {project.stack.map((item) => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                          >
                            Live site <Arrow diagonal />
                          </a>
                        )}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source code <Arrow diagonal />
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

          
          </div>
        </section>

        <section className="about-section section container" id="about">
          <div className="about-side reveal">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <div className="about-monogram">
              ON<span>.</span>
            </div>
            <p className="about-caption">
              CURIOUS BY NATURE.
              <br />
              DEVELOPER BY CHOICE.
            </p>
          </div>

          <div className="about-content reveal">
            <h2>
              I care about how
              <br />
              things <span>work</span> and how
              <br />
              they <span>feel.</span>
            </h2>
            <p>
              I'm Oruj — a developer interested in the space where engineering
              and thoughtful design meet. I enjoy breaking down problems,
              building useful interfaces, and making the details feel right.
            </p>
            <p>
              I'm looking for a team where I can contribute, keep learning, and
              help turn ambitious ideas into reliable digital products.
            </p>
            <a className="underlined-link" href="#contact">
              Let's start a conversation <Arrow diagonal />
            </a>
          </div>
        </section>

        <section className="skills-section section" id="skills">
          <div className="container">
            <div className="section-heading reveal">
              <div>
                <p className="eyebrow">THE TOOLKIT</p>
                <h2>
                  What I bring <span>to the table.</span>
                </h2>
              </div>
            </div>

            <div className="skills-list">
              {skills.map(([number, skill, description], index) => (
                <div
                  className="skill-row reveal"
                  key={skill}
                  style={{ "--reveal-delay": `${index * 55}ms` }}
                >
                  <span className="skill-number">{number}</span>
                  <h3>{skill}</h3>
                  <span className="skill-description">{description}</span>
                 
                </div>
              ))}
            </div>
            <p className="skills-note">
              I'll tailor this list to match the technologies and tools I can
              confidently discuss in an interview.
            </p>
          </div>
        </section>

        <section className="contact-section section container" id="contact">
          <div className="contact-orbit" aria-hidden="true">
            <span>↗</span>
          </div>
          <p className="eyebrow reveal">THE NEXT CHAPTER</p>
          <h2 className="reveal">
            Have something
            <br />
            good in <span>mind?</span>
          </h2>
          <p className="contact-description reveal">
            I'm interested in developer roles and opportunities to build useful
            things with good people. If that sounds like a fit, let's talk.
          </p>
          <a
            className="button button-dark contact-button reveal"
            href="mailto:orujnovruzov@icloud.com"
          >
            orujnovruzov@icloud.com <Arrow diagonal />
          </a>

          <div className="social-links reveal">
            <a href="https://github.com/IamOruj" target="_blank" rel="noreferrer">
              GitHub <Arrow diagonal />
            </a>
            <a
              href="https://www.linkedin.com/in/oruj-novruzov-1107b6394/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow diagonal />
            </a>
            <a href="#home">Back to top ↑</a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <a className="logo" href="#home">
            oruj
          </a>
          <p>Designed & built by Oruj Novruzov (ME).</p>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </>
  );
}

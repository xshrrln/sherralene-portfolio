
"use client";

import { useEffect, useState } from "react";
import { ArrowDown, ArrowUpRight, Github, Instagram, Menu, X, ExternalLink, Sparkles } from "lucide-react";

const REPO = "https://api.github.com/repos/xshrrln/xsdesigns/git/trees/main?recursive=1";
const RAW = "https://raw.githubusercontent.com/xshrrln/xsdesigns/main/";

const projects = [
  {
    number: "01",
    type: "Language preservation · Mobile app",
    title: "Higa",
    description: "An AI-powered mobile application concept focused on preserving and digitalizing the Higaonon language through learning tools, translation, and a dictionary with native-speaker audio.",
    tags: ["UI/UX", "Mobile application", "AI"],
    featured: true,
    link: "https://github.com/xshrrln"
  },
  {
    number: "02",
    type: "Web design · Personal project",
    title: "XS Designs",
    description: "A creative space for selected visual explorations and digital designs. This collection is being brought into the portfolio as a dedicated art gallery.",
    tags: ["Visual design", "Web design", "Creative"],
    link: "https://xshrrln.github.io/xsdesigns/"
  },
  {
    number: "03",
    type: "Mobile interface · Academic project",
    title: "Social Profile App",
    description: "An Instagram-inspired React Native interface exploring profile layouts, highlights, image grids, and interactive UI elements.",
    tags: ["React Native", "UI design", "Mobile"],
    link: "https://github.com/xshrrln"
  }
];

const skills = [
  { group: "Design", items: ["UI/UX Design", "Wireframing", "Prototyping", "Visual Design"] },
  { group: "Development", items: ["HTML & CSS", "JavaScript", "React Native", "Responsive Design"] },
  { group: "Creative", items: ["Digital Art", "Layout Design", "Typography", "Creative Direction"] }
];

function SectionHeading({ eyebrow, title, note }) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

export default function Portfolio() {
  const [artworks, setArtworks] = useState([]);
  const [artStatus, setArtStatus] = useState("loading");
  const [activeImage, setActiveImage] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    let alive = true;

    fetch(REPO, { headers: { Accept: "application/vnd.github+json" } })
      .then((response) => {
        if (!response.ok) throw new Error("Artwork repository could not be reached.");
        return response.json();
      })
      .then((data) => {
        const images = (data.tree || [])
          .filter((file) => file.type === "blob" && /\.(png|jpe?g|webp|gif|avif)$/i.test(file.path))
          .filter((file) => !/(profile|avatar|favicon|icon|logo)/i.test(file.path))
          .sort((a, b) => a.path.localeCompare(b.path))
          .map((file) => ({
            name: file.path.split("/").pop().replace(/\.[^.]+$/, "").replace(/[-_]/g, " "),
            path: file.path,
            src: RAW + file.path.split("/").map(encodeURIComponent).join("/")
          }));

        if (alive) {
          setArtworks(images);
          setArtStatus(images.length ? "ready" : "empty");
        }
      })
      .catch(() => {
        if (alive) setArtStatus("error");
      });

    return () => {
      alive = false;
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Art", "#art"],
    ["Certificates", "#certificates"],
    ["Contact", "#contact"]
  ];

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Sherralene Edusma home">
          <span className="brand-mark">SE.</span>
          <span className="brand-name">SHERRALENE EDUSMA</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={14} />
          </a>
        </nav>
      </header>

      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> AVAILABLE FOR CREATIVE OPPORTUNITIES
          </p>
          <h1>Thoughtful design.<br /><span>Meaningful</span> experiences.</h1>
          <p className="hero-intro">
            Hi, I&apos;m <strong>Sherralene</strong> — an IT student with a love for visual storytelling, thoughtful interfaces, and creative work.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <ArrowUpRight size={16} />
            </a>
            <a className="text-link" href="#about">
              A little about me <ArrowDown size={15} />
            </a>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract typographic artwork">
          <div className="hero-art-top">
            <span>SELECTED THOUGHTS</span>
            <span>2026 — PRESENT</span>
          </div>
          <div className="hero-monogram">s<span>e</span>.</div>
          <div className="hero-art-bottom">
            <span>CREATIVITY MEETS TECHNOLOGY</span>
            <span>01 / 04</span>
          </div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>

        <div className="hero-foot">
          <span>BASED IN THE PHILIPPINES</span>
          <span>SCROLL TO EXPLORE ↓</span>
        </div>
      </section>

      <section className="about section-wrap section-pad" id="about">
        <SectionHeading
          eyebrow="01 / ABOUT"
          title={<>A little about<br />the person behind the pixels.</>}
          note="A balance of curiosity, creativity, and a little bit of code."
        />
        <div className="about-grid">
          <div className="about-stamp">
            <span>HELLO, I&apos;M</span>
            <strong>SE</strong>
            <span>DESIGN · CREATE · EXPLORE</span>
          </div>
          <div className="about-text">
            <p className="large-copy">
              I&apos;m Sherralene, an Information Technology student at Bukidnon State University interested in the space where <em>design and technology meet.</em>
            </p>
            <p>
              I enjoy exploring visual ideas, creating digital designs, and thinking about how people experience the things we build. My interests move between UI/UX, digital art, and practical technology projects.
            </p>
            <p>
              I&apos;m still learning, experimenting, and finding my own creative voice — one project at a time.
            </p>
            <a className="underlined-link" href="https://github.com/xshrrln" target="_blank" rel="noreferrer">
              Find me on GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </section>

      <section className="skills section-wrap section-pad" id="skills">
        <SectionHeading
          eyebrow="02 / WHAT I DO"
          title="Creative thinking, technical curiosity."
          note="A growing toolkit shaped by school projects and personal exploration."
        />
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <article className="skill-card" key={skill.group}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{skill.group}</h3>
              <div className="skill-tags">
                {skill.items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="projects section-wrap section-pad" id="projects">
        <SectionHeading
          eyebrow="03 / SELECTED WORK"
          title="Projects with a purpose."
          note="A few projects that bring together problem-solving, interface design, and creativity."
        />
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.number}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <p className="eyebrow">{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <a
                className="project-arrow"
                href={project.link}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title}`}
              >
                <ArrowUpRight size={22} />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="art section-wrap section-pad" id="art">
        <SectionHeading
          eyebrow="04 / THE ART CORNER"
          title={<>A collection of<br />visual experiments.</>}
          note="Selected designs from XS Designs. The gallery reads image files directly from my public GitHub repository."
        />
        <div className="art-intro">
          <p>
            Beyond interfaces and code, I enjoy making things just because they look and feel interesting. This space is for the colors, compositions, and visual ideas I&apos;ve explored.
          </p>
          <a className="underlined-link" href="https://xshrrln.github.io/xsdesigns/" target="_blank" rel="noreferrer">
            Visit XS Designs <ExternalLink size={14} />
          </a>
        </div>

        {artStatus === "loading" && (
          <div className="gallery-message">Gathering artwork from XS Designs…</div>
        )}

        {artStatus === "error" && (
          <div className="gallery-message">
            The live gallery couldn&apos;t load the GitHub images just now. You can still browse the original{" "}
            <a href="https://xshrrln.github.io/xsdesigns/" target="_blank" rel="noreferrer">
              XS Designs gallery ↗
            </a>.
          </div>
        )}

        {artStatus === "empty" && (
          <div className="gallery-message">
            No image files were found in the repository. Visit{" "}
            <a href="https://xshrrln.github.io/xsdesigns/" target="_blank" rel="noreferrer">
              XS Designs ↗
            </a>{" "}
            to view the current gallery.
          </div>
        )}

        {artStatus === "ready" && (
          <>
            <div className="art-count">
              {String(artworks.length).padStart(2, "0")} VISUALS FROM XS DESIGNS
            </div>
            <div className="art-grid">
              {artworks.map((art, index) => (
                <button
                  className={`artwork artwork-${index % 4}`}
                  key={art.path}
                  onClick={() => setActiveImage(art)}
                  aria-label={`View ${art.name}`}
                >
                  <img src={art.src} alt={art.name} loading="lazy" />
                  <span className="artwork-caption">
                    <span>{art.name}</span>
                    <span>VIEW ↗</span>
                  </span>
                </button>
              ))}
            </div>
          </>
        )}
      </section>

      <section className="certificates section-wrap section-pad" id="certificates">
        <SectionHeading
          eyebrow="05 / MILESTONES"
          title="Learning along the way."
          note="A space for certificates, workshops, and milestones as they come."
        />
        <div className="certificate-placeholder">
          <Sparkles size={20} />
          <div>
            <strong>More to add soon.</strong>
            <p>Certificates and achievements will be added here as the collection grows.</p>
          </div>
        </div>
      </section>

      <footer className="footer section-wrap" id="contact">
        <p className="eyebrow">06 / GET IN TOUCH</p>
        <h2>Have an idea?<br /><em>Let&apos;s make it happen.</em></h2>
        <div className="footer-bottom">
          <div>
            <p className="footer-label">SAY HELLO</p>
            <a className="email-link" href="mailto:your-email@example.com">
              your-email@example.com <ArrowUpRight size={17} />
            </a>
            <p className="email-note">Replace this with your preferred contact email.</p>
          </div>
          <div className="social-links">
            <a href="https://github.com/xshrrln" target="_blank" rel="noreferrer">
              <Github size={17} /> GitHub <ArrowUpRight size={13} />
            </a>
            <a href="https://xshrrln.github.io/xsdesigns/" target="_blank" rel="noreferrer">
              <Instagram size={17} /> XS Designs <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
        <div className="copyright">
          <span>© 2026 SHERRALENE EDUSMA</span>
          <span>MADE WITH CURIOSITY & CARE.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>

      {activeImage && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActiveImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setActiveImage(null)}
            aria-label="Close image"
          >
            <X />
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.name}
            onClick={(event) => event.stopPropagation()}
          />
          <p>{activeImage.name}</p>
        </div>
      )}
    </main>
  );
}

import GradeSlider from "../components/GradeSlider";
import HeroTitle from "../components/HeroTitle";
import SiteHeader from "../components/SiteHeader";
import LazyProjectGrid from "../components/LazyProjectGrid";
import Experience from "../components/Experience";
import ServicesTimeline from "../components/ServicesTimeline";
import { site, hero, projects, experience, pipeline, about, testimonial, links } from "../data/content";

function SocialIcon({ label }) {
  const norm = label.toLowerCase();
  if (norm.includes("insta")) {
    return (
      <svg
        className="social-platform-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    );
  }
  if (norm.includes("link")) {
    return (
      <svg
        className="social-platform-icon"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  return null;
}

export default function Home() {
  return (
    <>
      <SiteHeader />

      <div className="wrap">
        <main id="top">
          <div className="hero">
            <HeroTitle />
            <GradeSlider hero={hero} />
            <div className="caption"><span>{hero.captionLeft}</span><span>{hero.captionRight}</span></div>
          </div>

          <section id="work">
            <h2>Selected work</h2>
            <LazyProjectGrid projects={projects} />
          </section>

          <Experience experience={experience} />

          <section id="services">
            <h2>From first cut to final delivery</h2>
            <ServicesTimeline pipeline={pipeline} />
          </section>

          <section id="about">
            <div className="two">
              <div>
                <h2>About</h2>
                <p>{about.text}</p>
              </div>
              <div>
                <h3>Tools and formats</h3>
                <dl>
                  {about.tools.map(([k, v]) => (
                    <div key={k} style={{ display: "contents" }}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                </dl>
              </div>
            </div>
          </section>

          <section className="quote-section">
            <div className="audio-meter" aria-hidden="true">
              {/* <span className="audio-label">AUDIO MASTER // 48kHz 24-BIT</span> */}
              <div className="eq-bars">
                <span className="eq-bar" style={{ animationDelay: "0.0s", "--h-peak": "24px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.22s", "--h-peak": "30px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.1s", "--h-peak": "18px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.35s", "--h-peak": "32px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.16s", "--h-peak": "26px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.42s", "--h-peak": "34px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.28s", "--h-peak": "28px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.08s", "--h-peak": "20px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.3s", "--h-peak": "32px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.18s", "--h-peak": "16px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.45s", "--h-peak": "28px" }} />
                <span className="eq-bar" style={{ animationDelay: "0.12s", "--h-peak": "22px" }} />
              </div>
            </div>
            <p className="quote">"{testimonial.quote}"</p>
    
          </section>

          <section id="contact" className="contact">
            
            <h2>Have footage that needs a finish?</h2>
            <div className="mail-container">
              <a className="mail" href={`mailto:${site.email}`}>
                <span className="mail-text">{site.email}</span>
                <span className="mail-flare" aria-hidden="true" />
              </a>
            </div>
            <div className="links">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <SocialIcon label={l.label} />
                  <span>{l.label}</span>
                  <svg
                    className="social-arrow"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </section>
        </main>

        <footer>© {new Date().getFullYear()} {site.name}. {site.availability}</footer>
      </div>
    </>
  );
}

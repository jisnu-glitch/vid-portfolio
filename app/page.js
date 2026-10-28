import GradeSlider from "../components/GradeSlider";
import HeroTitle from "../components/HeroTitle";
import SiteHeader from "../components/SiteHeader";
import LazyProjectGrid from "../components/LazyProjectGrid";
import Experience from "../components/Experience";
import ServicesTimeline from "../components/ServicesTimeline";
import { site, hero, projects, experience, pipeline, about, testimonial, links } from "../data/content";

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
              <span className="audio-label">AUDIO MASTER // 48kHz 24-BIT</span>
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
            <div className="quote-meta">
              <span className="quote-beat-pulse" aria-hidden="true" />
              <p className="by">{testimonial.by}</p>
            </div>
          </section>

          <section id="contact" className="contact">
            <h2>Have footage that needs a finish?</h2>
            <a className="mail " href={`mailto:${site.email}`}>{site.email}</a>
            <div className="links">
              {links.map((l) => <a key={l.label} href={l.href}>{l.label} </a>)}
            </div>
          </section>
        </main>

        <footer>© {new Date().getFullYear()} {site.name}. {site.availability}</footer>
      </div>
    </>
  );
}

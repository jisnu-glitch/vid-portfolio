import GradeSlider from "../components/GradeSlider";
import HeroTitle from "../components/HeroTitle";
import SiteHeader from "../components/SiteHeader";
import { site, hero, projects, pipeline, about, testimonial, links } from "../data/content";

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
            <div className="work">
              {projects.map((p) => (
                <a key={p.title} href={p.href}>
                  <div
                    className="frame"
                    // style={{ "--a": p.colors[0], "--b": p.colors[1], "--c": p.colors[2], "--x": p.glow }}
                  >
                    {p.image && <img src={p.image} alt={`Still from ${p.title}`} />}
                    <span className="play" />
                    <span className="tc">{p.duration}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.meta}</p>
                </a>
              ))}
            </div>
          </section>

          <section id="services">
            <h2>From first cut to final delivery</h2>
            <div className="pipeline">
              {pipeline.map((s) => (
                <div key={s.title}><h3>{s.title}</h3><p>{s.text}</p></div>
              ))}
            </div>
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

          <section>
            <p className="quote">"{testimonial.quote}"</p>
            <p className="by">{testimonial.by}</p>
          </section>

          <section id="contact" className="contact">
            <h2>Have footage that needs a finish?</h2>
            <a className="mail" href={`mailto:${site.email}`}>{site.email}</a>
            <div className="links">
              {links.map((l) => <a key={l.label} href={l.href}>{l.label}</a>)}
            </div>
          </section>
        </main>

        <footer>© {new Date().getFullYear()} {site.name}. {site.availability}</footer>
      </div>
    </>
  );
}

"use client";
import Image from "next/image";

/**
 * LazyProjectGrid — renders project cards with ambient color grading glow,
 * dynamic timecode indicator, and smooth hover micro-animations.
 */
export default function LazyProjectGrid({ projects }) {
  return (
    <div className="work">
      {projects.map((p) => {
        const primaryColor = p.colors?.[1] || "#FFD600";
        const secondaryColor = p.colors?.[0] || "#1a1a1a";

        return (
          <a
            key={p.title}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            style={{
              "--p-primary": primaryColor,
              "--p-secondary": secondaryColor,
            }}
          >
            {/* Ambient colored backlight glow matching film's color palette */}
            <div className="project-ambient-glow" aria-hidden="true" />

            <div className="frame">
              {p.image && (
                <Image
                  src={p.image}
                  alt={`Still from ${p.title}`}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  loading="lazy"
                  quality={80}
                  className="project-thumb"
                />
              )}
              <span className="play" />
              <span className="tc">
                <span className="tc-rec-dot" aria-hidden="true" />
                {p.duration}
              </span>
            </div>
            <h3>{p.title}</h3>
            <p>{p.meta}</p>
          </a>
        );
      })}
    </div>
  );
}

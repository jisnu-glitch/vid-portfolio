"use client";
import Image from "next/image";

/**
 * LazyProjectGrid — renders project cards using next/image for automatic
 * lazy-loading, WebP conversion, and responsive sizing.
 */
export default function LazyProjectGrid({ projects }) {
  return (
    <div className="work">
      {projects.map((p) => (
        <a key={p.title} href={p.href} target="_blank" rel="noopener noreferrer">
          <div className="frame">
            {p.image && (
              <Image
                src={p.image}
                alt={`Still from ${p.title}`}
                fill
                sizes="(max-width: 760px) 100vw, (max-width: 1120px) 50vw, 33vw"
                style={{ objectFit: "cover" }}
                // lazy is the default — images only load when near viewport
                loading="lazy"
                // quality 80 gives excellent visuals at ~40-60% smaller file size
                quality={80}
              />
            )}
            <span className="play" />
            <span className="tc">{p.duration}</span>
          </div>
          <h3>{p.title}</h3>
          <p>{p.meta}</p>
        </a>
      ))}
    </div>
  );
}

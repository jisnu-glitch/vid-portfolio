"use client";
import { useState, useEffect } from "react";

const NAME   = "Jishnu Vijayan";
const LABELS = ["VIDEO EDITOR", "COLORIST"];

export default function HeroTitle() {
  const [tickerIn, setTickerIn] = useState(false);

  useEffect(() => {
    // Reveal ticker smoothly once the title focus resolves
    const timer = setTimeout(() => {
      setTickerIn(true);
    }, 820);

    return () => clearTimeout(timer);
  }, []);

  // Duplicate the set twice — the track animates to -50% for a seamless loop
  const tickerSet = (
    <span className="ht-ticker-set">
      {/* Repeat labels 6× per set so the strip fills any screen width */}
      {Array.from({ length: 6 }, (_, r) =>
        LABELS.map((label, i) => (
          <span key={`${r}-${i}`} className="ht-ticker-item">
            {label}
            <span className="ht-ticker-sep" aria-hidden="true">✦</span>
          </span>
        ))
      )}
    </span>
  );

  return (
    <div className="hero-title">
      {/* animated gold accent bar */}
      <div className="ht-accent" />

      {/* Cinematic optical focus rack name */}
      <h1 className="ht-name" aria-label={NAME}>
        <span className="ht-word">
          {"Jishnu".split("").map((ch, i) => (
            <span
              key={i}
              className="ht-char"
              style={{ "--char-i": i }}
            >
              {ch}
            </span>
          ))}
        </span>
        <span className="ht-space"> </span>
        <span className="ht-word">
          {"Vijayan".split("").map((ch, i) => (
            <span
              key={i + 7}
              className="ht-char"
              style={{ "--char-i": i + 7 }}
            >
              {ch}
            </span>
          ))}
        </span>
      </h1>

      {/* bold yellow marquee ticker */}
      <div
        className={`ht-ticker${tickerIn ? " ht-ticker--in" : ""}`}
        role="marquee"
        aria-label="Video Editor · Colorist"
      >
        <div className="ht-ticker-track">
          {tickerSet}
          {/* second copy, aria-hidden, for seamless loop */}
          <span className="ht-ticker-set" aria-hidden="true">
            {Array.from({ length: 6 }, (_, r) =>
              LABELS.map((label, i) => (
                <span key={`b${r}-${i}`} className="ht-ticker-item">
                  {label}
                  <span className="ht-ticker-sep" aria-hidden="true">✦</span>
                </span>
              ))
            )}
          </span>
        </div>
      </div>
    </div>
  );
}

"use client";
import { useState, useEffect } from "react";

const NAME   = "Jishnu Vijayan";
const CHARS  = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LABELS = ["VIDEO EDITOR", "COLORIST"];

export default function HeroTitle() {
  const [display, setDisplay]         = useState(() => NAME.replace(/\S/g, "·"));
  const [nameSettled, setNameSettled] = useState(false);
  const [tickerIn, setTickerIn]       = useState(false);

  useEffect(() => {
    const boot = setTimeout(() => {
      const TOTAL = 26;
      let frame   = 0;

      const tick = setInterval(() => {
        frame++;
        const resolved = Math.floor((frame / TOTAL) * NAME.length);

        setDisplay(
          NAME.split("").map((ch, i) => {
            if (ch === " ") return " ";
            if (i < resolved) return ch;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          }).join("")
        );

        if (frame >= TOTAL) {
          clearInterval(tick);
          setDisplay(NAME);
          setNameSettled(true);
          setTimeout(() => setTickerIn(true), 250);
        }
      }, 48);

      return () => clearInterval(tick);
    }, 320);

    return () => clearTimeout(boot);
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

      {/* scramble → shimmer name */}
      <h1
        className={`ht-name${nameSettled ? " ht-name--shimmer" : ""}`}
        aria-label={NAME}
      >
        {display}
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

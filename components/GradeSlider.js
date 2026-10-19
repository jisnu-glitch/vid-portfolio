"use client";
import { useState, useRef, useEffect } from "react";

export default function GradeSlider({ hero }) {
  const [p, setP] = useState(50);
  const afterRef = useRef(null);
  const beforeRef = useRef(null);

  const hasVideos = hero.beforeVideo && hero.afterVideo;
  const hasImages = hero.beforeImage && hero.afterImage;

  // Keep both videos in sync (same currentTime)
  useEffect(() => {
    const after = afterRef.current;
    const before = beforeRef.current;
    if (!after || !before) return;

    const sync = () => {
      if (Math.abs(before.currentTime - after.currentTime) > 0.2) {
        before.currentTime = after.currentTime;
      }
    };
    after.addEventListener("timeupdate", sync);
    return () => after.removeEventListener("timeupdate", sync);
  }, [hasVideos]);

  return (
    <div className="grade" style={{ "--p": `${p}%` }}>
      {hasVideos ? (
        <>
          {/* After (graded) — full width, underneath */}
          <div className="scene img">
            <video
              ref={afterRef}
              src={hero.afterVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          </div>
          {/* Before (original) — clipped to left side */}
          <div className="scene flat img">
            <video
              ref={beforeRef}
              src={hero.beforeVideo}
              autoPlay
              loop
              muted
              playsInline
              aria-hidden="true"
            />
          </div>
        </>
      ) : hasImages ? (
        <>
          <div className="scene img"><img src={hero.afterImage} alt="Final graded frame" /></div>
          <div className="scene flat img"><img src={hero.beforeImage} alt="Ungraded log frame" /></div>
        </>
      ) : (
        <>
          <div className="scene" />
          <div className="scene flat" />
        </>
      )}
      <span className="tag l">{hero.labelBefore}</span>
      <span className="tag r">{hero.labelAfter}</span>
      <div className="handle" />
      <input
        type="range" min="0" max="100" value={p}
        onChange={(e) => setP(Number(e.target.value))}
        aria-label="Compare ungraded and graded footage"
      />
    </div>
  );
}

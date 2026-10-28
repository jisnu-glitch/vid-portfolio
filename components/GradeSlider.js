"use client";
import { useState, useRef, useEffect, useCallback } from "react";

export default function GradeSlider({ hero }) {
  const [p, setP] = useState(50);
  const [videosReady, setVideosReady] = useState(false);
  const afterRef  = useRef(null);
  const beforeRef = useRef(null);

  const hasVideos = hero.beforeVideo && hero.afterVideo;
  const hasImages = hero.beforeImage && hero.afterImage;

  // Attempt to play both videos simultaneously
  const tryPlay = useCallback(() => {
    const after  = afterRef.current;
    const before = beforeRef.current;
    if (!after || !before) return;
    after.play().catch(() => {});
    before.play().catch(() => {});
  }, []);

  // Eagerly mount and start playback as soon as data buffers
  useEffect(() => {
    if (!hasVideos) return;
    const after  = afterRef.current;
    const before = beforeRef.current;
    if (!after || !before) return;

    const onReady = () => {
      setVideosReady(true);
      tryPlay();
    };

    if (after.readyState >= 3 && before.readyState >= 3) {
      onReady();
    } else {
      after.addEventListener("canplay", onReady, { once: true });
      before.addEventListener("canplay", onReady, { once: true });
    }

    return () => {
      after.removeEventListener("canplay", onReady);
      before.removeEventListener("canplay", onReady);
    };
  }, [hasVideos, tryPlay]);

  // Keep both videos in sync (same currentTime)
  useEffect(() => {
    if (!hasVideos) return;
    const after  = afterRef.current;
    const before = beforeRef.current;
    if (!after || !before) return;

    const sync = () => {
      if (Math.abs(before.currentTime - after.currentTime) > 0.15) {
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
          {/* Layer 1: Instant Split Posters (Visible immediately, 0ms latency) */}
          {hero.afterPoster && (
            <div className="scene img" aria-hidden="true">
              <img
                src={hero.afterPoster}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}
          {hero.beforePoster && (
            <div className="scene flat img" aria-hidden="true">
              <img
                src={hero.beforePoster}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}

          {/* Layer 2: FastStart Streaming Videos (Fade in smoothly once buffered) */}
          <div className="scene img">
            <video
              ref={afterRef}
              src={hero.afterVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              style={{
                opacity: videosReady ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
            />
          </div>
          <div className="scene flat img">
            <video
              ref={beforeRef}
              src={hero.beforeVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
              style={{
                opacity: videosReady ? 1 : 0,
                transition: "opacity 0.4s ease",
              }}
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

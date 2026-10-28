"use client";
import { useState, useRef, useEffect, useCallback } from "react";

export default function GradeSlider({ hero }) {
  // Start with p = 0 so initially 100% Log footage is displayed
  const [p, setP] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [videosReady, setVideosReady] = useState(false);

  const afterRef  = useRef(null);
  const beforeRef = useRef(null);
  const timers    = useRef([]);

  const hasVideos = hero.beforeVideo && hero.afterVideo;
  const hasImages = hero.beforeImage && hero.afterImage;

  // Clear all pending transition timers
  const clearAllTimers = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, []);

  // Attempt to play both videos simultaneously
  const tryPlay = useCallback(() => {
    const after  = afterRef.current;
    const before = beforeRef.current;
    if (!after || !before) return;
    after.play().catch(() => {});
    before.play().catch(() => {});
  }, []);

  // Choreographed 2-stage Easy Ease reveal: 0% -> 50% (middle pause) -> 100% (right end)
  const triggerAutoWipe = useCallback(() => {
    clearAllTimers();
    setIsAnimating(false);
    setP(0);

    // Stage 1: Wait 400ms showing 100% Log, then Easy Ease to 50% (middle)
    timers.current.push(
      setTimeout(() => {
        setIsAnimating(true);
        setP(50);

        // Stage 2: After spending ~1.5s in the middle, continue Easy Ease to 100% (right end)
        // 2000ms animation duration + 1500ms middle pause = 3500ms
        timers.current.push(
          setTimeout(() => {
            setIsAnimating(true);
            setP(100);

            // Settle once it reaches the right end
            timers.current.push(
              setTimeout(() => {
                setIsAnimating(false);
              }, 2100)
            );
          }, 3500)
        );
      }, 400)
    );
  }, [clearAllTimers]);

  // Run the automatic wipe on initial mount / video playback
  useEffect(() => {
    triggerAutoWipe();
    return () => clearAllTimers();
  }, [triggerAutoWipe, clearAllTimers]);

  // Handle video ready state & play
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

  // Keep both videos synchronized
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

  // Manual drag handler: cancels animation instantly for 1:1 manual control
  const handleManualChange = (newVal) => {
    clearAllTimers();
    setIsAnimating(false);
    setP(newVal);
  };

  return (
    <div
      className={`grade ${isAnimating ? "grade--animating" : ""}`}
      style={{ "--p": `${p}%` }}
    >
      {hasVideos ? (
        <>
          {/* Layer 1: Instant Split Posters (Visible immediately, 0ms latency) */}
          {/* Base poster: Log footage (100% visible initially) */}
          {hero.beforePoster && (
            <div className="scene img" aria-hidden="true">
              <img
                src={hero.beforePoster}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}
          {/* Top clipped poster: Final Grade (expands rightwards from 0% to p%) */}
          {hero.afterPoster && (
            <div className="scene graded img" aria-hidden="true">
              <img
                src={hero.afterPoster}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}

          {/* Layer 2: FastStart Streaming Videos (Fade in once buffered) */}
          {/* Base video: Log footage */}
          <div className="scene img">
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
          {/* Top clipped video: Final Grade */}
          <div className="scene graded img">
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
        </>
      ) : hasImages ? (
        <>
          <div className="scene img">
            <img src={hero.beforeImage} alt="Ungraded log frame" />
          </div>
          <div className="scene graded img">
            <img src={hero.afterImage} alt="Final graded frame" />
          </div>
        </>
      ) : (
        <>
          <div className="scene" />
          <div className="scene graded" />
        </>
      )}

      {/* Dynamic labels */}
      <span className="tag l">{hero.labelAfter}</span>
      <span className="tag r">{hero.labelBefore}</span>

      {/* Slider handle */}
      <div className="handle" />

      {/* Replay Auto Wipe action button */}
      <button
        type="button"
        className="grade-replay-pill"
        onClick={triggerAutoWipe}
        aria-label="Replay grade wipe animation"
        title="Replay automatic grade wipe"
      >
        <svg
          width="11"
          height="11"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          aria-hidden="true"
        >
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
          <path d="M3 3v5h5" />
        </svg>
        <span>Auto Wipe</span>
      </button>

      {/* Manual Range Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={p}
        onChange={(e) => handleManualChange(Number(e.target.value))}
        aria-label="Compare ungraded log and final graded footage"
      />
    </div>
  );
}

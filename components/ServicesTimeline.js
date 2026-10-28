"use client";
import { useState, useEffect } from "react";

export default function ServicesTimeline({ pipeline }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-advancing editing playhead
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % pipeline.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isHovered, pipeline.length]);

  const timecodes = ["00:00:00:00", "00:00:15:12", "00:00:30:18", "00:00:45:23"];

  return (
    <div
      className="services-timeline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Top timeline ruler & playhead indicator */}
      <div className="st-ruler-bar" aria-hidden="true">
        <div className="st-ruler-track">
          <div
            className="st-playhead"
            style={{ "--active-pct": `${(activeStep / (pipeline.length - 1)) * 100}%` }}
          >
            <div className="st-playhead-marker" />
            <span className="st-playhead-tc">{timecodes[activeStep]}</span>
          </div>
        </div>
      </div>

      {/* 4 Pipeline Step Cards */}
      <div className="pipeline st-pipeline">
        {pipeline.map((s, idx) => {
          const isActive = activeStep === idx;
          return (
            <div
              key={s.title}
              className={`st-step ${isActive ? "st-step--active" : ""}`}
              onMouseEnter={() => {
                setActiveStep(idx);
                setIsHovered(true);
              }}
              onClick={() => setActiveStep(idx)}
              role="button"
              tabIndex={0}
              aria-label={`Pipeline step ${idx + 1}: ${s.title}`}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setActiveStep(idx);
              }}
            >
              <div className="st-step-header">
                <span className="st-step-num">PHASE {String(idx + 1).padStart(2, "0")}</span>
                <span className="st-step-dot" />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

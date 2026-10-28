"use client";
import { useState, useEffect } from "react";

export default function Experience({ experience }) {
  if (!experience || experience.length === 0) return null;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused]       = useState(false);

  const works = experience[0]?.works || [];

  // Auto-cycle through the 5 clips every 3.8s unless hovered or tapped
  useEffect(() => {
    if (isPaused || works.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % works.length);
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, works.length]);

  return (
    <section id="experience" className="experience-section">
      <div className="section-head">
        <h2>Experience & Direction</h2>
      </div>

      <div className="experience-list">
        {experience.map((exp, expIdx) => {
          const orgName = exp.organisation || exp.org;
          const roleName = exp.position || exp.role;

          return (
            <div key={expIdx} className="exp-org-block">
              {/* Organization and Role Banner */}
              <div className="exp-meta-header">
                <div className="exp-meta-main">
                  <span className="exp-role-badge">{roleName}</span>
                  <h3 className="exp-org-title">{orgName}</h3>
                </div>
                {exp.period && (
                  <div className="exp-period-pill">
                    <span className="period-dot" />
                    <span>{exp.period}</span>
                  </div>
                )}
              </div>

              {/* Interactive Timeline Filmstrip */}
              <div
                className="exp-strip-container"
                role="tablist"
                aria-label="Experience Productions"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
              >
                {works.map((work, wIdx) => {
                  const eventName = work.eventName || work.event;
                  const eventDate = work.eventDate || work.date;
                  const videoUrl = work.link || work.videoUrl || "#";
                  const isExternal = videoUrl && videoUrl !== "#";
                  const isActive = activeIndex === wIdx;
                  const showDate =
                    eventDate &&
                    !eventDate.toLowerCase().includes("not shown");

                  return (
                    <div
                      key={wIdx}
                      className={`exp-strip-panel ${
                        isActive ? "exp-strip-panel--active" : ""
                      }`}
                      onMouseEnter={() => setActiveIndex(wIdx)}
                      onClick={() => setActiveIndex(wIdx)}
                      role="tab"
                      aria-selected={isActive}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          setActiveIndex(wIdx);
                        }
                      }}
                    >
                      {/* Background image & cinematic grade */}
                      {work.image && (
                        <div className="exp-strip-media" aria-hidden="true">
                          <img
                            src={work.image}
                            alt=""
                            loading="lazy"
                            className="exp-strip-img"
                          />
                          <div className="exp-strip-overlay" />
                        </div>
                      )}

                      {/* Collapsed Spine Indicator */}
                      <div
                        className="exp-strip-spine"
                        aria-hidden={isActive}
                      >
                        <span className="exp-spine-num">
                          {String(wIdx + 1).padStart(2, "0")}
                        </span>
                        <span className="exp-spine-title">{eventName}</span>
                        <span className="exp-spine-dot" />
                      </div>

                      {/* Expanded Content Panel */}
                      <div
                        className="exp-strip-expanded"
                        aria-hidden={!isActive}
                      >
                        <div className="exp-panel-top">
                          <div className="exp-panel-badge">
                            <span className="exp-badge-tc">
                              CLIP {String(wIdx + 1).padStart(2, "0")} // 05
                            </span>
                            {showDate && (
                              <span className="exp-panel-date">
                                {eventDate}
                              </span>
                            )}
                          </div>
                        </div>

                        <div className="exp-panel-main">
                          <h4 className="exp-panel-title">{eventName}</h4>
                          <p className="exp-panel-desc">{work.description}</p>
                        </div>

                        <div className="exp-panel-footer">
                          <a
                            href={videoUrl}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className={`exp-link-btn ${
                              !isExternal ? "exp-link-btn--disabled" : ""
                            }`}
                            aria-label={`Watch ${eventName} reel`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <span className="exp-btn-icon">
                              <svg
                                width="12"
                                height="12"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <polygon points="5 3 19 12 5 21 5 3" />
                              </svg>
                            </span>
                            <span className="exp-btn-text">Watch Reel</span>
                            <span className="exp-btn-arrow">↗</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Timeline Track Scrubber with Countdown Progress */}
              <div className="exp-scrubber-bar" aria-hidden="true">
                <div className="exp-scrubber-track">
                  {works.map((_, i) => {
                    const isActive = activeIndex === i;
                    return (
                      <button
                        key={i}
                        type="button"
                        className={`exp-scrubber-pip ${
                          isActive ? "exp-scrubber-pip--active" : ""
                        }`}
                        onClick={() => {
                          setActiveIndex(i);
                          setIsPaused(true);
                        }}
                        aria-label={`Jump to clip ${i + 1}`}
                      >
                        {isActive && (
                          <span
                            key={`fill-${activeIndex}`}
                            className="exp-pip-fill"
                            style={{
                              animationPlayState: isPaused ? "paused" : "running",
                            }}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
                <span className="exp-scrubber-hint">
                  {isPaused
                    ? "AUTO-CYCLE PAUSED // CLICK TO JUMP"
                    : "AUTO-CYCLE ACTIVE // HOVER TO PAUSE"}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

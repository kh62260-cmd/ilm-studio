"use client";

export default function Crescent() {
  return (
    <div className="crescent-wrapper">
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
      >
        <defs>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <circle
          cx="110"
          cy="110"
          r="70"
          stroke="#D4AF37"
          strokeWidth="16"
          filter="url(#goldGlow)"
        />

        <circle
          cx="135"
          cy="95"
          r="70"
          fill="#000"
        />
      </svg>
    </div>
  );
}
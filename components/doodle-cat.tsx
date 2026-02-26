export function DoodleCat({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 260 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Cat body */}
      <path
        d="M60 320 L60 160 L40 80 L90 120 L130 100 L170 120 L220 80 L200 160 L200 320"
        fill="#7b9bb5"
        stroke="white"
        strokeWidth="4"
        strokeLinejoin="round"
      />
      {/* Left ear inner */}
      <path
        d="M55 100 L80 125 L45 85"
        fill="#5a7a94"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Right ear inner */}
      <path
        d="M205 100 L180 125 L215 85"
        fill="#5a7a94"
        stroke="white"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Left eye */}
      <ellipse cx="100" cy="190" rx="24" ry="28" fill="white" stroke="white" strokeWidth="3" />
      <ellipse cx="100" cy="192" rx="14" ry="18" fill="#1a1a1a" />
      <ellipse cx="105" cy="186" rx="5" ry="6" fill="white" />
      {/* Right eye */}
      <ellipse cx="160" cy="190" rx="24" ry="28" fill="white" stroke="white" strokeWidth="3" />
      <ellipse cx="160" cy="192" rx="14" ry="18" fill="#1a1a1a" />
      <ellipse cx="165" cy="186" rx="5" ry="6" fill="white" />
      {/* Nose */}
      <path
        d="M128 218 L132 218 L130 222 Z"
        fill="white"
        stroke="white"
        strokeWidth="1"
      />
      {/* Whiskers left */}
      <line x1="50" y1="200" x2="85" y2="210" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="48" y1="215" x2="85" y2="215" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="50" y1="230" x2="85" y2="220" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      {/* Whiskers right */}
      <line x1="210" y1="200" x2="175" y2="210" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="212" y1="215" x2="175" y2="215" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="210" y1="230" x2="175" y2="220" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

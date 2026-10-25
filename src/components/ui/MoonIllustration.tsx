export default function MoonIllustration() {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full hero-moon"
      aria-hidden="true"
      role="img"
    >
      <defs>
        {/* Moon surface gradient */}
        <radialGradient id="moonGrad" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#F6F3EA" />
          <stop offset="40%" stopColor="#E0D9C8" />
          <stop offset="70%" stopColor="#C4BAA4" />
          <stop offset="100%" stopColor="#8A7E68" />
        </radialGradient>

        {/* Shadow gradient */}
        <radialGradient id="moonShadow" cx="75%" cy="60%" r="55%">
          <stop offset="0%" stopColor="transparent" />
          <stop offset="60%" stopColor="rgba(8,21,38,0.3)" />
          <stop offset="100%" stopColor="rgba(8,21,38,0.8)" />
        </radialGradient>

        {/* Glow */}
        <radialGradient id="moonGlow" cx="50%" cy="50%" r="50%">
          <stop offset="70%" stopColor="transparent" />
          <stop offset="85%" stopColor="rgba(233,185,91,0.08)" />
          <stop offset="100%" stopColor="rgba(233,185,91,0.02)" />
        </radialGradient>

        {/* Crater shadow */}
        <radialGradient id="craterShade" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="rgba(120,108,88,0.4)" />
          <stop offset="100%" stopColor="rgba(90,80,65,0.2)" />
        </radialGradient>

        {/* Clip for moon circle */}
        <clipPath id="moonClip">
          <circle cx="250" cy="250" r="180" />
        </clipPath>
      </defs>

      {/* Outer glow */}
      <circle cx="250" cy="250" r="240" fill="url(#moonGlow)" />

      {/* Moon body */}
      <circle cx="250" cy="250" r="180" fill="url(#moonGrad)" />

      {/* Surface details (craters) — clipped to moon */}
      <g clipPath="url(#moonClip)">
        {/* Large craters */}
        <ellipse cx="200" cy="200" rx="35" ry="32" fill="url(#craterShade)" opacity="0.3" />
        <ellipse cx="310" cy="170" rx="20" ry="18" fill="url(#craterShade)" opacity="0.25" />
        <ellipse cx="180" cy="310" rx="28" ry="25" fill="url(#craterShade)" opacity="0.2" />
        <ellipse cx="280" cy="290" rx="15" ry="14" fill="url(#craterShade)" opacity="0.2" />
        <ellipse cx="240" cy="150" rx="12" ry="11" fill="url(#craterShade)" opacity="0.15" />

        {/* Medium craters */}
        <circle cx="150" cy="240" r="10" fill="url(#craterShade)" opacity="0.15" />
        <circle cx="330" cy="250" r="8" fill="url(#craterShade)" opacity="0.12" />
        <circle cx="220" cy="350" r="12" fill="url(#craterShade)" opacity="0.18" />
        <circle cx="290" cy="190" r="7" fill="url(#craterShade)" opacity="0.1" />

        {/* Small craters */}
        <circle cx="170" cy="170" r="4" fill="url(#craterShade)" opacity="0.12" />
        <circle cx="260" cy="220" r="5" fill="url(#craterShade)" opacity="0.1" />
        <circle cx="350" cy="300" r="3" fill="url(#craterShade)" opacity="0.08" />
        <circle cx="140" cy="280" r="3" fill="url(#craterShade)" opacity="0.08" />

        {/* Shadow overlay for 3D effect */}
        <circle cx="250" cy="250" r="180" fill="url(#moonShadow)" />

        {/* Subtle surface texture lines */}
        <path d="M160 220 Q200 210 230 225" stroke="rgba(120,108,88,0.08)" strokeWidth="1" fill="none" />
        <path d="M270 180 Q300 175 320 190" stroke="rgba(120,108,88,0.06)" strokeWidth="1" fill="none" />
      </g>

      {/* Rim highlight */}
      <circle
        cx="250"
        cy="250"
        r="179"
        fill="none"
        stroke="rgba(246,243,234,0.15)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

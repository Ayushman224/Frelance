/** Decorative landscape illustration for the fictional Austin GreenScape demo (no stock photos needed). */
export function LandscapeArt({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 800 400" preserveAspectRatio="xMidYMid slice" className={className} aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="ls-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d9f2e6" />
          <stop offset="1" stopColor="#f4fbf6" />
        </linearGradient>
        <linearGradient id="ls-hill-back" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#8fcfa6" />
          <stop offset="1" stopColor="#6fb98a" />
        </linearGradient>
        <linearGradient id="ls-hill-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3f9a63" />
          <stop offset="1" stopColor="#2c7a4b" />
        </linearGradient>
      </defs>
      <rect width="800" height="400" fill="url(#ls-sky)" />
      <circle cx="650" cy="90" r="46" fill="#fde68a" opacity="0.9" />
      <path d="M0 250 C 140 190 260 210 380 235 S 640 190 800 225 V400 H0Z" fill="url(#ls-hill-back)" />
      <g fill="#2f7d4f">
        <path d="M120 250 l22 -60 l22 60z" />
        <path d="M150 255 l18 -48 l18 48z" opacity="0.85" />
        <path d="M600 232 l24 -66 l24 66z" />
        <path d="M635 238 l18 -50 l18 50z" opacity="0.85" />
      </g>
      <g fill="#6b4f2a">
        <rect x="140" y="248" width="4" height="12" />
        <rect x="622" y="230" width="4" height="12" />
      </g>
      <path d="M0 300 C 160 260 320 280 440 300 S 680 270 800 290 V400 H0Z" fill="url(#ls-hill-front)" />
      <g fill="#1f6a3e">
        <circle cx="470" cy="286" r="26" />
        <circle cx="498" cy="292" r="20" />
        <circle cx="448" cy="296" r="18" />
      </g>
      <rect x="468" y="300" width="5" height="18" fill="#5b4122" />
      <path d="M0 350 C 200 330 420 345 800 335 V400 H0Z" fill="#256b41" />
      <g stroke="#9ad5ad" strokeWidth="2" opacity="0.5">
        <path d="M40 370 h720" />
        <path d="M80 385 h640" />
      </g>
    </svg>
  );
}

import { cn } from "@/lib/utils"

type SiteLogoProps = {
  className?: string
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <svg
      viewBox="0 0 360 120"
      role="img"
      aria-label="Naga5 logo"
      className={cn("h-10 w-auto", className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="silver" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#f8fbff" />
          <stop offset="52%" stopColor="#c9d4e1" />
          <stop offset="100%" stopColor="#90a1b3" />
        </linearGradient>
        <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7cf5ff" />
          <stop offset="100%" stopColor="#00b6ff" />
        </linearGradient>
        <filter id="glow">
          <feDropShadow dx="0" dy="0" stdDeviation="2.8" floodColor="#2ce7ff" floodOpacity="0.72" />
        </filter>
      </defs>

      <text x="12" y="38" fill="url(#silver)" fontSize="52" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">
        N
      </text>
      <text x="12" y="77" fill="url(#silver)" fontSize="52" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">
        N
      </text>
      <text x="12" y="116" fill="url(#silver)" fontSize="52" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">
        N
      </text>

      <rect x="84" y="6" width="174" height="108" rx="8" fill="url(#silver)" />

      <path
        d="M174 94c-31 0-55-15-62-39-8-25 5-49 29-59 16-7 33-6 46 2-11 0-22 4-30 11-14 12-18 33-8 49 9 16 28 24 46 20 13-3 24-14 26-27 2-12-3-24-14-30-7-4-16-5-24-2 9-10 24-14 37-10 17 4 30 20 31 37 2 26-20 48-48 48-10 0-20-2-29-7z"
        fill="#05172d"
        filter="url(#glow)"
      />
      <path
        d="M165 90c-21-2-37-13-42-31-6-20 5-39 24-46 7-3 15-4 22-2-14 4-25 16-27 31-2 20 13 38 33 40 14 2 28-5 36-17-5 16-24 28-46 25z"
        fill="none"
        stroke="url(#cyanGlow)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="194" cy="40" r="3" fill="#7cf5ff" />

      <text x="265" y="38" fill="url(#silver)" fontSize="54" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">
        G
      </text>
      <text x="286" y="77" fill="url(#silver)" fontSize="54" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">
        5
      </text>
      <text x="286" y="116" fill="url(#silver)" fontSize="54" fontWeight="900" fontFamily="Arial Black, Arial, sans-serif">
        5
      </text>
    </svg>
  )
}

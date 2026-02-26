export function SpiralHeart({ className, size = 60 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M30 55 C30 55 5 35 5 20 C5 10 15 5 22 8 C27 10 30 16 30 16 C30 16 33 10 38 8 C45 5 55 10 55 20 C55 35 30 55 30 55Z"
        fill="none"
        stroke="#7b9bb5"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M30 45 C30 45 14 32 14 22 C14 16 20 13 24 15 C27 16 30 20 30 20 C30 20 33 16 36 15 C40 13 46 16 46 22 C46 32 30 45 30 45Z"
        fill="none"
        stroke="#7b9bb5"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M30 36 C30 36 22 29 22 24 C22 21 25 19 27 20 C29 21 30 24 30 24 C30 24 31 21 33 20 C35 19 38 21 38 24 C38 29 30 36 30 36Z"
        fill="none"
        stroke="#7b9bb5"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function DoodleStar({ className, size = 80 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M40 5 L48 28 L72 28 L53 42 L60 66 L40 52 L20 66 L27 42 L8 28 L32 28 Z"
        fill="#7b9bb5"
        stroke="#7b9bb5"
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function GoldHeart({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="#d4a853"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 14 C8 14 1 9 1 5 C1 2.5 3.5 1 5.5 2 C7 2.8 8 4.5 8 4.5 C8 4.5 9 2.8 10.5 2 C12.5 1 15 2.5 15 5 C15 9 8 14 8 14Z" />
    </svg>
  )
}

export function DoodleCircle({ className, size = 30 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="15" cy="15" r="12" stroke="#7b9bb5" strokeWidth="2.5" fill="none" />
      <circle cx="15" cy="15" r="4" fill="#7b9bb5" />
    </svg>
  )
}

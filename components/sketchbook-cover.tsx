"use client"

import { useState } from "react"

function FishDoodles() {
  return (
    <svg
      viewBox="0 0 480 720"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="fishGloss1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7DBBD9" stopOpacity="0.6" />
          <stop offset="40%" stopColor="#5F9CC4" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#4A7FA3" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="fishGloss2" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#8ECAE6" stopOpacity="0.5" />
          <stop offset="50%" stopColor="#5F9CC4" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#4A7FA3" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="fishGloss3" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#9DD5ED" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#5F9CC4" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#3D6E8E" stopOpacity="0.15" />
        </linearGradient>
      </defs>
      <g transform="translate(60, 120) rotate(-10)">
        <ellipse cx="0" cy="0" rx="18" ry="8" fill="url(#fishGloss1)" stroke="#5F9CC4" strokeWidth="1.2" />
        <path d="M-18,0 L-28,-7 L-28,7 Z" fill="url(#fishGloss1)" stroke="#5F9CC4" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="10" cy="-2" r="1.5" fill="#5F9CC4" opacity="0.7" />
      </g>
      <g transform="translate(390, 90) scale(-1,1) rotate(5)">
        <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#fishGloss2)" stroke="#5F9CC4" strokeWidth="1.2" />
        <path d="M-22,0 L-34,-9 L-34,9 Z" fill="url(#fishGloss2)" stroke="#5F9CC4" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="12" cy="-3" r="2" fill="#5F9CC4" opacity="0.7" />
      </g>
      <g transform="translate(45, 320) rotate(8)">
        <ellipse cx="0" cy="0" rx="14" ry="6" fill="url(#fishGloss3)" stroke="#5F9CC4" strokeWidth="1" />
        <path d="M-14,0 L-22,-5 L-22,5 Z" fill="url(#fishGloss3)" stroke="#5F9CC4" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="8" cy="-1.5" r="1.2" fill="#5F9CC4" opacity="0.7" />
      </g>
      <g transform="translate(430, 380) scale(-1,1) rotate(-6)">
        <ellipse cx="0" cy="0" rx="16" ry="7" fill="url(#fishGloss1)" stroke="#5F9CC4" strokeWidth="1" />
        <path d="M-16,0 L-25,-6 L-25,6 Z" fill="url(#fishGloss1)" stroke="#5F9CC4" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="9" cy="-2" r="1.4" fill="#5F9CC4" opacity="0.7" />
      </g>
      <g transform="translate(90, 580) rotate(-5)">
        <ellipse cx="0" cy="0" rx="20" ry="9" fill="url(#fishGloss2)" stroke="#5F9CC4" strokeWidth="1.2" />
        <path d="M-20,0 L-30,-8 L-30,8 Z" fill="url(#fishGloss2)" stroke="#5F9CC4" strokeWidth="1.2" strokeLinejoin="round" />
        <circle cx="11" cy="-2.5" r="1.8" fill="#5F9CC4" opacity="0.7" />
      </g>
      <g transform="translate(370, 620) scale(-1,1) rotate(12)">
        <ellipse cx="0" cy="0" rx="12" ry="5" fill="url(#fishGloss3)" stroke="#5F9CC4" strokeWidth="1" />
        <path d="M-12,0 L-19,-4 L-19,4 Z" fill="url(#fishGloss3)" stroke="#5F9CC4" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="7" cy="-1" r="1" fill="#5F9CC4" opacity="0.7" />
      </g>
      <g transform="translate(240, 55) rotate(3)">
        <ellipse cx="0" cy="0" rx="10" ry="4.5" fill="url(#fishGloss1)" stroke="#5F9CC4" strokeWidth="0.8" />
        <path d="M-10,0 L-16,-4 L-16,4 Z" fill="url(#fishGloss1)" stroke="#5F9CC4" strokeWidth="0.8" strokeLinejoin="round" />
        <circle cx="6" cy="-1" r="1" fill="#5F9CC4" opacity="0.7" />
      </g>
      <g transform="translate(260, 670) scale(-1,1) rotate(-3)">
        <ellipse cx="0" cy="0" rx="15" ry="6.5" fill="url(#fishGloss2)" stroke="#5F9CC4" strokeWidth="1" />
        <path d="M-15,0 L-23,-5.5 L-23,5.5 Z" fill="url(#fishGloss2)" stroke="#5F9CC4" strokeWidth="1" strokeLinejoin="round" />
        <circle cx="8" cy="-1.5" r="1.2" fill="#5F9CC4" opacity="0.7" />
      </g>
      <circle cx="130" cy="180" r="2.5" fill="#5F9CC4" opacity="0.15" />
      <circle cx="350" cy="150" r="1.8" fill="#5F9CC4" opacity="0.12" />
      <circle cx="80" cy="450" r="2" fill="#5F9CC4" opacity="0.1" />
      <circle cx="400" cy="500" r="3" fill="#5F9CC4" opacity="0.12" />
      <circle cx="200" cy="650" r="1.5" fill="#5F9CC4" opacity="0.1" />
      <circle cx="320" cy="270" r="2" fill="#5F9CC4" opacity="0.1" />
    </svg>
  )
}

const PAPER_COLOR = "#f0e8d0"
const PAPER_BACK_COLOR = "#ede5cb"
const TOTAL_SHEETS = 4
const ANIM_DURATION = 900
const TURN_EASE = "cubic-bezier(0.22, 1, 0.36, 1)"

function PaperTexture() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  )
}

function PageEdgeStack() {
  return (
    <div
      className="absolute right-0 top-[2px] bottom-[2px] w-[clamp(4px,1vw,8px)] z-10"
      style={{
        background: `linear-gradient(90deg, ${PAPER_BACK_COLOR}, ${PAPER_COLOR} 30%, ${PAPER_BACK_COLOR} 60%, ${PAPER_COLOR} 80%, ${PAPER_BACK_COLOR})`,
      }}
    />
  )
}

const FLIP_STYLES = `
@keyframes pageCurlForward {
  0% { transform: scaleX(1) skewY(0deg); }
  48% { transform: scaleX(0.7) skewY(-1deg); }
  52% { transform: scaleX(0.66) skewY(1deg); }
  100% { transform: scaleX(1) skewY(0deg); }
}

@keyframes pageCurlBackward {
  0% { transform: scaleX(1) skewY(0deg); }
  48% { transform: scaleX(0.7) skewY(1deg); }
  52% { transform: scaleX(0.66) skewY(-1deg); }
  100% { transform: scaleX(1) skewY(0deg); }
}

@keyframes pageShadowPulse {
  0% { opacity: 0; }
  40% { opacity: 0.3; }
  55% { opacity: 0.42; }
  100% { opacity: 0; }
}
`

type FlipDir = "forward" | "backward" | null

function FlippableSheet({
  sheetIndex,
  isFlipped,
  flipDir,
  coverOpen,
  onClick,
  onTurnComplete,
}: {
  sheetIndex: number
  isFlipped: boolean
  flipDir: FlipDir
  coverOpen: boolean
  onClick: () => void
  onTurnComplete: () => void
}) {
  const zBase = TOTAL_SHEETS - sheetIndex
  const isTurning = flipDir !== null
  const zIndex = isTurning ? TOTAL_SHEETS + 20 : isFlipped ? sheetIndex + 1 : zBase

  const staticTransform = isFlipped
    ? "perspective(2500px) rotateY(-180deg) scaleX(1)"
    : "perspective(2500px) rotateY(0deg) scaleX(1)"

  const curlAnim =
    flipDir === "forward"
      ? "pageCurlForward"
      : flipDir === "backward"
        ? "pageCurlBackward"
        : undefined

  return (
    <div
      className="absolute inset-0"
      style={{
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
        transform: staticTransform,
        transition: isTurning ? `transform ${ANIM_DURATION}ms ${TURN_EASE}` : "none",
        willChange: isTurning ? "transform" : undefined,
        zIndex,
        cursor: coverOpen ? "pointer" : "default",
        pointerEvents: coverOpen ? "auto" : "none",
      }}
      onClick={(e) => {
        e.stopPropagation()
        const rect = e.currentTarget.getBoundingClientRect()
        if (rect.width <= 0) return
        const clickRatio = (e.clientX - rect.left) / rect.width
        const clickedAllowedSide = isFlipped ? clickRatio < 0.5 : clickRatio > 0.5
        if (!clickedAllowedSide) return
        onClick()
      }}
      role="button"
      tabIndex={coverOpen ? 0 : -1}
      aria-label={isFlipped ? "Voltar pagina" : "Virar pagina"}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      onTransitionEnd={(e) => {
        if (e.target !== e.currentTarget || e.propertyName !== "transform") return
        if (isTurning) {
          onTurnComplete()
        }
      }}
    >
      {/* Front face -- right-hand page */}
      <div
        className="absolute inset-0 rounded-r-lg sm:rounded-r-xl overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          background: PAPER_COLOR,
          transformOrigin: "left center",
          animation: curlAnim ? `${curlAnim} ${ANIM_DURATION}ms ${TURN_EASE}` : undefined,
          willChange: curlAnim ? "transform" : undefined,
        }}
      >
        <PageEdgeStack />
        <PaperTexture />
        {/* Curved highlight/shadow that simulates cylindrical curl */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.04) 0%, transparent 15%, transparent 85%, rgba(0,0,0,0.02) 100%)",
          }}
        />
      </div>

      {/* Back face -- left-hand page when flipped */}
      <div
        className="absolute inset-0 rounded-l-lg sm:rounded-l-xl overflow-hidden"
        style={{
          backfaceVisibility: "hidden",
          transform: "rotateY(180deg)",
          background: PAPER_BACK_COLOR,
          transformOrigin: "left center",
          animation: curlAnim ? `${curlAnim} ${ANIM_DURATION}ms ${TURN_EASE}` : undefined,
          willChange: curlAnim ? "transform" : undefined,
        }}
      >
        <PaperTexture />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(-90deg, rgba(0,0,0,0.05) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.02) 100%)",
          }}
        />
      </div>

      {/* Drop shadow onto the page below, visible mid-animation */}
      {isTurning && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 30%, transparent 60%)",
            animation: `pageShadowPulse ${ANIM_DURATION}ms linear forwards`,
            zIndex: -1,
          }}
        />
      )}
    </div>
  )
}

export function SketchbookCover() {
  const [coverOpen, setCoverOpen] = useState(false)
  const [coverFlipDir, setCoverFlipDir] = useState<FlipDir>(null)
  const [flippedSheets, setFlippedSheets] = useState<boolean[]>(
    Array(TOTAL_SHEETS).fill(false)
  )
  const [settledFlippedSheets, setSettledFlippedSheets] = useState<boolean[]>(
    Array(TOTAL_SHEETS).fill(false)
  )
  const [sheetFlipDirs, setSheetFlipDirs] = useState<FlipDir[]>(
    Array(TOTAL_SHEETS).fill(null)
  )
  const [animating, setAnimating] = useState(false)

  function handleCoverClick() {
    if (animating) return
    if (!coverOpen) {
      setAnimating(true)
      setCoverFlipDir("forward")
      setCoverOpen(true)
    } else {
      const allClosed = flippedSheets.every((f) => !f)
      if (allClosed) {
        setAnimating(true)
        setCoverFlipDir("backward")
        setCoverOpen(false)
      }
    }
  }

  function handleSheetClick(index: number) {
    if (animating) return
    setFlippedSheets((prev) => {
      const next = [...prev]
      if (!next[index]) {
        const firstUnflipped = prev.findIndex((f) => !f)
        if (firstUnflipped !== index) return prev
        next[index] = true
        setAnimating(true)
        setSheetFlipDirs((d) => {
          const nd = [...d]
          nd[index] = "forward"
          return nd
        })
      } else {
        const lastFlipped = prev.lastIndexOf(true)
        if (lastFlipped !== index) return prev
        next[index] = false
        setAnimating(true)
        setSheetFlipDirs((d) => {
          const nd = [...d]
          nd[index] = "backward"
          return nd
        })
      }
      return next
    })
  }

  const coverStaticTransform = coverOpen
    ? "perspective(2500px) rotateY(-180deg)"
    : "perspective(2500px) rotateY(0deg)"

  const settledHasFlippedSheets = settledFlippedSheets.some(Boolean)
  const hasLogicalFlippedSheets = flippedSheets.some(Boolean)
  const isOpeningFromCoverSpread =
    !settledHasFlippedSheets && sheetFlipDirs.some((d) => d === "forward")
  const isClosingToCoverSpread =
    settledHasFlippedSheets &&
    !hasLogicalFlippedSheets &&
    sheetFlipDirs.some((d) => d === "backward")
  const showPaperLeftSide = isOpeningFromCoverSpread
    ? true
    : isClosingToCoverSpread
      ? false
      : settledHasFlippedSheets

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: FLIP_STYLES }} />
      <main className="flex items-center justify-center min-h-svh bg-[#0d0d0d] p-4 sm:p-6 md:p-8 overflow-hidden">
        {/* Book wrapper */}
        <div
          className="relative transition-transform duration-700 ease-in-out"
          style={{ transform: "translateX(0)" }}
        >
          {/* Perspective container */}
          <div
            className="relative w-[min(90vw,480px)] aspect-[3/4.5]"
            style={{ perspective: "2500px", perspectiveOrigin: "left center" }}
          >
            {/* Back page -- always visible at the bottom */}
            <div
              className="absolute inset-0 rounded-r-lg sm:rounded-r-xl overflow-hidden"
              style={{
                background: PAPER_COLOR,
                boxShadow: "4px 4px 16px rgba(0,0,0,0.4)",
                zIndex: 0,
              }}
            >
              <PageEdgeStack />
              <PaperTexture />
            </div>

            {/* Interior sheets, rendered bottom-up */}
            {Array.from({ length: TOTAL_SHEETS })
              .map((_, i) => TOTAL_SHEETS - 1 - i)
              .map((idx) => (
                <FlippableSheet
                  key={idx}
                  sheetIndex={idx}
                  isFlipped={flippedSheets[idx]}
                  flipDir={sheetFlipDirs[idx]}
                  coverOpen={coverOpen}
                  onClick={() => handleSheetClick(idx)}
                  onTurnComplete={() => {
                    setSettledFlippedSheets(flippedSheets)
                    setSheetFlipDirs((prev) => {
                      if (!prev[idx]) return prev
                      const next = [...prev]
                      next[idx] = null
                      return next
                    })
                    setAnimating(false)
                  }}
                />
              ))}

            {/* Cover */}
            <div
              className="absolute inset-0 cursor-pointer"
              style={{
                transformOrigin: "left center",
                transformStyle: "preserve-3d",
                transform: coverStaticTransform,
                transition: `transform ${ANIM_DURATION}ms ${TURN_EASE}, box-shadow ${ANIM_DURATION}ms ${TURN_EASE}`,
                willChange: coverFlipDir ? "transform" : undefined,
                boxShadow: coverOpen
                  ? "0 1px 6px rgba(0,0,0,0.15)"
                  : "8px 8px 24px rgba(0,0,0,0.6)",
                zIndex:
                  coverOpen && !coverFlipDir ? 0 : TOTAL_SHEETS + 10,
              }}
              onClick={handleCoverClick}
              role="button"
              tabIndex={0}
              aria-label={coverOpen ? "Fechar caderno" : "Abrir caderno"}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleCoverClick()
                }
              }}
              onTransitionEnd={(e) => {
                if (e.target !== e.currentTarget || e.propertyName !== "transform") return
                if (coverFlipDir) {
                  setCoverFlipDir(null)
                  setAnimating(false)
                }
              }}
            >
              {/* Front of cover */}
              <div
                className="absolute inset-0 rounded-tr-lg rounded-br-lg sm:rounded-tr-xl sm:rounded-br-xl overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  background:
                    "linear-gradient(145deg, #1a1a1a 0%, #111111 50%, #0a0a0a 100%)",
                }}
              >
                {/* Spine */}
                <div
                  className="absolute left-0 top-0 bottom-0 w-[clamp(12px,3vw,20px)] z-10"
                  style={{
                    background:
                      "linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 40%, #111111 60%, #0a0a0a 100%)",
                  }}
                />

                {/* Elastic band */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[clamp(40px,12vw,80px)] h-[clamp(6px,1.5vw,10px)] bg-[#1a1a1a] rounded-b-full z-20 border-b border-[#333]" />

                {/* Fish doodles */}
                <div className="absolute inset-0 pointer-events-none z-[1]">
                  <FishDoodles />
                </div>

                {/* Cover text */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-[clamp(16px,4vw,40px)] z-[2]">
                  <h1 className="font-serif text-foreground text-[clamp(36px,11vw,80px)] font-bold leading-tight text-balance text-center">
                    Margarida Gil
                  </h1>
                  <p className="font-serif text-foreground text-[clamp(16px,5vw,36px)] font-medium tracking-[0.15em] uppercase mt-[clamp(4px,1.5vw,12px)]">
                    Design Portfolio
                  </p>
                  <span className="font-serif text-foreground text-[clamp(14px,3.5vw,24px)] font-bold mt-[clamp(8px,2vw,20px)]">
                    {"'05"}
                  </span>
                </div>

                {/* Grain overlay */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />

                {/* Hint */}
                <div
                  className="absolute bottom-[clamp(12px,3vw,24px)] left-1/2 -translate-x-1/2 z-[3] transition-opacity duration-500"
                  style={{ opacity: coverOpen ? 0 : 1 }}
                >
                  <p className="font-sans text-foreground/40 text-[clamp(9px,2vw,12px)] tracking-widest uppercase animate-pulse">
                    Clica para abrir
                  </p>
                </div>
              </div>

              {/* Back of cover */}
              <div
                className="absolute inset-0 rounded-l-lg sm:rounded-l-xl overflow-hidden"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  background: "linear-gradient(145deg, #181818 0%, #101010 50%, #0a0a0a 100%)",
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(145deg, ${PAPER_BACK_COLOR} 0%, ${PAPER_COLOR} 55%, ${PAPER_BACK_COLOR} 100%)`,
                    opacity: showPaperLeftSide ? 1 : 0,
                    transition: `opacity ${ANIM_DURATION}ms ${TURN_EASE}`,
                  }}
                >
                  <PaperTexture />
                </div>
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      showPaperLeftSide
                        ? "linear-gradient(90deg, rgba(0,0,0,0.07) 0%, rgba(0,0,0,0.02) 14%, transparent 40%)"
                        : "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 18%, transparent 40%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

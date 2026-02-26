"use client"

import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import gsap from "gsap"

type FlipDirection = "forward" | "backward"

type FlipMeta = {
  visible: boolean
  direction: FlipDirection
  sheetIndex: number
}

const TOTAL_SHEETS = 6
const DRAG_THRESHOLD_FORWARD = 0.42
const DRAG_THRESHOLD_BACKWARD = 0.58

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

function pageLabel(pageNumber: number | null) {
  if (!pageNumber) return ""
  return String(pageNumber).padStart(2, "0")
}

export function SketchbookCover() {
  const spreadRef = useRef<HTMLDivElement | null>(null)
  const flipSheetRef = useRef<HTMLDivElement | null>(null)
  const foldGlowRef = useRef<HTMLDivElement | null>(null)
  const castShadowRef = useRef<HTMLDivElement | null>(null)

  const flipProgress = useRef({ value: 0 })
  const dragState = useRef<{
    dragging: boolean
    direction: FlipDirection
    startX: number
    pageWidth: number
  } | null>(null)

  const [currentSheet, setCurrentSheet] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [flipMeta, setFlipMeta] = useState<FlipMeta>({
    visible: false,
    direction: "forward",
    sheetIndex: 0,
  })

  const canFlipForward = currentSheet < TOTAL_SHEETS
  const canFlipBackward = currentSheet > 0

  const leftStaticPage = useMemo(
    () => (currentSheet === 0 ? null : currentSheet * 2),
    [currentSheet],
  )
  const rightStaticPage = useMemo(() => currentSheet * 2 + 1, [currentSheet])

  const setFlipVisual = useCallback((progress: number) => {
    const sheetElement = flipSheetRef.current
    const foldGlowElement = foldGlowRef.current
    const castShadowElement = castShadowRef.current
    const direction = flipMeta.direction

    if (!sheetElement || !foldGlowElement || !castShadowElement) return

    const bend = Math.sin(progress * Math.PI)
    const scaleX = 1 - bend * 0.42
    const rotateZ = (direction === "forward" ? -1 : 1) * bend * 3.2
    const angle = -180 * progress

    gsap.set(sheetElement, {
      transform: `translate3d(0,0,0) perspective(2800px) rotateY(${angle}deg) rotateZ(${rotateZ}deg) scaleX(${scaleX})`,
    })

    gsap.set(foldGlowElement, {
      opacity: 0.16 + bend * 0.52,
      background:
        direction === "forward"
          ? "linear-gradient(90deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 35%, rgba(0,0,0,0.18) 80%, rgba(0,0,0,0.28) 100%)"
          : "linear-gradient(-90deg, rgba(255,255,255,0.34) 0%, rgba(255,255,255,0.14) 35%, rgba(0,0,0,0.18) 80%, rgba(0,0,0,0.28) 100%)",
    })

    gsap.set(castShadowElement, {
      opacity: bend * 0.65,
      transform: `translate3d(0,0,0) scaleX(${0.4 + bend * 0.6})`,
    })
  }, [flipMeta.direction])

  const finalizeFlip = useCallback((targetProgress: number) => {
    if (targetProgress === 1 && flipMeta.direction === "forward") {
      setCurrentSheet((value) => clamp(value + 1, 0, TOTAL_SHEETS))
    }

    if (targetProgress === 0 && flipMeta.direction === "backward") {
      setCurrentSheet((value) => clamp(value - 1, 0, TOTAL_SHEETS))
    }

    setFlipMeta((current) => ({ ...current, visible: false }))
    setIsAnimating(false)
    dragState.current = null
  }, [flipMeta.direction])

  const animateFlipTo = useCallback((targetProgress: number) => {
    setIsAnimating(true)

    gsap.killTweensOf(flipProgress.current)
    gsap.to(flipProgress.current, {
      value: targetProgress,
      duration: 0.85,
      ease: "power3.inOut",
      onUpdate: () => setFlipVisual(flipProgress.current.value),
      onComplete: () => finalizeFlip(targetProgress),
    })
  }, [finalizeFlip, setFlipVisual])

  const beginForwardFlip = useCallback((startProgress: number) => {
    if (!canFlipForward || isAnimating) return

    setFlipMeta({
      visible: true,
      direction: "forward",
      sheetIndex: currentSheet,
    })

    flipProgress.current.value = clamp(startProgress, 0, 1)
    requestAnimationFrame(() => setFlipVisual(flipProgress.current.value))
  }, [canFlipForward, currentSheet, isAnimating, setFlipVisual])

  const beginBackwardFlip = useCallback((startProgress: number) => {
    if (!canFlipBackward || isAnimating) return

    setFlipMeta({
      visible: true,
      direction: "backward",
      sheetIndex: currentSheet - 1,
    })

    flipProgress.current.value = clamp(startProgress, 0, 1)
    requestAnimationFrame(() => setFlipVisual(flipProgress.current.value))
  }, [canFlipBackward, currentSheet, isAnimating, setFlipVisual])

  const triggerForwardClick = useCallback(() => {
    if (!canFlipForward || isAnimating) return
    beginForwardFlip(0)
    requestAnimationFrame(() => animateFlipTo(1))
  }, [animateFlipTo, beginForwardFlip, canFlipForward, isAnimating])

  const triggerBackwardClick = useCallback(() => {
    if (!canFlipBackward || isAnimating) return
    beginBackwardFlip(1)
    requestAnimationFrame(() => animateFlipTo(0))
  }, [animateFlipTo, beginBackwardFlip, canFlipBackward, isAnimating])

  const handlePointerDown = useCallback(
    (event: React.PointerEvent<HTMLDivElement>, direction: FlipDirection) => {
      if (isAnimating) return

      const container = spreadRef.current
      if (!container) return

      const bounds = container.getBoundingClientRect()
      const pageWidth = bounds.width / 2
      const localX = event.clientX - bounds.left

      if (direction === "forward") {
        if (!canFlipForward || localX < bounds.width * 0.7) return
        beginForwardFlip(0)
      } else {
        if (!canFlipBackward || localX > bounds.width * 0.3) return
        beginBackwardFlip(1)
      }

      dragState.current = {
        dragging: true,
        direction,
        startX: event.clientX,
        pageWidth,
      }

      event.currentTarget.setPointerCapture(event.pointerId)
      event.preventDefault()
    },
    [
      beginBackwardFlip,
      beginForwardFlip,
      canFlipBackward,
      canFlipForward,
      isAnimating,
    ],
  )

  const handlePointerMove = useCallback((event: PointerEvent) => {
    const state = dragState.current
    if (!state || !state.dragging || isAnimating) return

    const deltaX = event.clientX - state.startX

    if (state.direction === "forward") {
      const progress = clamp((-deltaX) / (state.pageWidth * 0.95), 0, 1)
      flipProgress.current.value = progress
      setFlipVisual(progress)
    } else {
      const progress = clamp(1 - deltaX / (state.pageWidth * 0.95), 0, 1)
      flipProgress.current.value = progress
      setFlipVisual(progress)
    }
  }, [isAnimating, setFlipVisual])

  const handlePointerUp = useCallback(() => {
    const state = dragState.current
    if (!state || !state.dragging) return

    state.dragging = false

    if (state.direction === "forward") {
      if (flipProgress.current.value >= DRAG_THRESHOLD_FORWARD) {
        animateFlipTo(1)
      } else {
        animateFlipTo(0)
      }
      return
    }

    if (flipProgress.current.value <= DRAG_THRESHOLD_BACKWARD) {
      animateFlipTo(0)
    } else {
      animateFlipTo(1)
    }
  }, [animateFlipTo])

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerup", handlePointerUp)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerup", handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])

  const flipFrontPage = flipMeta.sheetIndex * 2 + 1
  const flipBackPage = flipMeta.sheetIndex * 2 + 2

  return (
    <main className="book-stage">
      <section className="book-shell">
        <div className="book-spread" ref={spreadRef}>
          <div className="spine-shadow" />

          <article
            className="paper-page left-page"
            onClick={triggerBackwardClick}
            onPointerDown={(event) => handlePointerDown(event, "backward")}
            role="button"
            tabIndex={0}
            aria-label="Previous page"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                triggerBackwardClick()
              }
            }}
          >
            <div className="paper-noise" />
            <span className="page-number">{pageLabel(leftStaticPage)}</span>
            <h1 className="book-title">Margarida Gil</h1>
            <p className="book-subtitle">Design Portfolio</p>
          </article>

          <article
            className="paper-page right-page"
            onClick={triggerForwardClick}
            onPointerDown={(event) => handlePointerDown(event, "forward")}
            role="button"
            tabIndex={0}
            aria-label="Next page"
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault()
                triggerForwardClick()
              }
            }}
          >
            <div className="paper-noise" />
            <span className="page-number">{pageLabel(rightStaticPage)}</span>
            <div className="corner-hint">Drag or click</div>
          </article>

          {flipMeta.visible && (
            <div className="flip-host" aria-hidden>
              <div className="flip-cast-shadow" ref={castShadowRef} />

              <div className="flip-sheet" ref={flipSheetRef}>
                <div className="flip-face flip-front">
                  <div className="paper-noise" />
                  <span className="page-number">{pageLabel(flipFrontPage)}</span>
                </div>

                <div className="flip-face flip-back">
                  <div className="paper-noise" />
                  <span className="page-number">{pageLabel(flipBackPage)}</span>
                </div>

                <div className="flip-fold-glow" ref={foldGlowRef} />
              </div>
            </div>
          )}
        </div>
      </section>

      <style jsx>{`
        .book-stage {
          min-height: 100svh;
          display: grid;
          place-items: center;
          padding: clamp(12px, 2vw, 28px);
          background: radial-gradient(circle at 50% 40%, #1e1e1e 0%, #0d0d0d 60%, #090909 100%);
          overflow: hidden;
        }

        .book-shell {
          width: min(96vw, 1200px);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .book-spread {
          position: relative;
          width: min(94vw, 1080px);
          aspect-ratio: 16 / 10;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: clamp(12px, 2vw, 24px);
          transform: translate3d(0, 0, 0);
          will-change: transform;
          user-select: none;
          touch-action: none;
        }

        .spine-shadow {
          position: absolute;
          inset: 0;
          left: calc(50% - 16px);
          width: 32px;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.24) 35%, rgba(255, 255, 255, 0.08) 50%, rgba(0, 0, 0, 0.24) 65%, rgba(0, 0, 0, 0.45) 100%);
          pointer-events: none;
          z-index: 6;
        }

        .paper-page {
          position: relative;
          overflow: hidden;
          background: #efe6cf;
          box-shadow: inset 0 0 0 1px rgba(120, 100, 70, 0.18);
          transform: translate3d(0, 0, 0);
        }

        .left-page {
          border-radius: clamp(12px, 2vw, 20px) 0 0 clamp(12px, 2vw, 20px);
          box-shadow: inset -26px 0 26px rgba(0, 0, 0, 0.18);
        }

        .right-page {
          border-radius: 0 clamp(12px, 2vw, 20px) clamp(12px, 2vw, 20px) 0;
          box-shadow: inset 26px 0 26px rgba(0, 0, 0, 0.14);
        }

        .paper-noise {
          position: absolute;
          inset: 0;
          opacity: 0.06;
          background-image: radial-gradient(rgba(0, 0, 0, 0.35) 0.45px, transparent 0.45px);
          background-size: 2.8px 2.8px;
          pointer-events: none;
        }

        .book-title {
          position: absolute;
          left: clamp(16px, 3vw, 34px);
          top: clamp(20px, 4vw, 42px);
          font-size: clamp(26px, 4vw, 56px);
          font-weight: 700;
          letter-spacing: 0.02em;
          color: rgba(18, 18, 18, 0.82);
          margin: 0;
        }

        .book-subtitle {
          position: absolute;
          left: clamp(16px, 3vw, 34px);
          top: clamp(74px, 9vw, 130px);
          margin: 0;
          font-size: clamp(12px, 1.3vw, 20px);
          text-transform: uppercase;
          letter-spacing: 0.24em;
          color: rgba(18, 18, 18, 0.52);
        }

        .page-number {
          position: absolute;
          bottom: clamp(10px, 2vw, 20px);
          font-size: clamp(10px, 1.2vw, 15px);
          color: rgba(0, 0, 0, 0.46);
          z-index: 2;
        }

        .left-page .page-number {
          left: clamp(16px, 2.4vw, 26px);
        }

        .right-page .page-number {
          right: clamp(16px, 2.4vw, 26px);
        }

        .corner-hint {
          position: absolute;
          right: clamp(12px, 2vw, 22px);
          bottom: clamp(12px, 2vw, 22px);
          font-size: clamp(9px, 1vw, 12px);
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(0, 0, 0, 0.34);
          pointer-events: none;
        }

        .flip-host {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 20;
        }

        .flip-sheet {
          position: absolute;
          inset: 0 0 0 50%;
          transform-origin: left center;
          transform-style: preserve-3d;
          will-change: transform;
          pointer-events: none;
          backface-visibility: hidden;
          contain: paint;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.24);
        }

        .flip-face {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: #efe6cf;
          backface-visibility: hidden;
          box-shadow: inset 0 0 0 1px rgba(120, 100, 70, 0.18);
        }

        .flip-front {
          border-radius: 0 clamp(12px, 2vw, 20px) clamp(12px, 2vw, 20px) 0;
        }

        .flip-back {
          transform: rotateY(180deg);
          border-radius: clamp(12px, 2vw, 20px) 0 0 clamp(12px, 2vw, 20px);
        }

        .flip-front .page-number {
          right: clamp(16px, 2.4vw, 26px);
        }

        .flip-back .page-number {
          left: clamp(16px, 2.4vw, 26px);
        }

        .flip-fold-glow {
          position: absolute;
          inset: 0;
          pointer-events: none;
          opacity: 0.25;
          mix-blend-mode: multiply;
        }

        .flip-cast-shadow {
          position: absolute;
          inset: 0 0 0 50%;
          transform-origin: left center;
          pointer-events: none;
          background: linear-gradient(90deg, rgba(0, 0, 0, 0.34) 0%, rgba(0, 0, 0, 0.14) 40%, rgba(0, 0, 0, 0) 82%);
          opacity: 0;
          will-change: transform, opacity;
          z-index: 19;
        }

        @media (max-width: 900px) {
          .book-spread {
            width: min(96vw, 880px);
            aspect-ratio: 10 / 8;
          }

          .book-title {
            font-size: clamp(20px, 5vw, 42px);
          }

          .book-subtitle {
            top: clamp(54px, 10vw, 100px);
          }
        }
      `}</style>
    </main>
  )
}

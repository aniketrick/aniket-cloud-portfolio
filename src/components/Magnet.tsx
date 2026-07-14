import { useRef, useState, useCallback, type ReactNode } from 'react'

interface MagnetProps {
  children: ReactNode
  padding?: number
  strength?: number
  activeTransition?: string
  inactiveTransition?: string
  className?: string
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0)')
  const [transition, setTransition] = useState(inactiveTransition)
  const [isActive, setIsActive] = useState(false)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = e.clientX - centerX
      const deltaY = e.clientY - centerY
      setTransform(
        `translate3d(${deltaX / strength}px, ${deltaY / strength}px, 0)`
      )
    },
    [strength]
  )

  const handleMouseEnter = useCallback(() => {
    setIsActive(true)
    setTransition(activeTransition)
  }, [activeTransition])

  const handleMouseLeave = useCallback(() => {
    setIsActive(false)
    setTransform('translate3d(0px, 0px, 0)')
    setTransition(inactiveTransition)
  }, [inactiveTransition])

  // Check if mouse is within padding distance on mouse move over document
  const handleParentMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const expandedRect = {
        left: rect.left - padding,
        right: rect.right + padding,
        top: rect.top - padding,
        bottom: rect.bottom + padding,
      }
      const isWithinPadding =
        e.clientX >= expandedRect.left &&
        e.clientX <= expandedRect.right &&
        e.clientY >= expandedRect.top &&
        e.clientY <= expandedRect.bottom

      if (isWithinPadding && !isActive) {
        handleMouseEnter()
      } else if (!isWithinPadding && isActive) {
        handleMouseLeave()
      }

      if (isWithinPadding) {
        handleMouseMove(e)
      }
    },
    [padding, isActive, handleMouseEnter, handleMouseLeave, handleMouseMove]
  )

  return (
    <div
      onMouseMove={handleParentMouseMove}
      style={{ willChange: 'transform' }}
      className={className}
    >
      <div
        ref={ref}
        style={{
          transform: transform,
          transition: transition,
          willChange: 'transform',
        }}
      >
        {children}
      </div>
    </div>
  )
}

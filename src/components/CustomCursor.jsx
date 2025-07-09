import { useEffect, useRef, useState } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      const { clientX, clientY } = e

      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`
        cursorRef.current.style.top = `${clientY}px`
      }
    }

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.closest('button')) {
        setIsHovering(true)
      }
    }

    const handleMouseOut = () => setIsHovering(false)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', handleMouseOver)
    window.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', handleMouseOver)
      window.removeEventListener('mouseout', handleMouseOut)
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'hover' : ''}`}
    />
  )
}

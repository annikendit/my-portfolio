import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Landing from './pages/Landing'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Games from './pages/Games'
import Game from './pages/Game'
import CustomCursor from './components/CustomCursor'
import ScrollToTopButton from './components/ScrollToTopButton'

function AppRoutes() {
  const location = useLocation()
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    if (location.pathname === '/') {
      setShowNav(false)
      const timer = setTimeout(() => setShowNav(true), 3000) // vis nav etter 3 sek
      return () => clearTimeout(timer)
    } else {
      setShowNav(true)
    }
  }, [location.pathname])

  return (
    <>
      {showNav && (
        <nav>
          <Link to="/">Intro</Link> | <Link to="/home">Hjem</Link> | <Link to="/about">Om meg</Link> | <Link to="/projects">Prosjekter</Link> | <Link to="/games">Spill</Link> | <a href="https://github.com/annikendit" target="_blank" rel="noopener noreferrer">GitHub</a>

        </nav>
      )}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/game" element={<Game />} />
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <>
      <CustomCursor />
      <Router>
        <AppRoutes />
        <ScrollToTopButton />
      </Router>
    </>
  )
}

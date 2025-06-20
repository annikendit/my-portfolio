import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Hjem</Link> | <Link to="/about">Om meg</Link> | <Link to="/projects">Prosjekter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}

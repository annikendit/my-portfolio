import { Link } from 'react-router-dom'

export default function Games() {
  return (
    <div className="page">
      <h1>Spillprosjekter</h1>
      <p>Her kan du prøve et lite plattformspill jeg har laget med Phaser 👾</p>
      <div style={{ marginTop: '2rem' }}>
        <Link to="/game" className="game-link-button">
          🎮 Start spillet
        </Link>
      </div>
    </div>
  )
}

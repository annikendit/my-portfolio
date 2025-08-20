import './Projects.css'
import { useEffect } from 'react'

const projects = [
  {
    title: 'React Portfolio',
    tags: ['Hobby', 'Frontend', 'React', 'CSS'],
    description: `
    Dette er mitt lille hjørne av internett – en samling av prosjekter og ting jeg har kost meg med å lage.
    Hele greia er bygget med React og Vite, stylet for hånd med CSS (med støtte for både mørk og lys modus, så klart).
    
    Jeg har brukt React Router for å hoppe mellom sider, og alt hostes på Vercel så jeg slipper å styre med deploy.
    Spilldelen? Den er laget med Phaser – fordi hvorfor ikke gjøre det litt gøy også?
    
    Dette prosjektet har vært en fin måte for meg å lære og leke meg litt med frontend-verktøy, og samtidig lage noe jeg faktisk kan være litt stolt av ✨
    `,
    image: '/images/portfolio.png',
    github: 'https://github.com/annikendit/my-portfolio',
  },
  {
    title: 'Jump Game',
    tags: ['Hobby', 'Spill', 'Phaser'],
    description: `
  Et lite spill jeg snekra sammen med Phaser – en slags mini-Doodle Jump, bare litt mer rosa 🎀

  Jeg fulgte et kurs fra Codecademy og tilpassa det underveis. Her kan du hoppe høyere og høyere, lande på plattformer.

  Hadde det overraskende gøy med å legge til partikler og små effekter – og det er fortsatt en av de tingene jeg viser frem først når jeg vil si "se, jeg kan kodespille litt!" 🎮✨

  Hvis du vil prøve å slå highscoren min (lykke til 😈), så finner du det på spill-siden!
  `,
    image: '/images/jump-game.png',
    github: 'https://github.com/annikendit/my-portfolio/blob/main/src/pages/Game.jsx',
  },
  {
    title: 'IN2000 - RocketBoy',
    tags: ['Universitet', 'Fullstack', 'Kotlin', 'Smidig'],
    description: `
  Dette var et gruppeprosjekt fra IN2000 på UiO – og her fikk vi bryne oss på å utvikle en værbasert planleggingsapp for rakettoppskytning 🚀🌤️

  Vi samarbeidet med studentforeningen Portal Space og brukte API-er fra MET (Meteorologisk institutt) for å hente inn værdata, som brukerne kunne filtrere på. 
  Målet: finne den perfekte dagen å skyte opp rakett!

  Appen ble bygget i Android Studio med Kotlin – og vi brukte smidig metodikk (og masse Miro). Jeg fikk prøvd meg som både utvikler, designer og scrum master 💼💅

  Vi ble faktisk nominert til Met-prisen for mest kreativ bruk av data – og selv om vi ikke vant, så er jeg skikkelig stolt av det vi lagde sammen 💜
  `,
    image: '/images/rocketboy.png',
    github: 'https://github.uio.no/IN2000-V25/team-47',
  },
]

export default function Projects() {
  
  // slide-in effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target) // bare animér én gang
        }
      })
    },
   { threshold: 0.1 }
  )

  const cards = document.querySelectorAll('.project-card')
  if (cards.length > 0) {
    cards.forEach((card) => observer.observe(card))
  }

  return () => {
    cards.forEach((card) => observer.unobserve(card))
  }
}, [])

  return (
    <div className="projects-page">
      <h1>Mine Prosjekter</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-badges-centered">
                {project.tags?.map((tag, i) => (
                  <span className={`project-badge tag-${tag.toLowerCase()}`} key={i}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="project-description">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              Se på GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

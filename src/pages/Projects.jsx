import './Projects.css'

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
    github: 'https://github.com/brukernavn/react-portfolio',
  },
  {
    title: 'Jump Game',
    tags: ['Hobby', 'Spill', 'Phaser'],
    description: `
    Et enkelt plattformspill laget med Phaser.
    Har stjelt hele prosjektet fra Codecademy, hihi.

    Hvis du vil prøve å slå high-scoren min finner du det på spill-siden!
    `,
    image: '/images/jump-game.png',
    github: 'https://github.com/brukernavn/jump-game',
  },
  {
    title: 'IN2000 - RocketBoy',
    tags: ['Skole', 'Full stack', 'Kotlin', 'Smidig'],
    description: `
    Planleggingsapp for rakettoppskytere!

    Prosjektoppgave i faget IN2000 ved UiO, der gruppen min lagde en 
    app ut ifra værpreferanser for rakettoppskytere. Casen var i samarbeid med Portal Space.
    Metrologisk institutt leverte APIer og veiledning.

    Vi utviklet i Android Studio med Kotlin, og lærte masse om utviklingsprosessen,
    både som utviklere og i roller som designer og scrum master.

    Appen ble til og med nominert til Met-prisen for mest kreativ bruk av værdata! 🌤️🚀
    `,
    image: '/images/rocketboy.png',
    github: 'https://github.uio.no/IN2000-V25/team-47',
  },
]

export default function Projects() {
  return (
    <div className="projects-page">
      <h1>Mine Prosjekter</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-badges">
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

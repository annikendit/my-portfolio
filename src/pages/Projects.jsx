import './Projects.css'

const projects = [
  {
    title: 'React Portfolio',
    tags: ['Hobby', 'Frontend', 'React', 'CSS'],
    description:  `
    Dette er mitt lille hjørne av internett – en samling av prosjekter og ting jeg har kost meg med å lage.
    Hele greia er bygget med React og Vite, stylet for hånd med CSS (med støtte for både mørk og lys modus, så klart).
    
    Jeg har brukt React Router for å hoppe mellom sider, og alt hostes på Vercel så jeg slipper å styre med deploy.
    Spilldelen? Den er laget med Phaser – fordi hvorfor ikke gjøre det litt gøy også?
    
    Dette prosjektet har vært en fin måte for meg å lære og leke meg litt med frontend-verktøy, og samtidig lage noe jeg faktisk kan være litt stolt av ✨
  `,
    //image: '/images/portfolio.png', // legg bildet i public/images/
    //github: 'https://github.com/brukernavn/react-portfolio',
  },
  {
    title: 'Jump Game',
    tags: ['Hobby', 'Spill', 'Phaser'],
    description: `
    Et enkelt plattformspill laget med Phaser.
    Har stjelt hele prosjektet fra Codecademy, hihi.

    Hvis du vil prøve å slå high-scoren min finner du det på spill siden!
    `,
    //image: '/images/jump-game.png',
    //github: 'https://github.com/brukernavn/jump-game',
  },
  {
    title: 'IN2000 - RocketBoy',
    tags: ['Skole', 'Full stack', 'Kotlin', 'Smidig'],
    description: `
    Planleggings app for rakettoppskytere!

    Prosjektoppgave i faget IN2000 ved UiO, der gruppen min lagde en 
    planleggingsapp utifra værpreferanser for rakettoppskytere. 
    Selve casen var i samarbeid med Portal Space, en studentforening som bygger 
    og skyter opp selvbygde raketter. Metrologisk institutt leverte Vær-APIer og 
    var en sentral del av faget!
    
    Et utrolig lærerikt prosjekt der vi utviklet applikasjonen i Andriod Studios,
    med Kotlin. Var spesielt lærerikt å lære om utviklingsprosessen både som utvikler,
    designer og scrum master. 

    Applikasjonen vår ble nominert til Met-prisen for mest kreativ bruk av data!
    Desverre vant vi ikke, men veldig gøy å bli nominert for noe man jobbet med 
    over en lang periode.
    `,
    //image: '/images/jump-game.png',
    github: 'https://github.uio.no/IN2000-V25/team-47',
  },
]

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


import './About.css'

export default function About() {
  return (
    <div className="cv-page">
      <h1>Hei, jeg er Anniken 👋</h1>
      <p className="cv-intro">
        Jeg er en nysgjerrig og kreativ informatikkstudent med en forkjærlighet for frontend, 
        visuell design og brukervennlige løsninger. Jeg elsker å lære nye ting og utfordre meg selv gjennom små og store prosjekter!
      </p>

      <section className="cv-section">
        <h2>🎓 Utdanning</h2>
        <ul>
          <li>
            <strong>Universitetet i Oslo</strong> – Informatikk: Design, bruk og interaksjon (2023- håper å bli ferdig med bachelor snart)
            <br />
            Fokus på UX, interaksjonsdesign og smidig utvikling.
            <br />
            <br />
            Har tatt fag som lener mer mot Programmering og systemarkitekur, Algoritmer og datastrukturer (IN2010), Informasjonssikkerhet (IN2120) og Software testing (IN3240).
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>💼 Utviklings erfaring</h2>
        <ul>
          <li>
            <strong>Portal Space</strong> – Prosjektsamarbeid (våren 2025)
            <br />
            Frontend-utvikling av vær-app for rakettoppskyting (IN2000). Rolle: utvikler & scrum master 🚀
          </li>
          <li>
            <strong>Freelance/hobbyprosjekter</strong> – 2023–
            <br />
            Utviklet personlig portefølje, småspill og interaktive nettsider.
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>💼 Jobb erfaring</h2>
        <ul>
          <li>
            <strong>Coop Extra</strong> – Første kasserer (Feb 2024 - nå)
            <br />
              Har ansvar i kassen, med opplæring og varebeholdning!
          </li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>🛠️ Ferdigheter</h2>
        <ul className="skills">
          <li className="skill framework">React</li>
          <li className="skill language">JavaScript</li>
          <li className="skill style">CSS / Sass</li>
          <li className="skill design">Figma</li>
          <li className="skill framework">Phaser</li>
          <li className="skill other">Git & GitHub</li>
          <li className="skill design">UX/UI Design</li>
          <li className="skill language">Java</li>
          <li className="skill language">Kotlin</li>
          <li className="skill language">Python</li>
          <li className="skill other">Smidig utvikling</li>
        </ul>
      </section>

      <section className="cv-section">
        <h2>✨ Prosjekter</h2>
        <p>
          Du finner alle mine prosjekter på{' '}
          <a href="https://github.com/annikendit" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>{' '}
          eller her i porteføljen min under <strong>Prosjekter</strong>!
        </p>
      </section>
    </div>
  )
}

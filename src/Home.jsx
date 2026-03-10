import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub, FaReact, FaNodeJs, FaGitAlt, FaDocker, FaCss3, FaJava, FaBars, FaTimes } from 'react-icons/fa'
import { SiJavascript, SiHtml5, SiPython, SiMongodb, SiTypescript, SiMysql, SiCplusplus } from 'react-icons/si'

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <header>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Yogesh Karnan</h2>
        <nav className={isMenuOpen ? 'nav-open' : ''}>
          <Link to="/about-me" onClick={() => setIsMenuOpen(false)}>About</Link>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a>
          <a href="#work" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
        <button className="burger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      <section id="hero">
        <h1>Hallo !</h1>
        <p>I build software and AI-powered tools that aim to solve real problems. My work combines backend engineering, full-stack development, and modern AI technologies to create practical and scalable solutions. I am always eager to learn and take on new challenges.</p>
        <Link to="/about-me" className="more-btn" style={{ display: 'inline-block', marginTop: '1rem' }}>Learn More About Me</Link>
      </section>

      <section id="skills">
        <h1>Skills & Technologies</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '800px' }}>
          {[
            { name: 'Java', icon: <FaJava size={20} /> },
            { name: 'React', icon: <FaReact size={20} /> },
            { name: 'JavaScript', icon: <SiJavascript size={20} /> },
            { name: 'TypeScript', icon: <SiTypescript size={20} /> },
            { name: 'MySQL', icon: <SiMysql size={20} /> },
            { name: 'Node.js', icon: <FaNodeJs size={20} /> },
            { name: 'HTML5', icon: <SiHtml5 size={20} /> },
            { name: 'CSS3', icon: <FaCss3 size={20} /> },
            { name: 'Python', icon: <SiPython size={20} /> },
            { name: 'C++', icon: <SiCplusplus size={20} /> },
            { name: 'MongoDB', icon: <SiMongodb size={20} /> },
            { name: 'Git', icon: <FaGitAlt size={20} /> },
            { name: 'Docker', icon: <FaDocker size={20} /> }
          ].map(skill => (
            <span key={skill.name} style={{
              background: 'var(--card-bg)',
              color: 'var(--text-color)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '1px solid #e5e5e5',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }} className="skill-tag">
              {skill.icon}
              {skill.name}
            </span>
          ))}
        </div>
      </section>

      <section id="experience">
        <h1>Work Experience</h1>
        <div className="card-grid">
          <div className="card">
            <h2 style={{ marginBottom: '0.5rem' }}>Software Engineer</h2>
            <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>Zoho Corporation, Chennai</p>
            <p style={{ margin: '0.25rem 0', color: 'var(--secondary-color)', fontSize: '0.9rem' }}>Jun 2023 - Oct 2025</p>
          </div>
          <div className="card">
            <h2 style={{ marginBottom: '0.5rem' }}>Project Trainee</h2>
            <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>Zoho Corporation, Chennai</p>
            <p style={{ margin: '0.25rem 0', color: 'var(--secondary-color)', fontSize: '0.9rem' }}>Aug 2022 - May 2023</p>
          </div>
          <div className="card">
            <h2 style={{ marginBottom: '0.5rem' }}>Summer Intern</h2>
            <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>Zoho Corporation, Chennai</p>
            <p style={{ margin: '0.25rem 0', color: 'var(--secondary-color)', fontSize: '0.9rem' }}>Apr 2022 - Jun 2022</p>
          </div>
        </div>
      </section>

      <section id="education">
        <h1>Education</h1>
        <div className="card-grid">
          <div className="card">
            <h2 style={{ marginBottom: '0.5rem' }}>M.Sc. Web Engineering</h2>
            <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>Technische Universität Chemnitz, Chemnitz</p>
            <p style={{ margin: '0.25rem 0', color: 'var(--secondary-color)', fontSize: '0.9rem' }}>2025 - Present</p>
          </div>
          <div className="card">
            <h2 style={{ marginBottom: '0.5rem' }}>B.E. Computer Science and Engineering</h2>
            <p style={{ margin: '0.25rem 0', fontWeight: 'bold' }}>Anna University, Chennai</p>
            <p style={{ margin: '0.25rem 0', color: 'var(--secondary-color)', fontSize: '0.9rem' }}>2019 - 2023</p>
          </div>
        </div>
      </section>

      <section id="work">
        <h1>My Work</h1>
        <div className="work-grid">
          <a href="https://github.com/yogeshkarnan/Industry4.0-Prognostic-Device" target="_blank" rel="noopener noreferrer" className="work-link">
            <div className="work-item">
              <h2>Industry 4.0 Prognostic Device</h2>
              <p>Designed and implemented a PoC IoT system to validate machine defect detection, processing sensor data and visualizing results for analysis.</p>
              <p><strong>Technologies:</strong> Arduino, Python, NumPy</p>
            </div>
          </a>
          <a href="https://github.com/yogeshkarnan/Supply-Chain-Management-Application" target="_blank" rel="noopener noreferrer" className="work-link">
            <div className="work-item">
              <h2>Supply Chain Management Application</h2>
              <p>Developed an MVP-style Python application simulating real-time data ingestion, transformation, and storage across supply chain entities.</p>
              <p><strong>Technologies:</strong> Python, MQTT, Tkinter</p>
            </div>
          </a>
        </div>
      </section>

      <section id="contact">
        <h1>Get In Touch</h1>
        <p>I'm always open to discussing new opportunities and interesting projects. Let's connect!</p>
        <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <a href="mailto:yogeshkrnn@gmail.com" className="contact-link" style={{ color: 'var(--primary-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease' }}>
            <MdEmail size={24} />
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/yogeshkarnan" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: 'var(--primary-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease' }}>
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/yogeshkarnan" target="_blank" rel="noopener noreferrer" className="contact-link" style={{ color: 'var(--primary-color)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.3s ease' }}>
            <FaGithub size={24} />
            <span>GitHub</span>
          </a>
        </div>
      </section>

      <footer>
        <p>&copy; 2026 Yogesh Karnan. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Home
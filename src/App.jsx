import './App.css'
import { MdEmail } from 'react-icons/md'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

function App() {
  return (
    <div>
      <div className="shape"></div>
      <div className="shape"></div>
      <div className="shape"></div>
      <header>
        <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 'bold' }}>Yogesh Karnan</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h1>About Me</h1>
        <p>Hi, I'm Yogesh Karnan, Software Engineer with 3+ years of experience at Zoho, skilled in backend engineering and full-stack development. Experienced in designing and developing scalable applications, building and integrating RESTful APIs, managing release cycles, and collaborating in agile environments.</p>
        {/* <p>My expertise spans from front-end development with React and Vue.js to back-end solutions using Node.js and cloud technologies. I'm committed to writing clean, maintainable code and staying at the forefront of web development trends.</p> */}
      </section>

      <section id="skills">
        <h1>Skills & Technologies</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', maxWidth: '800px' }}>
          {['Java', 'React', 'JavaScript', 'TypeScript', 'MySQL', 'C++', 'Node.js', 'HTML5', 'CSS3', 'Python', 'MongoDB', 'Git', 'Docker'].map(skill => (
            <span key={skill} style={{
              background: 'var(--card-bg)',
              color: 'var(--text-color)',
              padding: '0.5rem 1rem',
              borderRadius: '25px',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              border: '1px solid #e5e5e5'
            }} className="skill-tag">
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="work">
        <h1>My Work</h1>
        <div className="work-grid">
          <div className="work-item">
            <h2>Industry 4.0 Prognostic Device</h2>
            <p>Designed and implemented a PoC IoT system to validate machine defect detection, processing sensor data and visualizing results for analysis.</p>
            <p><strong>Technologies:</strong> Arduino, Python, NumPy</p>
          </div>
          <div className="work-item">
            <h2>Supply Chain Management Application</h2>
            <p>Developed an MVP-style Python application simulating real-time data ingestion, transformation, and storage across supply chain entities.</p>
            <p><strong>Technologies:</strong> Python, MQTT, Tkinter</p>
          </div>
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

export default App

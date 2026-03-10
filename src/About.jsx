import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './App.css'

function About() {
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
          <Link to="/">Home</Link>
        </nav>
        <button className="burger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      <section id="about">
        <h1>About Me</h1>
        <div className="about-content">
          <p>Hi, I am Yogesh Karnan,</p>

<p>When I was a kid, I was fascinated by computers. I still remember the first computer we had at home running Windows XP. My brother and I used to take turns playing Minesweeper on it. It was an era when floppy disks and tape recorders were still a thing. In just a few years, I saw a completely new system in our bedroom, and this time it was running Windows Vista.</p>

<p>Every day after school, my friends and I used to play Club Penguin, and my brother and I would spend hours playing room escape games and other short games on Miniclip.</p>

<p>It was only in my later middle-school years that I began to understand how computers worked. From that point on, I was fully invested in Googling things and searching YouTube tutorials to learn more about how computers function. I got interested in game development and started learning how to code. Later, I became fascinated with 3D modelling because I wanted to create animated films like Pixar.</p>

<p>I began learning Blender, coding, and Unity, and I was always trying to create something—anything.</p>

<p>That curious kid eventually made me choose Computer Science as my main subject in high school. I continued learning programming and practicing after regular school hours, often sitting in the computer lab experimenting with code. I built such a strong foundation in C++ that I could remember many syntaxes by heart.</p>

<p>Those were some golden times when AI wasn't even a buzzword, and building something required pure dedication and patience. During summer breaks, I enrolled myself in Android App Development and Robotics courses because I was passionate about creating things.</p>

<p>This curiosity eventually led me to pursue a Bachelor's degree in Computer Science and Engineering. During this time, I actively participated in hackathons, coding challenges, and competitions - not just to win, but to expand my knowledge across different domains.</p>

<p>I also joined the National Cadet Corps (NCC), which helped me maintain physical fitness and taught me much more than that. I developed leadership and communication skills. Later, I became the Creative Lead of the Google Developers Student Club in my college, where I hosted various workshops and events to inspire students and spark curiosity about emerging technologies.</p>

<p>During the final year of my bachelor's degree, I secured an internship opportunity at Zoho Corporation. It was later converted into a full-time position, where I began my career as a Software Engineer. I worked on building and maintaining production-level systems used by thousands of users.</p>

<p>Over the course of three years, I gained a deeper understanding of how large organizations function — the nitty-gritty of managing people, solving real-world problems, and designing and developing scalable solutions. Most importantly, I learned the importance of never stopping learning.</p>

<p>Then AI entered the chat.</p>

<p>To be honest, I was initially a bit ignorant about AI. I often brushed off conversations about it as if it wasn't important. Later, I realized that I was struggling to accept a new reality — the fact that AI could do a lot in a few minutes what took me years to understand and implement.</p>

<p>Will AI take my job?</p>

<p>Maybe.</p>

<p>But I don't really care if it does.</p>

<p>I will continue to be that curious little kid—learning, adapting, and building things. I’ll use AI as a tool to become more productive and try to create something even better with it.</p>

<p>Today, I am pursuing my Master's in Web Engineering and I enjoy building scalable software systems, experimenting with AI tools, and constantly exploring new technologies that push the boundaries of what we can create.</p>

<p>At the end of the day, I’m still that kid who enjoys opening a computer just to see what it can do.</p>
        </div>
      </section>
    </div>
  )
}

export default About
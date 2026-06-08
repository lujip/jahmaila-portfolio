import './App.css'
import jahmaila from './assets/profile.jpg'
import resume from './assets/Resume.png'
import resumePDF from './assets/Resume.pdf'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Jahmaila's Portfolio</div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home') }}>Home</a></li>
            <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience') }}>Experience</a></li>
            <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills') }}>Skills</a></li>
            <li><a href="#resume" onClick={(e) => { e.preventDefault(); scrollToSection('resume') }}>Resume</a></li>
            <li><a href="#work" onClick={(e) => { e.preventDefault(); scrollToSection('work') }}>Work</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="profile-photo">
            <div className="photo-placeholder">
              <img src={jahmaila} alt="Jahmaila Ayapana" />
            </div>
          </div>
          <h1>Jahmaila Ayapana</h1>
          <p className="tagline">Aspiring Professional Virtual Assistant</p>
          <p className="intro">
            Dedicated and detail-oriented virtual assistant with expertise in administrative support, 
            project management, and client relations. Committed to delivering efficient and reliable 
            service to help businesses thrive blah blah blah blah blah blah blah blah blah blah 
            blah blah blah blah blah blah blah blah blah blah blah blah 
            blah blah blah blah blah blah blah blah blah blah .
          </p>
          <button className="cta-button" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </button>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Senior Virtual Assistant</h3>
                <p className="company">Tech Solutions Inc.</p>
                <p className="period">2022 - Present</p>
                <ul>
                  <li>Managed executive calendars and coordinated meetings across multiple time zones</li>
                  <li>Streamlined administrative processes, improving efficiency by 30%</li>
                  <li>Handled client communications and maintained professional relationships</li>
                  <li>Organized travel arrangements and expense reporting</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Virtual Assistant</h3>
                <p className="company">Digital Marketing Agency</p>
                <p className="period">2020 - 2022</p>
                <ul>
                  <li>Provided administrative support for a team of 10+ professionals</li>
                  <li>Managed social media accounts and content scheduling</li>
                  <li>Coordinated project timelines and deliverables</li>
                  <li>Prepared reports and presentations for client meetings</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Administrative Assistant</h3>
                <p className="company">Startup Ventures LLC</p>
                <p className="period">2018 - 2020</p>
                <ul>
                  <li>Handled day-to-day office operations and correspondence</li>
                  <li>Maintained filing systems and databases</li>
                  <li>Assisted with customer service and inquiry management</li>
                  <li>Coordinated events and team-building activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Administrative</h3>
              <div className="skill-tags">
                <span className="skill-tag">Calendar Management</span>
                <span className="skill-tag">Email Management</span>
                <span className="skill-tag">Data Entry</span>
                <span className="skill-tag">Document Preparation</span>
                <span className="skill-tag">Travel Coordination</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Communication</h3>
              <div className="skill-tags">
                <span className="skill-tag">Client Relations</span>
                <span className="skill-tag">Professional Writing</span>
                <span className="skill-tag">Phone Etiquette</span>
                <span className="skill-tag">Meeting Coordination</span>
                <span className="skill-tag">Presentation Skills</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Technical</h3>
              <div className="skill-tags">
                <span className="skill-tag">Microsoft Office Suite</span>
                <span className="skill-tag">Google Workspace</span>
                <span className="skill-tag">Slack</span>
                <span className="skill-tag">Trello</span>
                <span className="skill-tag">Asana</span>
                <span className="skill-tag">Zoom</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Project Management</h3>
              <div className="skill-tags">
                <span className="skill-tag">Task Prioritization</span>
                <span className="skill-tag">Time Management</span>
                <span className="skill-tag">Multi-tasking</span>
                <span className="skill-tag">Deadline Management</span>
                <span className="skill-tag">Process Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="section">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-viewer">
            <div className="resume-placeholder">
              <img 
               src= {resume}
               className="resume-pdf"
               title="Resume PDF"
              >
              </img>
              <a href={resumePDF} className="download-button">Download PDF</a>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section work-section">
        <div className="container">
          <h2 className="section-title">Sample Work</h2>
          <div className="work-grid">
            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
              </div>
              <div className="work-content">
                <h3>Executive Calendar Management System</h3>
                <p>
                  Developed and implemented a comprehensive calendar management system for C-level 
                  executives, reducing scheduling conflicts by 85% and improving meeting efficiency.
                </p>
              </div>
            </div>

            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
                  </svg>
                </div>
              </div>
              <div className="work-content">
                <h3>Client Onboarding Process</h3>
                <p>
                  Created a streamlined client onboarding workflow that reduced onboarding time from 
                  2 weeks to 3 days, improving client satisfaction scores by 40%.
                </p>
              </div>
            </div>

            <div className="work-item">
              <div className="work-image">
                <div className="work-placeholder">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
                  </svg>
                </div>
              </div>
              <div className="work-content">
                <h3>Social Media Content Calendar</h3>
                <p>
                  Managed and maintained a 3-month content calendar for multiple social media platforms, 
                  increasing engagement by 60% and follower growth by 45%.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <div>
                  <h4>Email</h4>
                  <p>jahmaila.ayapana@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <h4>Phone</h4>
                  <p>+63 (960) 819-6964</p>
                </div>
              </div>

              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <h4>Location</h4>
                  <p>Sa Imung, Heart, YAY</p>
                </div>
              </div>

              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <div>
                  <h4>LinkedIn</h4>
                  <p>linkedin.com/in/dili ni ako</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <h3>Send a Message</h3>
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <input type="text" placeholder="Subject" required />
              <textarea placeholder="Your Message" rows="5" required></textarea>
              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Jahmaila Ayapana. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App

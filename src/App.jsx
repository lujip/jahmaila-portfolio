import { useState } from 'react'
import './App.css'
import jahmaila from './assets/profile2.jpg'
import resume from './assets/Resume.png'
import resumePDF from './assets/Resume.pdf'
import work1Page1 from './assets/work1/1.png'
import work1Page2 from './assets/work1/2.png'
import work1Page3 from './assets/work1/3.png'
import work1Page4 from './assets/work1/4.png'
import work2Page1 from './assets/work2/1.png'
import work2Page2 from './assets/work2/2.png'
import work3Page1 from './assets/work3/1.png'
import work3Page2 from './assets/work3/2.png'
import work3Page3 from './assets/work3/3.png'
import work3Page4 from './assets/work3/4.png'
import work3Page5 from './assets/work3/5.png'
import work3Page6 from './assets/work3/6.png'

function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false)
  const [selectedWork, setSelectedWork] = useState(null)
  const [expandedImageIndex, setExpandedImageIndex] = useState(null)

  const workData = [
    {
      id: 1,
      title: "Product Listing & Advertisement Design",
      shortDescription: "A comprehensive set of product listings and advertisement designs showcasing professional layout and visual appeal.",
      pageCount: 4,
      images: [
        work1Page1,
        work1Page2,
        work1Page3,
        work1Page4
      ],
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"
    },
    {
      id: 2,
      title: "Business Card Design Collection",
      shortDescription: "Professional business card designs featuring modern aesthetics and clean layouts for various industries.",
      pageCount: 2,
      images: [
        work2Page1,
        work2Page2,
      ],
      icon: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
    },
    {
      id: 3,
      title: "Poster Style Product Advertisements",
      shortDescription: "Eye-catching poster-style advertisements designed for product promotion across digital and print media.",
      pageCount: 6,
      images: [
        work3Page1,
        work3Page2,
        work3Page3,
        work3Page4,
        work3Page5,
        work3Page6,
      ],
      icon: "M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"
    }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const openResumeModal = () => {
    setIsResumeModalOpen(true)
  }

  const closeResumeModal = () => {
    setIsResumeModalOpen(false)
  }

  const openWorkModal = (work) => {
    setSelectedWork(work)
    setExpandedImageIndex(null)
  }

  const closeWorkModal = () => {
    setSelectedWork(null)
    setExpandedImageIndex(null)
  }

  const expandImage = (index) => {
    setExpandedImageIndex(index)
  }

  const closeExpandedImage = () => {
    setExpandedImageIndex(null)
  }

  const nextExpandedImage = () => {
    if (selectedWork && expandedImageIndex < selectedWork.images.length - 1) {
      setExpandedImageIndex(expandedImageIndex + 1)
    }
  }

  const prevExpandedImage = () => {
    if (expandedImageIndex > 0) {
      setExpandedImageIndex(expandedImageIndex - 1)
    }
  }

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-brand">Jahmaila's | Portfolio</div>
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
          <div className="hero-left">
            <div className="profile-photo">
              <div className="photo-placeholder">
                <img src={jahmaila} alt="Jahmaila Ayapana" />
              </div>
            </div>
          </div>
          <div className="hero-right">
            <h1>Jahmaila Ayapana</h1>
            {/* <p className="tagline">Aspiring Professional Virtual Assistant</p> */}
            <p className="intro">
            Administrative and Finance Support professional with experience in banking, payment processing, data entry, document management, and customer service. Skilled in maintaining accurate records, managing confidential information, and supporting daily business operations using Google Workspace, Microsoft Office, Canva, and ChatGPT. Currently expanding my knowledge of AI automation to deliver more efficient and organized administrative support.
            </p>
            <button className="cta-button" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Financial Analyst / Teller</h3>
                <p className="company">Cebu Institute of Technology - University</p>
                <p className="period">May 2024 – Mar 2026</p>
                <ul>
                  <li>Managed end-to-end financial operations, including payment processing, check voucher review, and SAP-based account updates</li>
                  <li>Played a key role in treasury and financial data organization, supporting timely and accurate financial decision-making</li>
                  <li>Conducted rigorous reconciliation of financial records and ensured compliance with internal controls and accounting standards</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Customer Sales and Service Associate / Bank Teller</h3>
                <p className="company">Bank of the Philippine Islands</p>
                <p className="period">Jul 2023 – Dec 2023</p>
                <ul>
                  <li>Delivered front-line banking services, assisting clients with deposits, withdrawals, and account support while maintaining high customer satisfaction</li>
                  <li>Maintained strict transaction verification processes and excelled in fraud detection, focusing on accuracy and risk mitigation</li>
                  <li>Balanced daily cash operations and consistently adhered to regulatory banking compliance</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Internship</h3>
                <p className="company">Commonwealth Insurance Company</p>
                <p className="period">Feb 2023 – May 2023</p>
                <ul>
                  <li>Encoded and maintained policy and financial records, supporting audit readiness through diligent document organization</li>
                  <li>Assisted in preparing reports and financial documentation, gaining practical experience in process improvement and data management</li>
                  <li>Supported daily administrative operations and petty cash tracking</li>
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
              <h3>Microsoft Office Suite</h3>
              <div className="skill-tags">
                <span className="skill-tag">Excel</span>
                <span className="skill-tag">Word</span>
                <span className="skill-tag">PowerPoint</span>
                <span className="skill-tag">Outlook</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Google Workspace</h3>
              <div className="skill-tags">
                <span className="skill-tag">Docs</span>
                <span className="skill-tag">Sheets</span>
                <span className="skill-tag">Drive</span>
                <span className="skill-tag">Gmail</span>
                <span className="skill-tag">Calendar</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>AI Productivity & LLM Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">ChatGPT</span>
                <span className="skill-tag">Gemini</span>
                <span className="skill-tag">Microsoft Copilot</span>
                <span className="skill-tag">Generative AI Tools</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Communication & Collaboration Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Microsoft Teams</span>
                <span className="skill-tag">Zoom</span>
                <span className="skill-tag">Google Meet</span>
                <span className="skill-tag">Discord</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Graphic Design & Multimedia Tools</h3>
              <div className="skill-tags">
                <span className="skill-tag">Canva</span>
                <span className="skill-tag">CapCut</span>
                <span className="skill-tag">Adobe Express</span>
                <span className="skill-tag">Figma</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>Administrative & Support Skills</h3>
              <div className="skill-tags">
                <span className="skill-tag">Account Support & Record Updates</span>
                <span className="skill-tag">Payment Processing & Transaction Verification</span>
                <span className="skill-tag">Email & Document Management</span>
                <span className="skill-tag">Customer Service & Client Communication</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="resume" className="section">
        <div className="container">
          <h2 className="section-title">Resume</h2>
          <div className="resume-actions">
            <button className="resume-button view-button" onClick={openResumeModal}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
              </svg>
              View My Resume
            </button>
            <a href={resumePDF} download className="resume-button download-button">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download My Resume
            </a>
          </div>
        </div>
      </section>

      {isResumeModalOpen && (
        <div className="modal-overlay" onClick={closeResumeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeResumeModal}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            <img src={resume} alt="Resume" className="modal-resume-image" />
          </div>
        </div>
      )}

      <section id="work" className="section work-section">
        <div className="container">
          <h2 className="section-title">Sample Work</h2>
          <div className="work-grid">
            {workData.map((work) => (
              <div key={work.id} className="work-item" onClick={() => openWorkModal(work)}>
                <div className="work-image">
                  <div className="work-thumbnail">
                    <img src={work.images[0]} alt={work.title} />
                  </div>
                </div>
                <div className="work-content">
                  <h3>{work.title}</h3>
                  <p>{work.shortDescription}</p>
                  <div className="work-info">
                    <span className="work-info-item">📄 {work.pageCount} pages</span>
                  </div>
                  <span className="work-click-hint">Click to view gallery</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedWork && (
        <div className="modal-overlay" onClick={closeWorkModal}>
          <div className="modal-content work-modal-content work-gallery-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeWorkModal}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
            
            <div className="work-gallery-header">
              <h2>{selectedWork.title}</h2>
              <p className="work-gallery-meta">
                <span>{selectedWork.pageCount} pages</span>
              </p>
            </div>

            <div className="work-gallery-grid">
              {selectedWork.images.map((image, index) => (
                <div 
                  key={index} 
                  className="work-gallery-grid-item"
                  onClick={() => expandImage(index)}
                >
                  <img src={image} alt={`${selectedWork.title} - Page ${index + 1}`} />
                  <div className="grid-item-overlay">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
                      <path d="M15 3l2.3 2.3-2.89 2.87 1.42 1.42L18.7 6.7 21 9V3h-6zM3 9l2.3-2.3 2.87 2.89 1.42-1.42L6.7 5.3 9 3H3v6zm6 12l-2.3-2.3 2.89-2.87-1.42-1.42L5.3 17.3 3 15v6h6zm12-6l-2.3 2.3-2.87-2.89-1.42 1.42 2.89 2.87L15 21h6v-6z"/>
                    </svg>
                  </div>
                  <div className="grid-item-number">{index + 1}</div>
                </div>
              ))}
            </div>

            <div className="work-gallery-description">
              <p>{selectedWork.shortDescription}</p>
            </div>
          </div>
        </div>
      )}

      {expandedImageIndex !== null && selectedWork && (
        <div className="lightbox-overlay" onClick={closeExpandedImage}>
          <button className="lightbox-close" onClick={closeExpandedImage}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          </button>

          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedWork.images[expandedImageIndex]} 
              alt={`${selectedWork.title} - Page ${expandedImageIndex + 1}`}
              className="lightbox-image"
            />

            {selectedWork.images.length > 1 && (
              <>
                <button 
                  className="lightbox-nav-button lightbox-nav-prev" 
                  onClick={prevExpandedImage}
                  disabled={expandedImageIndex === 0}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
                  </svg>
                </button>
                <button 
                  className="lightbox-nav-button lightbox-nav-next" 
                  onClick={nextExpandedImage}
                  disabled={expandedImageIndex === selectedWork.images.length - 1}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="40" height="40">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
                  </svg>
                </button>
              </>
            )}

            <div className="lightbox-counter">
              {expandedImageIndex + 1} / {selectedWork.images.length}
            </div>
          </div>
        </div>
      )}

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
                  <p>jahmayapana@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div>
                  <h4>Phone</h4>
                  <p>+63 (970) 192-5884</p>
                </div>
              </div>

              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <h4>Location</h4>
                  <p>Cebu, Philippines</p>
                </div>
              </div>

              <div className="contact-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <div>
                  <h4>LinkedIn</h4>
                  <p>http://www.linkedin.com/in/jahmaila-ayapana</p>
                </div>
              </div>
            </div>
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

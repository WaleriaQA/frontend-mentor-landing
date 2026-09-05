import { useState } from 'react'
import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  const [formStatus, setFormStatus] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const faqs = [
    {
      question: "What technologies will I learn?",
      answer: "You'll master HTML, CSS, JavaScript, and React — the core technologies needed to become a frontend developer. Each lesson is hands-on with real-world projects."
    },
    {
      question: "How long does the mentoring program last?",
      answer: "The program is flexible and typically runs for 3-6 months, depending on your pace. You can always extend or revisit modules as needed."
    },
    {
      question: "Is this suitable for complete beginners?",
      answer: "Absolutely! Our mentoring is designed for beginners. We start from the basics and gradually build up your skills with guided practice."
    },
    {
      question: "Do I get a certificate after completion?",
      answer: "Yes! Upon completing all modules and passing the final project review, you'll receive a Frontend Mentor certificate of completion."
    },
    {
      question: "Can I schedule sessions at my own pace?",
      answer: "Yes, all sessions are flexible. You can book mentoring calls at times that work for you, and all course materials are available 24/7."
    }
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus(null) // Clear previous status
    setIsSubmitting(true)

    if (!name || !email || !message) {
      setFormStatus('Please fill in all fields.')
      setIsSubmitting(false)
      return
    }

    const telegramMessage = `
📩 New message from website

👤 Name: ${name}

📧 Email: ${email}

💬 Message:
${message}
`
    const botToken = '8852222157:AAG8DtQNAxiBjFYLgNqgSd1-peQ6fE4EkEc'
    const chatId = '752407857'
    const telegramApiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`

    try {
      const response = await fetch(telegramApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      })

      if (response.ok) {
        setFormStatus('Message sent successfully!')
        setName('')
        setEmail('')
        setMessage('')
      } else {
        const errorData = await response.json()
        setFormStatus(`Failed to send message: ${errorData.description || 'Unknown error'}`)
      }
    } catch (error) {
      setFormStatus('Failed to send message. Please try again later.')
      console.error('Error sending message:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#" className="logo">
            <span className="logo-icon">FM</span>
            <span className="logo-text">Frontend Mentor</span>
          </a>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#about">About</a>
            <a href="#technologies">Technologies</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="btn btn-nav">Get Started</a>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Now Accepting New Students
          </div>
          <h1 className="hero-title">
            Master <span className="gradient-text">Frontend Development</span> With Expert Mentoring
          </h1>
          <p className="hero-description">
            One-on-one mentoring sessions designed to help beginners build real-world
            web interfaces and launch their career in frontend development.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Start Learning
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#about" className="btn btn-secondary">
              Learn More
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Students Mentored</span>
            </div>
            <div className="stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="stat">
              <span className="stat-number">4.9</span>
              <span className="stat-label">Average Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">About</span>
            <h2 className="section-title">Why Choose Our Mentoring?</h2>
            <p className="section-description">
              We provide personalized guidance to help you navigate the world of frontend development
              with confidence and clarity.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <div className="about-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                </svg>
              </div>
              <h3>Expert Guidance</h3>
              <p>Learn from industry professionals with years of real-world experience in frontend development.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3>Hands-On Projects</h3>
              <p>Build real projects that you can add to your portfolio and showcase to potential employers.</p>
            </div>
            <div className="about-card">
              <div className="about-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3>Community Support</h3>
              <p>Join a supportive community of fellow learners and get help whenever you need it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="technologies" id="technologies">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Technologies</span>
            <h2 className="section-title">What You'll Learn</h2>
            <p className="section-description">
              Master the essential technologies that power modern web development.
            </p>
          </div>
          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-icon html">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 4h16l-1.5 14L12 20l-6.5-2L4 4z"/>
                  <path d="M12 4v16"/>
                  <path d="M8 8h8"/>
                </svg>
              </div>
              <h3>HTML</h3>
              <p>Build semantic, accessible web pages with modern HTML5 markup and best practices.</p>
              <div className="tech-level">
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon css">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 4h16l-1.5 14L12 20l-6.5-2L4 4z"/>
                  <path d="M8 8h8"/>
                </svg>
              </div>
              <h3>CSS</h3>
              <p>Create stunning designs with Flexbox, Grid, animations, and responsive layouts.</p>
              <div className="tech-level">
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon javascript">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>JavaScript</h3>
              <p>Learn programming fundamentals, DOM manipulation, and modern ES6+ features.</p>
              <div className="tech-level">
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot empty"></span>
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-icon react">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="12" r="3"/>
                  <ellipse cx="12" cy="12" rx="10" ry="4"/>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)"/>
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)"/>
                </svg>
              </div>
              <h3>React</h3>
              <p>Build dynamic user interfaces with components, hooks, and state management.</p>
              <div className="tech-level">
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot"></span>
                <span className="level-dot empty"></span>
                <span className="level-dot empty"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Features</span>
            <h2 className="section-title">What's Included</h2>
            <p className="section-description">
              Everything you need to become a confident frontend developer.
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>1-on-1 Mentoring</h3>
              <p>Personalized sessions tailored to your learning pace and goals.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Code Reviews</h3>
              <p>Get detailed feedback on your code from experienced developers.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Project-Based Learning</h3>
              <p>Build real-world projects that strengthen your portfolio.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">04</div>
              <h3>Career Guidance</h3>
              <p>Resume reviews, interview prep, and job search strategies.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">05</div>
              <h3>Flexible Schedule</h3>
              <p>Learn at your own pace with 24/7 access to all materials.</p>
            </div>
            <div className="feature-card">
              <div className="feature-number">06</div>
              <h3>Certificate</h3>
              <p>Earn a certificate upon successful completion of the program.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-description">
              Got questions? We've got answers.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openFaq === index ? 'active' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  aria-expanded={openFaq === index}
                >
                  <span>{faq.question}</span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`faq-chevron ${openFaq === index ? 'rotated' : ''}`}
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </button>
                <div className={`faq-answer ${openFaq === index ? 'open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">Ready to Start?</h2>
            <p className="section-description">
              Get in touch and begin your journey to becoming a frontend developer.
            </p>
          </div>
          <div className="contact-card">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
              </button>
              {formStatus && (
                <p className={`form-status ${formStatus.includes('successfully') ? 'success' : 'error'}`}>
                  {formStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-card">
            <h2>Start Your Frontend Journey Today</h2>
            <p>Join hundreds of students who have launched their careers in frontend development.</p>
            <a href="#contact" className="btn btn-primary">
              Get Started Now
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-content">
          <div className="footer-brand">
            <a href="#" className="logo">
              <span className="logo-icon">FM</span>
              <span className="logo-text">Frontend Mentor</span>
            </a>
            <p>Empowering the next generation of frontend developers through personalized mentoring.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Quick Links</h4>
              <a href="#about">About</a>
              <a href="#technologies">Technologies</a>
              <a href="#features">Features</a>
            </div>
            <div className="footer-column">
              <h4>Support</h4>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <p>&copy; 2026 Frontend Mentor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

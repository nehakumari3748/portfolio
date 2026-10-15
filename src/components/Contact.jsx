import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Copy, 
  Check, 
  MapPin, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onCopy }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      onCopy(
        formData.email,
        `Thank you ${formData.name}! Your message has been prepared.`
      );
      // Construct mailto link as fallback to send real message
      const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry from ' + formData.name)}&body=${encodeURIComponent("Name: " + formData.name + "\nEmail: " + formData.email + "\n\nMessage:\n" + formData.message)}`;
      window.location.href = mailtoUrl;
    }, 700);
  };

  return (
    <section className="section-wrapper" id="contact">
      <div className="container">
        
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} /> Get In Touch
          </span>
          <h2 className="section-title">
            Let's <span>Connect &amp; Collaborate</span>
          </h2>
          <p className="section-desc">
            Actively seeking full-time Full-Stack Developer opportunities, software engineering roles, and innovative technical projects.
          </p>
        </div>

        <div className="contact-grid">
          
          {/* Direct Communication Channels */}
          <div className="contact-info-cards">
            
            {/* Phone Channel */}
            <div className="contact-channel-card glass-card">
              <div className="channel-left">
                <div className="channel-icon-box phone">
                  <Phone size={22} />
                </div>
                <div>
                  <div className="channel-label">Direct Phone Call</div>
                  <div className="channel-value">{personalInfo.phone}</div>
                </div>
              </div>

              <div className="channel-actions">
                <button 
                  className="copy-btn" 
                  onClick={() => onCopy(personalInfo.phone, 'Phone number copied!')}
                  title="Copy Phone Number"
                >
                  <Copy size={14} /> Copy
                </button>
                <a 
                  href={`tel:${personalInfo.phone}`} 
                  className="btn btn-primary"
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* WhatsApp Channel */}
            <div className="contact-channel-card glass-card">
              <div className="channel-left">
                <div className="channel-icon-box whatsapp">
                  <WhatsappIcon size={22} color="#25d366" />
                </div>
                <div>
                  <div className="channel-label">Instant WhatsApp</div>
                  <div className="channel-value">+91 {personalInfo.phone}</div>
                </div>
              </div>

              <div className="channel-actions">
                <a 
                  href={personalInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Email Channel */}
            <div className="contact-channel-card glass-card">
              <div className="channel-left">
                <div className="channel-icon-box email">
                  <Mail size={22} />
                </div>
                <div>
                  <div className="channel-label">Email Address</div>
                  <div className="channel-value" style={{ fontSize: '0.98rem' }}>{personalInfo.email}</div>
                </div>
              </div>

              <div className="channel-actions">
                <button 
                  className="copy-btn" 
                  onClick={() => onCopy(personalInfo.email, 'Email address copied!')}
                  title="Copy Email Address"
                >
                  <Copy size={14} /> Copy
                </button>
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="btn btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                >
                  Write Email
                </a>
              </div>
            </div>

            {/* LinkedIn Channel */}
            <div className="contact-channel-card glass-card">
              <div className="channel-left">
                <div className="channel-icon-box linkedin">
                  <LinkedinIcon size={22} color="#0a66c2" />
                </div>
                <div>
                  <div className="channel-label">Professional Network</div>
                  <div className="channel-value">Neha Kumari</div>
                </div>
              </div>

              <div className="channel-actions">
                <a 
                  href={personalInfo.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={14} /> View Profile
                </a>
              </div>
            </div>

            {/* GitHub Channel */}
            <div className="contact-channel-card glass-card">
              <div className="channel-left">
                <div className="channel-icon-box">
                  <GithubIcon size={22} />
                </div>
                <div>
                  <div className="channel-label">GitHub Profile</div>
                  <div className="channel-value">@nehakumari3748 (19+ Repos)</div>
                </div>
              </div>

              <div className="channel-actions">
                <a 
                  href={personalInfo.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary"
                  style={{ padding: '6px 14px', fontSize: '0.85rem' }}
                >
                  <ExternalLink size={14} /> Visit GitHub
                </a>
              </div>
            </div>

          </div>

          {/* Interactive Message Form */}
          <div className="contact-form-card glass-card">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '6px' }}>
              Send a Direct Message
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              Feel free to reach out for job opportunities, projects, or technical inquiries.
            </p>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Check size={32} />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, marginBottom: '8px' }}>Message Prepared!</h4>
                <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>
                  Your email client has been launched with your inquiry for Neha Kumari.
                </p>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contactName">Your Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    className="form-input"
                    placeholder="e.g. John Doe / Tech Recruiter"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactEmail">Your Email *</label>
                  <input
                    type="email"
                    id="contactEmail"
                    className="form-input"
                    placeholder="e.g. recruiter@company.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    id="contactSubject"
                    className="form-input"
                    placeholder="e.g. Full-Stack Developer Opportunity (Class of 2026)"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contactMsg">Message *</label>
                  <textarea
                    id="contactMsg"
                    className="form-textarea"
                    placeholder="Hi Neha, I noticed your Job Portal and Full-Stack projects..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={submitting}
                  style={{ width: '100%', marginTop: '8px' }}
                >
                  {submitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message to Neha</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

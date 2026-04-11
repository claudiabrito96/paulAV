"use client";

import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// ─── Scroll Reveal Hook ───────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ─── Reusable Reveal Wrapper ──────────────────────────────────
function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────
const SERVICES = [
  { icon: "🎤", title: "Conferences & Meetings", desc: "Microphones, screens, video switching, presentation support." },
  { icon: "🖥️", title: "Virtual & Hybrid", desc: "Zoom/Teams calls, cameras, conference microphones, collaboration tools." },
  { icon: "🎥", title: "Receptions & Galas", desc: "Sound, staging, lighting, DJ Services... Event design assistance." },
];

const PORTFOLIO = [
  { src: "https://www.cti.com/wp-content/uploads/2025/02/Meeting-Room-Video-Wall-CTI-logo.png", label: "Corporate AV", span: "large" },
  { src: "https://amhelectronics.com/wp-content/uploads/2025/04/Services-Commercial-Home-Page-new.jpg", label: "Conference Room", span: "small" },
  { src: "https://www.ldsystems.com/wp-content/uploads/2013/10/PROJECTS-NYE-Live-Houston-01.jpg", label: "Live Production", span: "small" },
  { src: "https://ava-public.s3.eu-central-1.amazonaws.com/wp-content/uploads/2022/01/06153646/konsertystemer-nordic-beats-2017-2.jpg", label: "Event Lighting", span: "small" },
  { src: "https://beaconaudiovideosystems.com/images/easyblog_articles/243/b2ap3_amp_BEAUVI_MayBlog1_Home-Theater-Setup-Cincinnati-OH_PHOTO.jpg", label: "Home Theater", span: "small" },
  { src: "https://www.aurumhometech.com/images/easyblog_articles/139/b2ap3_large_immerse-yourself-in-another-world-with-a-custom-home-theater-design.jpg", label: "Premium Cinema", span: "small" },
];

// ─── Components ───────────────────────────────────────────────

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="#home" className="nav-logo">
          <Image src="/logo.png" alt="Paul Stuart AV" width={40} height={40} className="nav-logo-img" onError={(e) => { e.target.style.display = "none"; }} />
          <span className="nav-logo-text">Paul Stuart <em>AV</em></span>
        </a>
        <ul className="nav-links">
          {["services", "locations", "portfolio", "contact"].map((s) => (
            <li key={s}><a href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a></li>
          ))}
        </ul>
        <a href="#contact" className="nav-cta">Get a Quote</a>
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["services", "locations", "portfolio", "contact"].map((s) => (
          <a key={s} href={`#${s}`} onClick={closeMenu}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
        ))}
        <a href="#contact" className="mobile-cta" onClick={closeMenu}>Get a Quote</a>
      </div>
    </>
  );
}

function Hero() {
  return (
    <header className="hero" id="home">
      <div className="hero-bg" />
      <div className="hero-line" />
      <div className="hero-logo-wrap">
        <Image
          src="/logo.png"
          alt="Paul Stuart AV"
          width={220}
          height={140}
          className="hero-logo"
          priority
        />
      </div>
      <p className="hero-eyebrow">
        <span className="eyebrow-line" />
        Boutique AV Concierge · Since 2010
        <span className="eyebrow-line" />
      </p>
      <h1 className="hero-title">
        Tampa &amp; Chicago&apos;s<br />
        <em>Premier AV Partner</em>
      </h1>
      <p className="hero-sub">
        White-glove audio visual services for corporate conferences, board meetings, live events, and premium residences.
      </p>
      <div className="hero-actions">
        <a href="#contact" className="btn-primary">Request Free Quote</a>
        <a href="#portfolio" className="btn-secondary">See Our Work</a>
      </div>
      <div className="hero-badges">
        {[["15+", "Years Experience"], ["500+", "Events Produced"], ["2", "Market Locations"], ["24/7", "Support Available"]].map(([n, l]) => (
          <div className="hero-badge" key={l}>
            <strong>{n}</strong>
            <span>{l}</span>
          </div>
        ))}
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </header>
  );
}

function Services() {
  return (
    <section id="services" className="section section-surface">
      <div className="section-inner">
        <div className="services-header">
          <Reveal>
            <p className="section-label">What We Do</p>
            <h2 className="section-title">End-to-End Boutique<br />AV Solutions</h2>
          </Reveal>
          <Reveal delay={0.1} className="section-body-wrap">
            <p className="section-body">
              From intimate board meetings to large-scale live productions, we deliver seamless, flawless AV experiences — every time.
            </p>
          </Reveal>
        </div>
        <div className="services-grid">
          {SERVICES.map((svc, i) => (
            <Reveal key={svc.title} delay={i * 0.07} className="service-card">
              <div className="service-icon">{svc.icon}</div>
              <h3>{svc.title}</h3>
              <p>{svc.desc}</p>
              <span className="service-arrow">Learn more →</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Locations() {
  return (
    <section id="locations" className="section">
      <div className="section-inner">
        <Reveal>
          <p className="section-label">Where We Operate</p>
          <h2 className="section-title">Two Markets,<br />One Standard of Excellence</h2>
        </Reveal>
        <div className="locations-grid">

          {/* Tampa */}
          <Reveal delay={0} className="location-card">
            <p className="location-pin">📍 Tampa</p>
            <h3>Tampa</h3>
            <p className="loc-sub">Main Office</p>
            <address>
              3408 Picwood Rd<br />
              Tampa, FL 33618<br /><br />
              <a href="tel:+12245953327">+1 224 595 3327</a>
            </address>
            <div className="location-map">
              <iframe
                title="Tampa Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3523.1!2d-82.4985556!3d28.0491877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c0c0e83f44e61b%3A0xb201b71785aad9!2s3408%20Picwood%20Rd%2C%20Tampa%2C%20FL%2033618!5e0!3m2!1sen!2sus!4v1699999999999"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px", marginTop: "1.5rem", filter: "hue-rotate(100deg) saturate(0.6) brightness(0.85)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          {/* Chicago */}
          <Reveal delay={0.15} className="location-card">
            <p className="location-pin">📍 Chicago</p>
            <h3>Chicago</h3>
            <p className="loc-sub">Midwest Office</p>
            <address>
              2511 Wilke Rd<br />
              Rolling Meadows, IL 60008<br /><br />
              <a href="tel:+12245953327">+1 224 595 3327</a>
            </address>
            <div className="location-map">
              <iframe
                title="Chicago Office"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2966.1!2d-88.0051725!3d42.0828038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fbbac99e94a05%3A0x8d6de2a37de5e072!2s2511%20N%20Wilke%20Rd%2C%20Rolling%20Meadows%2C%20IL%2060008!5e0!3m2!1sen!2sus!4v1699999999999"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "8px", marginTop: "1.5rem", filter: "hue-rotate(100deg) saturate(0.6) brightness(0.85)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="section section-bg">
      <div className="section-inner">
        <Reveal className="portfolio-header">
          <p className="section-label center">Our Work</p>
          <h2 className="section-title center">Featured Projects</h2>
          <p className="section-body center">A selection of recent corporate, live event, and residential installations.</p>
        </Reveal>
        <div className="portfolio-grid">
          {PORTFOLIO.map((item, i) => (
            <Reveal key={i} delay={i * 0.08} className={`portfolio-item portfolio-item-${i}`}>
              <img src={item.src} alt={item.label} loading="lazy" className="portfolio-img" />
              <div className="portfolio-overlay">
                <span>{item.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);
  const [error,     setError]     = useState(null);
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",    // ← replace with your EmailJS Service ID
        "YOUR_TEMPLATE_ID",   // ← replace with your EmailJS Template ID
        {
          name:    form.name,
          email:   form.email,
          service: form.service,
          message: form.message,
        },
        "YOUR_PUBLIC_KEY"     // ← replace with your EmailJS Public Key
      );
      setSubmitted(true);
    } catch (err) {
      setError("Something went wrong. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section section-surface">
      <div className="section-inner">
        <div className="contact-wrap">
          <Reveal className="contact-info">
            <p className="section-label">Get In Touch</p>
            <h2 className="contact-title">Ready to Elevate<br />Your <em>AV Experience?</em></h2>
            <p className="contact-desc">
              Whether you're planning a corporate event, upgrading your conference rooms, or dreaming of the perfect home theater — we'd love to hear from you.
            </p>
            <div className="contact-details">
              {[
                { icon: "📞", text: "+1 224 595 3327", href: "tel:+12245953327" },
                { icon: "✉️", text: "paulstuartAV@gmail.com", href: "mailto:paulstuartAV@gmail.com" },
                { icon: "📍", text: "Tampa, FL & Chicago, IL", href: null },
              ].map((d) => (
                <div className="contact-detail" key={d.text}>
                  <span className="detail-icon">{d.icon}</span>
                  {d.href ? <a href={d.href}>{d.text}</a> : <span>{d.text}</span>}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            {!submitted ? (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" placeholder="John Smith" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" name="email" placeholder="john@company.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="service">Service Needed</label>
                  <select id="service" name="service" value={form.service} onChange={handleChange}>
                    <option value="" disabled>Select a service…</option>
                    {SERVICES.map((s) => <option key={s.title}>{s.title}</option>)}
                    <option>Other</option>
                  </select>
                </div>
                <div className="field">
                  <label htmlFor="message">Tell Us About Your Project</label>
                  <textarea id="message" name="message" rows={5} placeholder="Describe your event, timeline, and any specific requirements…" value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? "Sending…" : "Send Message"}
                </button>
                {error && (
                  <p style={{ color: "#e07070", fontSize: "0.85rem", marginTop: "0.5rem" }}>
                    {error}
                  </p>
                )}
              </form>
            ) : (
              <div className="form-success">
                ✦ Thank you! We&apos;ll be in touch within one business day.
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-logo">Paul Stuart <span>AV</span></div>
          <nav className="footer-nav">
            {["services", "locations", "portfolio", "contact"].map((s) => (
              <a key={s} href={`#${s}`}>{s.charAt(0).toUpperCase() + s.slice(1)}</a>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2026 Paul Stuart AV. All rights reserved. Tampa • Chicago</p>
          <div className="footer-contact">
            <a href="tel:+12245953327">+1 224 595 3327</a>
            <a href="mailto:paulstuartAV@gmail.com">paulstuartAV@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <hr className="divider" />
      <Locations />
      <hr className="divider" />
      <Portfolio />
      <hr className="divider" />
      <Contact />
      <Footer />
    </>
  );
}

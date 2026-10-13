import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container container">
        
        {/* ========== PREMIUM FISH-BONE LOGO ========== */}
        <Link to="/" className="navbar__brand" onClick={closeMenu}>
          <div className="navbar__logo-icon">
            {/* Elegant Fish Bone SVG */}
            <svg 
              width="42" 
              height="42" 
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Main spine */}
              <path 
                d="M8 32H56" 
                stroke="currentColor" 
                strokeWidth="3.5" 
                strokeLinecap="round"
              />
              {/* Left ribs */}
              <path d="M18 32L12 20" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              <path d="M26 32L20 18" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              <path d="M34 32L28 18" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              <path d="M42 32L36 20" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              {/* Right ribs */}
              <path d="M18 32L12 44" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              <path d="M26 32L20 46" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              <path d="M34 32L28 46" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              <path d="M42 32L36 44" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round"/>
              {/* Head circle */}
              <circle cx="52" cy="32" r="5.5" stroke="currentColor" strokeWidth="2.8"/>
              {/* Tail */}
              <path d="M8 32L4 24L4 40L8 32Z" fill="currentColor"/>
            </svg>
          </div>

          <div className="navbar__logo-text">
            <span className="navbar__logo-name">MTUB</span>
            <span className="navbar__logo-sub">Aquaculture</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__desktop">
          <ul className="navbar__links">
            <li><a href="#hero" className="navbar__link">Home</a></li>
            <li><a href="#about" className="navbar__link">About</a></li>
            <li><a href="#supply" className="navbar__link">Supply Chain</a></li>
            <li><a href="#gallery" className="navbar__link">Gallery</a></li>
            <li><a href="#contact" className="navbar__link navbar__link--cta">Contact</a></li>
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${isOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      {/* Mobile Menu (slides from right – 80% width) */}
      <div className={`navbar__mobile-overlay ${isOpen ? 'navbar__mobile-overlay--open' : ''}`}>
        <div className="navbar__mobile-menu">
          <button className="navbar__close" onClick={closeMenu} aria-label="Close menu">
            <span></span>
            <span></span>
          </button>

          <nav className="navbar__mobile-nav">
            <ul className="navbar__mobile-links">
              <li style={{ '--delay': '0.1s' }}><a href="#hero" onClick={closeMenu}>Home</a></li>
              <li style={{ '--delay': '0.15s' }}><a href="#about" onClick={closeMenu}>About Us</a></li>
              <li style={{ '--delay': '0.2s' }}><a href="#supply" onClick={closeMenu}>Supply Chain</a></li>
              <li style={{ '--delay': '0.25s' }}><a href="#gallery" onClick={closeMenu}>Gallery</a></li>
              <li style={{ '--delay': '0.3s' }}>
                <a href="#contact" onClick={closeMenu} className="mobile-cta">Get In Touch</a>
              </li>
            </ul>
          </nav>

          <div className="navbar__mobile-footer">
            <p>Premium Sustainable Tilapia</p>
            <span>Local Markets • Migori • Nairobi</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
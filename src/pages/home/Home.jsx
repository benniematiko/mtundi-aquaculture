import { motion } from 'framer-motion';
import './Home.css';

const Home = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut' }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <div className="home">




     
      {/* ==================== HERO SECTION ==================== */}
<section id="hero" className="hero">
  {/* Background Image */}
  <div className="hero__bg">


    <img 
    src="https://images.pexels.com/photos/8352786/pexels-photo-8352786.jpeg?auto=compress&cs=tinysrgb&w=1920" 
    alt="Fresh harvested tilapia"
  />
    


    <div className="hero__overlay"></div>
  </div>

  <div className="hero__content container">
    <motion.div
      className="hero__text"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* <motion.div className="hero__badge" variants={fadeUp}>
        <span className="hero__badge-dot"></span>
        Sustainable • Bio-Secure • Premium Grade
      </motion.div> */}

      <motion.h1 className="hero__title" variants={fadeUp}>
        Exceptional Tilapia.<br />
        <span>Raised with Precision.</span>
      </motion.h1>

      <motion.p className="hero__subtitle" variants={fadeUp}>
        MTUB Aquaculture produces high-quality tilapia through 
        advanced rearing systems, careful harvesting, and a reliable 
        cold-chain network serving local markets, Migori, and Nairobi.
      </motion.p>

      <motion.div className="hero__actions" variants={fadeUp}>
        <a href="#contact" className="btn btn--primary">
          Request Partnership
        </a>
        <a href="#about" className="btn btn--ghost">
          Explore Our Process
        </a>
      </motion.div>

      {/* Trust Indicators */}
      <motion.div className="hero__trust" variants={fadeUp}>
        <div className="hero__trust-item">
          <strong>Bio-Secure</strong>
          <span>Rearing Systems</span>
        </div>
        <div className="hero__trust-divider"></div>
        <div className="hero__trust-item">
          <strong>Daily</strong>
          <span>Fresh Supply</span>
        </div>
        <div className="hero__trust-divider"></div>
        <div className="hero__trust-item">
          <strong>Migori + Nairobi</strong>
          <span>Distribution</span>
        </div>
      </motion.div>
    </motion.div>
  </div>

  {/* Bottom gradient fade */}
  <div className="hero__fade"></div>
</section>














      {/* ==================== ABOUT / PROCESS SECTION ==================== */}
<section id="about" className="about section">
  <div className="container">
    <motion.div
      className="about__header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.span className="section-label" variants={fadeUp}>
        Our Approach
      </motion.span>
      <motion.h2 className="section-title" variants={fadeUp}>
        Precision at Every Stage
      </motion.h2>
      <motion.p className="section-subtitle" variants={fadeUp}>
        From controlled rearing environments to careful harvesting and 
        reliable delivery — quality and consistency define the MTUB standard.
      </motion.p>
    </motion.div>

    <div className="about__grid">
      {/* Card 1 */}
      <motion.div
        className="about__card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="about__card-number">01</div>
        <h3>Premium Rearing</h3>
        <p>
          Tilapia are raised in carefully monitored, bio-secure systems 
          with optimal water quality, nutrition, and density control to 
          ensure superior flesh quality and consistency.
        </p>
      </motion.div>

      {/* Card 2 */}
      <motion.div
        className="about__card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="about__card-number">02</div>
        <h3>Precise Harvesting</h3>
        <p>
          Harvesting is timed to peak maturity and carried out using 
          low-stress methods that protect the natural texture, flavour, 
          and freshness of every fish.
        </p>
      </motion.div>

      {/* Card 3 */}
      <motion.div
        className="about__card"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        <div className="about__card-number">03</div>
        <h3>Bio-Secure Standards</h3>
        <p>
          Strict biosecurity protocols and continuous monitoring protect 
          stock health while meeting the highest standards of food safety 
          and environmental responsibility.
        </p>
      </motion.div>
    </div>
  </div>
</section>




     {/* ==================== SUPPLY CHAIN SECTION ==================== */}
<section id="supply" className="supply section">
  <div className="container">
    <motion.div
      className="supply__header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.span className="section-label" variants={fadeUp}>
        Logistics Network
      </motion.span>
      <motion.h2 className="section-title" variants={fadeUp}>
        From Pond to Market
      </motion.h2>
      <motion.p className="section-subtitle" variants={fadeUp}>
        A reliable cold-chain network that moves premium tilapia 
        efficiently from our facilities to local markets, Migori, and Nairobi.
      </motion.p>
    </motion.div>

    <div className="supply__flow">
      {/* Step 1 */}
      <motion.div
        className="supply__step"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="supply__step-number">01</div>
        <div className="supply__step-content">
          <h3>Local Markets</h3>
          <p>
            Daily supply of fresh tilapia to nearby markets and retailers 
            with minimal transit time, ensuring peak freshness and quality.
          </p>
        </div>
      </motion.div>

      <div className="supply__connector"></div>

      {/* Step 2 */}
      <motion.div
        className="supply__step"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="supply__step-number">02</div>
        <div className="supply__step-content">
          <h3>Migori Hub</h3>
          <p>
            Strategic regional distribution point providing consistent 
            volume and quality-controlled logistics across the wider area.
          </p>
        </div>
      </motion.div>

      <div className="supply__connector"></div>

      {/* Step 3 */}
      <motion.div
        className="supply__step"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="supply__step-number">03</div>
        <div className="supply__step-content">
          <h3>Nairobi Corridor</h3>
          <p>
            High-volume supply to Nairobi markets and B2B partners 
            with full cold-chain integrity and proper documentation.
          </p>
        </div>
      </motion.div>
    </div>
  </div>
</section>








      {/* ==================== PRODUCT GALLERY SECTION ==================== */}
      {/* ==================== PRODUCT GALLERY SECTION ==================== */}
<section id="gallery" className="gallery section">
  <div className="container">
    <motion.div
      className="gallery__header"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      <motion.span className="section-label" variants={fadeUp}>
        Our Product
      </motion.span>
      <motion.h2 className="section-title" variants={fadeUp}>
        Premium Tilapia
      </motion.h2>
      <motion.p className="section-subtitle" variants={fadeUp}>
        Sustainably raised tilapia known for clean flavour, firm texture, 
        and consistent quality — from pond to market.
      </motion.p>
    </motion.div>

    <div className="gallery__grid">
      {/* Item 1 */}
      <motion.div
        className="gallery__item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="gallery__image">


          {/* Item 4 - Market display */}
          <img 
            src="https://images.unsplash.com/photo-1565557623262-b51c2513a2f3?w=900&q=80" 
            alt="Local tilapia market display"
          />


          <div className="gallery__overlay">
            <h3>Fresh Whole Tilapia</h3>
            <p>Premium grade • Sustainably raised</p>
          </div>
        </div>
      </motion.div>

      {/* Item 2 */}
      <motion.div
        className="gallery__item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="gallery__image">


          {/* Item 3 - Fresh fish close-up */}
          <img 
            src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=900&q=80" 
            alt="Premium fresh tilapia"
          />



          <div className="gallery__overlay">
            <h3>Controlled Rearing</h3>
            <p>Bio-secure • Optimized conditions</p>
          </div>
        </div>
      </motion.div>

      {/* Item 3 */}
      <motion.div
        className="gallery__item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="gallery__image">


          {/* Item 2 - Tilapia on ice / market style */}
        <img 
          src="https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=900&q=80" 
          alt="Fresh tilapia on ice"
        />



          <div className="gallery__overlay">
            <h3>Careful Harvesting</h3>
            <p>Low-stress • Peak freshness</p>
          </div>
        </div>
      </motion.div>

      {/* Item 4 */}
      <motion.div
        className="gallery__item"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={scaleIn}
      >
        <div className="gallery__image">        


        {/* Item 1 - Fresh whole tilapia */}
        <img 
          src="https://images.unsplash.com/photo-1559847844-5315695dadae?w=900&q=80" 
          alt="Fresh whole tilapia"
        />


          <div className="gallery__overlay">
            <h3>Cold-Chain Delivery</h3>
            <p>Reliable • Quality preserved</p>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

























      {/* ==================== CONTACT / INQUIRY SECTION ==================== */}
      <section id="contact" className="contact section">
        <div className="container">
          <div className="contact__wrapper">
            {/* Left Content */}
            <motion.div
              className="contact__info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeUp}>
                Get In Touch
              </motion.span>
              <motion.h2 className="section-title" variants={fadeUp}>
                Let’s Work Together
              </motion.h2>
              <motion.p className="contact__description" variants={fadeUp}>
                Whether you are a local retailer, regional distributor, or 
                export partner in Nairobi — we are ready to supply premium 
                tilapia at scale with full reliability.
              </motion.p>

              <motion.div className="contact__details" variants={fadeUp}>
                <div className="contact__detail">
                  <strong>Email</strong>
                  <span>partners@mtubaquaculture.com</span>
                </div>
                <div className="contact__detail">
                  <strong>Phone</strong>
                  <span>+254 727 700 810</span>
                </div>
                <div className="contact__detail">
                  <strong>Location</strong>
                  <span>Migori County, Kenya</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Form */}
            <motion.form
              className="contact__form"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="company">Company / Organization</label>
                <input type="text" id="company" name="company" placeholder="Company name" />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="Tell us about your requirements..." required></textarea>
              </div>

              <button type="submit" className="btn btn--primary btn--full">
                Send Inquiry
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <span className="footer__logo">MTUB</span>
              <span className="footer__tagline">Aquaculture</span>
              <p>Premium sustainable tilapia from pure waters to your market.</p>
            </div>

            <div className="footer__links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#supply">Supply Chain</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer__links">
              <h4>Markets</h4>
              <ul>
                <li>Local Markets</li>
                <li>Migori</li>
                <li>Nairobi</li>
                <li>Export Partners</li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <p>© {new Date().getFullYear()} MTUB Aquaculture. All rights reserved.</p>
            <p>Built with care for sustainable aquaculture.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
import { Link } from "react-router-dom";
import aboutImg from "../assets/image/pink_bedroom.jpg";
import { useCart } from "../context/CartContext";

function Navbar() {
  const { count } = useCart();

  return (
    <nav className="navbar navbar-expand-lg cc-navbar">
      <div className="container">
        <Link className="navbar-brand cc-brand" to="/">
          <span className="brand-icon">
            <i className="bi bi-palette-fill"></i>
          </span>
          ColorCraft<span> Paints</span>
        </Link>

        <div className="d-flex align-items-center gap-2 order-lg-last">
          <Link to="/cart" className="cc-cart-link d-lg-none" aria-label="Cart">
            <i className="bi bi-bag"></i>
            {count > 0 && <span className="cc-cart-badge">{count}</span>}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#aboutNav"
            aria-controls="aboutNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="aboutNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Our Paints</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item d-none d-lg-block">
              <Link
                to="/cart"
                className="cc-cart-link"
                aria-label="Cart"
              >
                <i className="bi bi-bag"></i>
                {count > 0 && <span className="cc-cart-badge">{count}</span>}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn cc-nav-btn" to="/products">
                Shop Paints <i className="bi bi-arrow-right"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="cc-footer">
      <div className="container">
        <div className="row g-4 text-center text-md-start">
          <div className="col-md-5">
            <h4 className="cc-brand text-white">
              <i className="bi bi-palette-fill me-2"></i>
              ColorCraft Paints
            </h4>
            <p>
              Bringing your walls to life with beautiful colors,
              quality paints, and endless inspiration.
            </p>
          </div>

          <div className="col-6 col-md-3">
            <h6>Quick Links</h6>
            <Link to="/">Home</Link>
            <Link to="/products">Our Paints</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="col-6 col-md-4">
            <h6>Get In Touch</h6>
            <p><i className="bi bi-telephone me-2"></i>+91 98765 43210</p>
            <p><i className="bi bi-envelope me-2"></i>hello@colorcraft.in</p>
            <div className="cc-socials">
              <a href="https://instagram.com" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://facebook.com" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://pinterest.com" aria-label="Pinterest">
                <i className="bi bi-pinterest"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />
        <p className="cc-copyright">
          © 2026 ColorCraft Paints. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default function About() {
  return (
    <>
      <Navbar />
      <div className="nav-hero-gap"></div>

      <main>
        <section className="cc-page-banner">
          <div className="container" data-aos="fade-up">
            <span className="cc-eyebrow">OUR STORY</span>
            <h1>More Than Just Paint.</h1>
            <p>We help turn everyday spaces into places you love.</p>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <img className="cc-about-image"
                  src={aboutImg}
                  alt="Warm and colorful contemporary interior" />
              </div>
              <div className="col-lg-6" data-aos="fade-left">
                <span className="cc-eyebrow">WHO WE ARE</span>
                <h2 className="cc-section-title">
                  Every Great Space Starts With Color.
                </h2>
                <p>
                  ColorCraft Paints is a paint shop concept built around
                  one simple idea: the right color can make a space feel
                  completely different.
                </p>
                <p>
                  Our collection brings together interior paints, exterior
                  protection, and wood finishes to help customers plan
                  their next home improvement project.
                </p>
                <Link to="/products" className="btn cc-primary-btn">
                  Explore Our Collection
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="cc-values section-space">
          <div className="container">
            <div className="section-heading text-center mb-5">
              <span className="cc-eyebrow">WHAT MATTERS TO US</span>
              <h2>Our Values</h2>
            </div>
            <div className="row g-4">
              {[
                ["bi-award", "Quality First", "Paint options selected with lasting beauty and performance in mind."],
                ["bi-palette", "Color Inspiration", "A range of shades to help every customer express their style."],
                ["bi-people", "Customer Care", "Helpful guidance to make choosing paint easier."],
              ].map(([icon, title, description]) => (
                <div className="col-md-4" key={title} data-aos="fade-up">
                  <div className="cc-value-card">
                    <i className={`bi ${icon}`}></i>
                    <h4>{title}</h4>
                    <p>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cc-cta section-space">
          <div className="container">
            <div className="cc-cta-inner">
              <div>
                <h2>Let's Bring Your Ideas to Life.</h2>
                <p>Discover the right colors for your next project.</p>
              </div>
              <Link to="/contact" className="btn cc-primary-btn">Talk to Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
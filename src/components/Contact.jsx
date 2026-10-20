import { useState } from "react";
import { Link } from "react-router-dom";
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
            data-bs-target="#contactNav"
            aria-controls="contactNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="contactNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Our Paints</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/contact">Contact</Link>
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

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "Paint Consultation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Contact form submission:", form);
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "Paint Consultation",
      message: "",
    });
  }

  return (
    <>
      <Navbar />
      <div className="nav-hero-gap"></div>

      <main>
        <section className="cc-page-banner">
          <div className="container" data-aos="fade-up">
            <span className="cc-eyebrow">WE'RE HERE TO HELP</span>
            <h1>Let's Talk Colors.</h1>
            <p>Have a project in mind? We'd love to hear about it.</p>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-5" data-aos="fade-right">
                <span className="cc-eyebrow">GET IN TOUCH</span>
                <h2 className="cc-section-title">
                  Your Next Color Story Starts Here.
                </h2>
                <p>
                  Ask us about paint finishes, color choices, or your
                  next home renovation project.
                </p>

                <div className="cc-contact-item">
                  <span><i className="bi bi-telephone"></i></span>
                  <div>
                    <h6>Call Us</h6>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="cc-contact-item">
                  <span><i className="bi bi-envelope"></i></span>
                  <div>
                    <h6>Email Us</h6>
                    <p>hello@colorcraft.in</p>
                  </div>
                </div>

                <div className="cc-contact-item">
                  <span><i className="bi bi-geo-alt"></i></span>
                  <div>
                    <h6>Visit Our Store</h6>
                    <p>Bengaluru, Karnataka, India</p>
                  </div>
                </div>

                <div className="cc-contact-note">
                  <i className="bi bi-info-circle me-2"></i>
                  These are sample contact details for this demo project.
                </div>
              </div>

              <div className="col-lg-7" data-aos="fade-left">
                <form className="cc-contact-form" onSubmit={handleSubmit}>
                  <h3>Send Us a Message</h3>
                  <p>Fill in your details and tell us what you need.</p>

                  {submitted && (
                    <div className="alert alert-success" role="status">
                      Thank you! Your message was recorded in this demo.
                    </div>
                  )}

                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label" htmlFor="name">Full Name</label>
                      <input id="name" className="form-control" name="name"
                        value={form.name} onChange={handleChange}
                        placeholder="Enter your name" required />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input id="email" className="form-control" type="email"
                        name="email" value={form.email} onChange={handleChange}
                        placeholder="you@example.com" required />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input id="phone" className="form-control" type="tel"
                        name="phone" value={form.phone} onChange={handleChange}
                        placeholder="Your phone number" />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label" htmlFor="subject">What Do You Need?</label>
                      <select id="subject" className="form-select"
                        name="subject" value={form.subject} onChange={handleChange}>
                        <option>Paint Consultation</option>
                        <option>Interior Paint</option>
                        <option>Exterior Paint</option>
                        <option>Bulk Order</option>
                        <option>Other Enquiry</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label" htmlFor="message">Your Message</label>
                      <textarea id="message" className="form-control" name="message"
                        rows="5" value={form.message} onChange={handleChange}
                        placeholder="Tell us about your project..." required />
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn cc-primary-btn">
                        Send Message <i className="bi bi-send ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
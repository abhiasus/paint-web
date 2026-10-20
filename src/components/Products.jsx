import { useState } from "react";
import { Link } from "react-router-dom";
import interiorCan from "../assets/image/interior_emulsion_can.jpg";
import exteriorCan from "../assets/image/hero_paint_cans.jpg";
import woodCan from "../assets/image/wood_finish_can.jpg";
import premiumCan from "../assets/image/premium_interior_can.jpg";
import rollerTray from "../assets/image/paint_roller_and_tray.jpg";
import metalCan from "../assets/image/metal_paint_can.jpg";
import { useCart } from "../context/CartContext";

const paints = [
  { id: 1, name: "Royal Interior Emulsion", category: "Interior", price: 899, shade: "#E8D5BF", image: interiorCan },
  { id: 2, name: "Weather Shield Exterior", category: "Exterior", price: 1299, shade: "#B9CCB4", image: exteriorCan },
  { id: 3, name: "Premium Wood Finish", category: "Wood Care", price: 749, shade: "#A56F4B", image: woodCan },
  { id: 4, name: "Silk Touch Luxury", category: "Interior", price: 1599, shade: "#D4B8A4", image: premiumCan },
  { id: 5, name: "Aqua Fresh Exterior", category: "Exterior", price: 1099, shade: "#9CBBC8", image: rollerTray },
  { id: 6, name: "Metal Guard Enamel", category: "Wood Care", price: 599, shade: "#C4BDB4", image: metalCan },
];

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
            data-bs-target="#productNav"
            aria-controls="productNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="productNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">Our Paints</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
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

export default function Products() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Interior", "Exterior", "Wood Care"];
  const { addToCart } = useCart();

  const visiblePaints = paints.filter(
    (paint) => filter === "All" || paint.category === filter
  );

  return (
    <>
      <Navbar />
      <div className="nav-hero-gap"></div>

      <main>
        <section className="cc-page-banner">
          <div className="container" data-aos="fade-up">
            <span className="cc-eyebrow">THE COLOR COLLECTION</span>
            <h1>Find the Paint That Fits.</h1>
            <p>Explore quality paints designed for beautiful spaces.</p>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-5">
              <div>
                <h2 className="cc-section-title">Our Paint Collection</h2>
                <p className="text-muted mb-0">Choose your finish and find your shade.</p>
              </div>
              <div className="cc-filter-group">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`cc-filter-btn ${filter === category ? "active" : ""}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="row g-4">
              {visiblePaints.map((paint, index) => (
                <div className="col-sm-6 col-lg-4" key={paint.id}
                  data-aos="fade-up" data-aos-delay={(index % 3) * 80}>
                  <div className="cc-product-card">
                    <div className="cc-product-image">
                      <img
                        src={paint.image}
                        alt={paint.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="cc-product-info">
                      <span className="cc-product-category">{paint.category}</span>
                      <h5>{paint.name}</h5>
                      <div className="cc-shade-line">
                        <span style={{ backgroundColor: paint.shade }}></span>
                        <small>Signature shade</small>
                      </div>
                      <div className="cc-product-bottom">
                        <strong>₹{paint.price}</strong>
                        <button className="cc-cart-btn"
                          onClick={() => addToCart(paint)}>
                          <i className="bi bi-bag-plus"></i>
                          <span className="ms-1">Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {visiblePaints.length === 0 && (
                <p>No paints found in this category.</p>
              )}
            </div>
          </div>
        </section>

        <section className="cc-cta section-space">
          <div className="container">
            <div className="cc-cta-inner">
              <div>
                <h2>Not Sure Which Paint to Choose?</h2>
                <p>We can help you find the right finish for your space.</p>
              </div>
              <Link to="/contact" className="btn cc-primary-btn">Contact Us</Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
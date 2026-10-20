import { Link } from "react-router-dom";
import heroImg from "../assets/image/hero_living_room.jpg";
import interiorCan from "../assets/image/interior_emulsion_can.jpg";
import exteriorCan from "../assets/image/hero_paint_cans.jpg";
import woodCan from "../assets/image/wood_finish_can.jpg";
import { useCart } from "../context/CartContext";

const paints = [
  { id: 1, name: "Royal Interior Emulsion", category: "Interior", price: 899, shade: "#E8D5BF", image: interiorCan },
  { id: 2, name: "Weather Shield Exterior", category: "Exterior", price: 1299, shade: "#B9CCB4", image: exteriorCan },
  { id: 3, name: "Premium Wood Finish", category: "Wood Care", price: 749, shade: "#A56F4B", image: woodCan },
];

const colors = [
  ["Soft Peach", "#F3B7A0"],
  ["Sage Green", "#A8BCA1"],
  ["Ocean Blue", "#729CB9"],
  ["Butter Yellow", "#F3D878"],
  ["Lavender", "#B8A5D6"],
  ["Terracotta", "#C87859"],
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
            data-bs-target="#ccNav"
            aria-controls="ccNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="ccNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Our Paints</Link>
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

export default function Home() {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      {/* Intentional gap between navbar and hero */}
      <div className="nav-hero-gap"></div>

      <main>
        <section className="cc-hero">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6" data-aos="fade-right">
                <span className="cc-eyebrow">
                  <i className="bi bi-stars me-2"></i>
                  A LITTLE COLOR. A LOT OF MAGIC.
                </span>
                <h1>
                  Make Every Wall
                  <span> Tell Your Story.</span>
                </h1>
                <p>
                  Discover premium paints, beautiful shades, and
                  finishes that transform your house into a home.
                </p>
                <div className="d-flex flex-wrap gap-3">
                  <Link to="/products" className="btn cc-primary-btn">
                    Shop Paints <i className="bi bi-arrow-up-right"></i>
                  </Link>
                  <Link to="/about" className="btn cc-outline-btn">
                    Discover Our Story
                  </Link>
                </div>

                <div className="cc-stats">
                  <div><strong>500+</strong><span>Color Choices</span></div>
                  <div><strong>Premium</strong><span>Quality Finishes</span></div>
                  <div><strong>100%</strong><span>Color Inspiration</span></div>
                </div>
              </div>

              <div className="col-lg-6" data-aos="fade-left">
                <div className="cc-hero-image">
                  <img
                    src={heroImg}
                    alt="Beautiful modern living room with warm wall colors"
                  />
                  <div className="cc-floating-card">
                    <span className="cc-floating-dot"></span>
                    <div>
                      <strong>Find Your Shade</strong>
                      <p>Colors that feel like you.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cc-categories section-space">
          <div className="container">
            <div className="section-heading text-center" data-aos="fade-up">
              <span className="cc-eyebrow">COLOR YOUR WORLD</span>
              <h2>Find Your Perfect Palette</h2>
              <p>Every mood deserves a beautiful shade.</p>
            </div>

            <div className="row g-3 mt-4">
              {colors.map(([name, color], index) => (
                <div
                  className="col-6 col-md-4 col-lg-2"
                  key={name}
                  data-aos="fade-up"
                  data-aos-delay={index * 70}
                >
                  <Link to="/products" className="cc-color-card">
                    <div style={{ backgroundColor: color }}></div>
                    <strong>{name}</strong>
                    <span>Explore shade</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cc-featured section-space">
          <div className="container">
            <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-4">
              <div className="section-heading" data-aos="fade-up">
                <span className="cc-eyebrow">OUR BEST PICKS</span>
                <h2>Paints Made to Impress</h2>
                <p>Quality finishes for every corner of your home.</p>
              </div>
              <Link to="/products" className="cc-text-link">
                View all paints <i className="bi bi-arrow-right"></i>
              </Link>
            </div>

            <div className="row g-4">
              {paints.map((paint, index) => (
                <div className="col-md-6 col-lg-4" key={paint.id}
                  data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="cc-product-card">
                    <div className="cc-product-image">
                      <img src={paint.image} alt={paint.name} loading="lazy" />
                      <span className="cc-product-badge">Popular</span>
                    </div>
                    <div className="cc-product-info">
                      <span className="cc-product-category">{paint.category}</span>
                      <h5>{paint.name}</h5>
                      <div className="cc-product-bottom">
                        <strong>₹{paint.price}</strong>
                        <button
                          className="cc-cart-btn"
                          onClick={() => addToCart(paint)}
                          aria-label={`Add ${paint.name} to cart`}
                        >
                          <i className="bi bi-bag-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cc-cta section-space">
          <div className="container">
            <div className="cc-cta-inner" data-aos="zoom-in">
              <div>
                <span className="cc-eyebrow">YOUR HOME, YOUR COLORS</span>
                <h2>Ready for a Fresh New Look?</h2>
                <p>Find the right paint for your next transformation.</p>
              </div>
              <Link to="/contact" className="btn cc-primary-btn">
                Talk to Our Team <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
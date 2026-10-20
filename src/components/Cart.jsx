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
            data-bs-target="#cartNav"
            aria-controls="cartNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="cartNav">
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
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            <li className="nav-item d-none d-lg-block">
              <Link
                to="/cart"
                className="cc-cart-link active"
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

const GST_RATE = 0.18;
const FREE_DELIVERY_ABOVE = 2000;
const DELIVERY_FEE = 99;
const PROMO_CODE = "COLOR10";
const PROMO_DISCOUNT = 0.1;

const rupee = (n) => `₹${Math.round(n).toLocaleString("en-IN")}`;

export default function Cart() {
  const { items, subtotal, increase, decrease, removeItem, clearCart } = useCart();
  const [promoInput, setPromoInput] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState("");
  const [ordered, setOrdered] = useState(false);

  const discount = promoApplied ? subtotal * PROMO_DISCOUNT : 0;
  const taxable = subtotal - discount;
  const gst = taxable * GST_RATE;
  const delivery = subtotal === 0 || subtotal >= FREE_DELIVERY_ABOVE ? 0 : DELIVERY_FEE;
  const total = taxable + gst + delivery;
  const remainingForFree = Math.max(0, FREE_DELIVERY_ABOVE - subtotal);

  function applyPromo(e) {
    e.preventDefault();
    if (promoInput.trim().toUpperCase() === PROMO_CODE) {
      setPromoApplied(true);
      setPromoError("");
    } else {
      setPromoApplied(false);
      setPromoError("Invalid promo code.");
    }
  }

  function placeOrder() {
    console.log("Order placed:", { items, total });
    clearCart();
    setPromoApplied(false);
    setPromoInput("");
    setOrdered(true);
  }

  return (
    <>
      <Navbar />
      <div className="nav-hero-gap"></div>

      <main>
        <section className="cc-page-banner">
          <div className="container" data-aos="fade-up">
            <span className="cc-eyebrow">YOUR SELECTION</span>
            <h1>Shopping Cart</h1>
            <p>Review your paints before you check out.</p>
          </div>
        </section>

        <section className="section-space">
          <div className="container">
            {ordered && items.length === 0 ? (
              <div className="cc-cart-empty">
                <i className="bi bi-check-circle"></i>
                <h3>Order placed!</h3>
                <p>Thank you for shopping with ColorCraft (demo order).</p>
                <Link to="/products" className="btn cc-primary-btn">Continue Shopping</Link>
              </div>
            ) : items.length === 0 ? (
              <div className="cc-cart-empty">
                <i className="bi bi-bag"></i>
                <h3>Your cart is empty</h3>
                <p>Looks like you haven't added any paints yet.</p>
                <Link to="/products" className="btn cc-primary-btn">Browse Paints</Link>
              </div>
            ) : (
              <div className="row g-4">
                <div className="col-lg-8">
                  <div className="cc-cart-head">
                    <h2 className="cc-section-title">Items ({items.length})</h2>
                    <button className="cc-clear-btn" onClick={clearCart}>
                      <i className="bi bi-trash me-1"></i>Clear cart
                    </button>
                  </div>

                  {items.map((item) => (
                    <div className="cc-cart-item" key={item.id}>
                      <img src={item.image} alt={item.name} />

                      <div className="cc-cart-item-info">
                        <span className="cc-product-category">{item.category}</span>
                        <h5>{item.name}</h5>
                        <div className="cc-shade-line mb-0">
                          <span style={{ backgroundColor: item.shade }}></span>
                          <small>Signature shade</small>
                        </div>
                        <strong className="cc-unit-price">{rupee(item.price)} each</strong>
                      </div>

                      <div className="cc-cart-item-actions">
                        <div className="cc-qty">
                          <button onClick={() => decrease(item.id)} aria-label="Decrease quantity">
                            <i className="bi bi-dash"></i>
                          </button>
                          <span>{item.qty}</span>
                          <button onClick={() => increase(item.id)} aria-label="Increase quantity">
                            <i className="bi bi-plus"></i>
                          </button>
                        </div>
                        <strong className="cc-line-total">{rupee(item.price * item.qty)}</strong>
                        <button
                          className="cc-remove-btn"
                          onClick={() => removeItem(item.id)}
                          aria-label={`Remove ${item.name}`}
                        >
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </div>
                    </div>
                  ))}

                  <Link to="/products" className="cc-text-link d-inline-block mt-3">
                    <i className="bi bi-arrow-left me-1"></i> Continue shopping
                  </Link>
                </div>

                <div className="col-lg-4">
                  <aside className="cc-summary">
                    <h4>Order Summary</h4>

                    {remainingForFree > 0 ? (
                      <p className="cc-free-note">
                        Add {rupee(remainingForFree)} more for free delivery.
                      </p>
                    ) : (
                      <p className="cc-free-note ok">You've unlocked free delivery!</p>
                    )}

                    <form className="cc-promo" onSubmit={applyPromo}>
                      <input
                        className="form-control"
                        placeholder="Promo code (try COLOR10)"
                        value={promoInput}
                        onChange={(e) => setPromoInput(e.target.value)}
                        aria-label="Promo code"
                      />
                      <button type="submit" className="btn cc-outline-btn">Apply</button>
                    </form>
                    {promoError && <small className="text-danger">{promoError}</small>}
                    {promoApplied && <small className="text-success">10% discount applied.</small>}

                    <div className="cc-summary-row"><span>Subtotal</span><span>{rupee(subtotal)}</span></div>
                    {promoApplied && (
                      <div className="cc-summary-row discount">
                        <span>Discount (10%)</span><span>-{rupee(discount)}</span>
                      </div>
                    )}
                    <div className="cc-summary-row"><span>GST (18%)</span><span>{rupee(gst)}</span></div>
                    <div className="cc-summary-row">
                      <span>Delivery</span>
                      <span>{delivery === 0 ? "Free" : rupee(delivery)}</span>
                    </div>
                    <div className="cc-summary-row total"><span>Total</span><span>{rupee(total)}</span></div>

                    <button className="btn cc-primary-btn w-100 mt-3" onClick={placeOrder}>
                      Place Order <i className="bi bi-arrow-right ms-1"></i>
                    </button>
                    <small className="cc-summary-note">Demo checkout, no payment is taken.</small>
                  </aside>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
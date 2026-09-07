import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            PIZZARO
          </Link>

          <p>
            Freshly prepared pizzas, delicious flavours,
            and good food made with care.
          </p>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/large-pizzas">Large Pizzas</Link>
          <Link to="/regular-pizzas">Regular Pizzas</Link>
          <Link to="/beverages">Beverages</Link>
        </div>

        <div className="footer-column">
          <h3>Customer</h3>

          <Link to="/about">About Us</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/login">Login</Link>
        </div>

        <div className="footer-column">
          <h3>Contact Us</h3>

          <p>📞 +91 98765 43210</p>
          <p>✉️ hello@pizzaro.com</p>
          <p>📍 India</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} PIZZARO. All rights reserved.
        </p>

        <p>
          Made with ❤️ for pizza lovers.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
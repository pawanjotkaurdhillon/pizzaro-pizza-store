import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

function Navbar() {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleAuthChange = () => {
      const savedUser = localStorage.getItem("user");
      setUser(savedUser ? JSON.parse(savedUser) : null);
    };

    window.addEventListener("authChange", handleAuthChange);

    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);

    window.dispatchEvent(new Event("authChange"));
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = search.trim();

    if (!searchTerm) {
      return;
    }

    navigate(`/search?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        <Link to="/" className="logo">
          PIZZARO
        </Link>

        <form
          className="navbar-search"
          onSubmit={handleSearch}
        >
          <input
            type="text"
            placeholder="Search pizzas, beverages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button type="submit" aria-label="Search">
            🔍
          </button>
        </form>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/large-pizzas">Large Pizzas</Link>
          <Link to="/regular-pizzas">Regular Pizzas</Link>
          <Link to="/beverages">Beverages</Link>
          <Link to="/about">About Us</Link>
        </nav>

        <div className="nav-actions">
          {user ? (
            <>
              <span className="welcome-user">
                Hi, {user.name}
              </span>

              <button
                className="logout-button"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="login-link">
              Login
            </Link>
          )}

          <Link to="/cart" className="cart-button">
            Cart ({cartCount})
          </Link>
        </div>

      </div>
    </header>
  );
}

export default Navbar;

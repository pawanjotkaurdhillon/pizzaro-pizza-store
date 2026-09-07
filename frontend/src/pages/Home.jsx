import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">FRESH • HOT • DELICIOUS</p>

          <h1>
            Great pizza,
            <br />
            made for you.
          </h1>

          <p className="hero-description">
            Handcrafted pizzas made with fresh ingredients, delicious
            toppings, and plenty of cheese.
          </p>

          <Link to="/large-pizzas" className="hero-button">
            Order Now
          </Link>
        </div>

        <div className="hero-image">
          <div className="pizza-placeholder">🍕</div>
        </div>
      </section>

      <section className="categories-section">
        <div className="section-heading">
          <p>EXPLORE OUR MENU</p>
          <h2>What are you craving?</h2>
        </div>

        <div className="category-grid">
          <Link to="/large-pizzas" className="category-card">
            <div className="category-icon">🍕</div>
            <h3>Large Pizzas</h3>
            <p>Big, cheesy and loaded with your favourite toppings.</p>
            <span>Explore →</span>
          </Link>

          <Link to="/regular-pizzas" className="category-card">
            <div className="category-icon">🍕</div>
            <h3>Regular Pizzas</h3>
            <p>Perfect size for a quick and delicious meal.</p>
            <span>Explore →</span>
          </Link>

          <Link to="/beverages" className="category-card">
            <div className="category-icon">🥤</div>
            <h3>Beverages</h3>
            <p>Refreshing drinks to complete your pizza experience.</p>
            <span>Explore →</span>
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Home;
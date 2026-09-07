import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">

      {/* HERO */}
      <section className="about-hero-new">
        <p className="about-tag">ABOUT PIZZARO</p>

        <h1>
          Good pizza.
          <br />
          Made with love.
        </h1>

        <p className="about-intro">
          At PIZZARO, we believe great food should be simple,
          fresh, and made for sharing.
        </p>
      </section>


      {/* STATS */}
      <section className="about-stats">

        <div className="stat">
          <h2>100%</h2>
          <p>Fresh Ingredients</p>
        </div>

        <div className="stat">
          <h2>30 min</h2>
          <p>Fast Delivery</p>
        </div>

        <div className="stat">
          <h2>10k+</h2>
          <p>Happy Customers</p>
        </div>

      </section>


      {/* STORE EVENTS */}
      <section className="about-events">

        <p className="about-tag">WHY PIZZARO?</p>

        <h2 className="events-title">
          Everything you need,
          <br />
          in every slice.
        </h2>

        <div className="event-grid">

          <div className="event-card">

            <div className="event-icon">
              🔎
            </div>

            <h3>
              Easy to Choose
            </h3>

            <p>
              Browse our pizzas, beverages, and other
              favourites easily and find exactly what
              you're craving.
            </p>

          </div>


          <div className="event-card">

            <div className="event-icon">
              🚚
            </div>

            <h3>
              Fast Delivery
            </h3>

            <p>
              We prepare your order with care and aim
              to get your hot and fresh pizza to you
              as quickly as possible.
            </p>

          </div>


          <div className="event-card">

            <div className="event-icon">
              ❤️
            </div>

            <h3>
              Made with Care
            </h3>

            <p>
              From the ingredients we choose to the
              order delivered to your door, we care
              about every detail.
            </p>

          </div>

        </div>

      </section>


      {/* OUR STORY */}
      <section className="about-story-new">

        <div>
          <p className="about-tag">OUR STORY</p>

          <h2>
            More than just
            <br />
            a pizza store.
          </h2>
        </div>

        <div className="story-text">

          <p>
            PIZZARO was created with one simple idea:
            bringing delicious, freshly prepared pizzas
            to everyone without making the experience
            complicated.
          </p>

          <p>
            From classic favourites to creative
            vegetarian combinations, every pizza is
            made to give you the perfect combination
            of flavour, freshness, and comfort.
          </p>

        </div>

      </section>


      {/* CTA */}
      <section className="about-cta-new">

        <p className="about-tag">
          READY TO ORDER?
        </p>

        <h2>
          Your next pizza
          <br />
          is waiting.
        </h2>

        <p>
          Explore our menu and find your new favourite.
        </p>

        <Link
          to="/large-pizzas"
          className="about-menu-button"
        >
          Explore Our Menu
        </Link>

      </section>

    </main>
  );
}

export default About;
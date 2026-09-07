import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import API from "../api";

function Checkout() {
  const navigate = useNavigate();

  const {
    cartItems,
    cartTotal,
  } = useCart();

  const savedUser = localStorage.getItem("user");
  const user = savedUser ? JSON.parse(savedUser) : null;

  const [name, setName] = useState(user?.name || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Don't allow checkout with an empty cart
  if (cartItems.length === 0) {
    return (
      <main className="checkout-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            Add some delicious pizzas before checking out.
          </p>

          <Link
            to="/large-pizzas"
            className="hero-button"
          >
            Browse Pizzas
          </Link>
        </div>
      </main>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const orderData = {
        customer: {
          name,
          phone,
          address,
          city,
          pincode,
        },

        items: cartItems.map((item) => ({
          productId: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),

        total: cartTotal,
      };

      const response = await API.post(
        "/orders",
        orderData
      );

      console.log("Order created:", response.data);

      // Save the order temporarily so the
      // confirmation page can display it.
      localStorage.setItem(
        "lastOrder",
        JSON.stringify(response.data.order)
      );

      navigate("/order-confirmation");
    } catch (error) {
      console.error("Error placing order:", error);

      setError(
        error.response?.data?.message ||
          "Unable to place order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="checkout-page">
      <div className="checkout-container">

        <div className="section-heading">
          <p>CHECKOUT</p>
          <h1>Delivery Details</h1>
        </div>

        <div className="checkout-content">

          {/* Delivery Form */}
          <form
            className="checkout-form"
            onSubmit={handleSubmit}
          >
            <h2>Where should we deliver?</h2>

            {error && (
              <p className="auth-error">
                {error}
              </p>
            )}

            <label>Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              required
            />

            <label>Phone Number</label>

            <input
              type="tel"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
              required
            />

            <label>Delivery Address</label>

            <textarea
              placeholder="Enter your complete address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
              rows="4"
              required
            />

            <div className="checkout-row">

              <div>
                <label>City</label>

                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) =>
                    setCity(e.target.value)
                  }
                  required
                />
              </div>

              <div>
                <label>Pincode</label>

                <input
                  type="text"
                  placeholder="Pincode"
                  value={pincode}
                  onChange={(e) =>
                    setPincode(e.target.value)
                  }
                  required
                />
              </div>

            </div>

            <button
              type="submit"
              className="checkout-button"
              disabled={loading}
            >
              {loading
                ? "Placing Order..."
                : "Place Order"}
            </button>

          </form>

          {/* Order Summary */}
          <aside className="checkout-summary">

            <h2>Your Order</h2>

            <div className="checkout-items">

              {cartItems.map((item) => (
                <div
                  className="checkout-item"
                  key={item._id}
                >
                  <div>
                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      × {item.quantity}
                    </span>
                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>
                </div>
              ))}

            </div>

            <hr />

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>
                ₹{cartTotal}
              </strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <strong>
                ₹{cartTotal}
              </strong>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
}

export default Checkout;
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

function Cart() {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    cartTotal,
  } = useCart();

  // If cart is empty
  if (cartItems.length === 0) {
    return (
      <main className="cart-page">
        <div className="empty-cart">
          <h1>Your Cart is Empty</h1>

          <p>
            Looks like you haven't added anything yet.
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

  return (
    <main className="cart-page">
      <div className="cart-container">

        <div className="section-heading">
          <p>YOUR ORDER</p>
          <h1>Shopping Cart</h1>
        </div>

        <div className="cart-content">

          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div
                className="cart-item"
                key={item._id}
              >
                <img
                  src={item.image}
                  alt={item.name}
                />

                <div className="cart-item-info">
                  <h3>{item.name}</h3>

                  <p>₹{item.price}</p>

                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        decreaseQuantity(item._id)
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        increaseQuantity(item._id)
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-right">
                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(item._id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <aside className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <strong>₹{cartTotal}</strong>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <strong>Free</strong>
            </div>

            <hr />

            <div className="summary-total">
              <span>Total</span>
              <strong>₹{cartTotal}</strong>
            </div>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout
            </Link>
          </aside>

        </div>
      </div>
    </main>
  );
}

export default Cart;
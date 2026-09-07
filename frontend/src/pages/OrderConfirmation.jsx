import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function OrderConfirmation() {
  const navigate = useNavigate();

  const savedOrder = localStorage.getItem("lastOrder");
  const order = savedOrder
    ? JSON.parse(savedOrder)
    : null;

  const [timeLeft, setTimeLeft] = useState(() => {
    if (!order?.estimatedDeliveryTime) {
      return 30 * 60;
    }

    const difference =
      new Date(order.estimatedDeliveryTime).getTime() -
      Date.now();

    return Math.max(
      0,
      Math.floor(difference / 1000)
    );
  });

  useEffect(() => {
    if (!order) {
      navigate("/");
      return;
    }

    const timer = setInterval(() => {
      const difference =
        new Date(
          order.estimatedDeliveryTime
        ).getTime() - Date.now();

      setTimeLeft(
        Math.max(
          0,
          Math.floor(difference / 1000)
        )
      );
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate, order]);

  if (!order) {
    return null;
  }

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const formattedTime = `${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;

  const orderId = String(
    order.id || order._id || "ORDER"
  );

  return (
    <main className="confirmation-page">
      <div className="confirmation-card">

        <div className="confirmation-icon">
          ✓
        </div>

        <p className="confirmation-tag">
          ORDER CONFIRMED
        </p>

        <h1>
          Thank You for Your Order! 🍕
        </h1>

        <p className="confirmation-message">
          Your order has been successfully placed.
          We're getting your pizza ready!
        </p>

        <div className="order-number">
          <span>Order ID</span>

          <strong>
            #{orderId.slice(-6).toUpperCase()}
          </strong>
        </div>

        <div className="delivery-box">

          <div className="delivery-icon">
            🍕
          </div>

          <div>
            <h2>
              Your pizza is on its way!
            </h2>

            <p>
              Estimated delivery time
            </p>
          </div>

          <div className="countdown">
            {formattedTime}
          </div>

        </div>

        <div className="order-status">

          <div className="status-step active">
            <div className="status-circle">
              ✓
            </div>

            <span>
              Order Placed
            </span>
          </div>

          <div className="status-line active-line" />

          <div className="status-step active">
            <div className="status-circle">
              🍕
            </div>

            <span>
              Preparing
            </span>
          </div>

          <div className="status-line" />

          <div className="status-step">
            <div className="status-circle">
              🛵
            </div>

            <span>
              On the Way
            </span>
          </div>

          <div className="status-line" />

          <div className="status-step">
            <div className="status-circle">
              ✓
            </div>

            <span>
              Delivered
            </span>
          </div>

        </div>

        <div className="confirmation-total">
          <span>
            Order Total
          </span>

          <strong>
            ₹{order.total}
          </strong>
        </div>

        <Link
          to="/"
          className="hero-button confirmation-button"
        >
          Continue Shopping
        </Link>

      </div>
    </main>
  );
}

export default OrderConfirmation;
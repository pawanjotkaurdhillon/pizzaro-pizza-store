const Order = require("../models/Order");

const createOrder = async (req, res) => {
  try {
    const {
      customer,
      items,
      total,
    } = req.body;

    // Check required fields
    if (
      !customer ||
      !customer.name ||
      !customer.phone ||
      !customer.address ||
      !customer.city ||
      !customer.pincode
    ) {
      return res.status(400).json({
        message: "Please provide all delivery details",
      });
    }

    if (!items || items.length === 0) {
      return res.status(400).json({
        message: "Your cart is empty",
      });
    }

    if (total === undefined || total < 0) {
      return res.status(400).json({
        message: "Invalid order total",
      });
    }

    // Fake delivery time: 30 minutes from now
    const estimatedDeliveryTime = new Date(
      Date.now() + 30 * 60 * 1000
    );

    // Create order
    const order = await Order.create({
      customer,
      items,
      total,
      status: "confirmed",
      estimatedDeliveryTime,
    });

    res.status(201).json({
      message: "Order placed successfully!",
      order: {
        id: order._id,
        customer: order.customer,
        items: order.items,
        total: order.total,
        status: order.status,
        estimatedDeliveryTime:
          order.estimatedDeliveryTime,
        createdAt: order.createdAt,
      },
    });
  } catch (error) {
    console.error("Create order error:", error);

    res.status(500).json({
      message: "Unable to place order",
    });
  }
};

module.exports = {
  createOrder,
};
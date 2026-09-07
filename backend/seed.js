const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");

dotenv.config();

const products = [
  {
    name: "Margherita Classic",
    description: "Classic tomato sauce, mozzarella, and fresh basil.",
    price: 299,
    image: "/images/pizzas/margherita.jpg",
    category: "large-pizza",
  },
  {
    name: "Paneer Tikka Pizza",
    description: "Spiced paneer, onions, capsicum, and mozzarella.",
    price: 399,
    image: "/images/pizzas/paneer-tikka.jpg",
    category: "large-pizza",
  },
  {
    name: "Farmhouse Supreme",
    description: "Onions, capsicum, mushrooms, tomatoes, and cheese.",
    price: 429,
    image: "/images/pizzas/farmhouse.jpg",
    category: "large-pizza",
  },
  {
    name: "Veggie Delight",
    description: "Fresh vegetables with mozzarella and Italian herbs.",
    price: 379,
    image: "/images/pizzas/veggie-delight.jpg",
    category: "large-pizza",
  },
  {
    name: "Cheese Burst",
    description: "Extra cheesy pizza with a rich creamy cheese filling.",
    price: 449,
    image: "/images/pizzas/cheese-burst.jpg",
    category: "large-pizza",
  },
  {
    name: "Corn & Cheese",
    description: "Sweet corn, mozzarella, and a creamy cheese sauce.",
    price: 249,
    image: "/images/pizzas/corn-cheese.jpg",
    category: "regular-pizza",
  },
  {
    name: "Paneer Makhani",
    description: "Paneer, creamy makhani sauce, onions, and cheese.",
    price: 299,
    image: "/images/pizzas/paneer-makhani.jpg",
    category: "regular-pizza",
  },
  {
    name: "Mexican Veggie",
    description: "Jalapeños, capsicum, onions, corn, and Mexican spices.",
    price: 279,
    image: "/images/pizzas/mexican-veggie.jpg",
    category: "regular-pizza",
  },
  {
    name: "Classic Veg Pizza",
    description: "Tomatoes, onions, capsicum, and mozzarella.",
    price: 229,
    image: "/images/pizzas/classic-veg.jpg",
    category: "regular-pizza",
  },
  {
    name: "Coca-Cola",
    description: "Chilled Coca-Cola soft drink.",
    price: 79,
    image: "/images/beverages/coca-cola.jpg",
    category: "beverage",
  },
  {
    name: "Sprite",
    description: "Refreshing lemon-lime soft drink.",
    price: 79,
    image: "/images/beverages/sprite.jpg",
    category: "beverage",
  },
  {
    name: "Iced Tea",
    description: "Refreshing chilled lemon iced tea.",
    price: 99,
    image: "/images/beverages/iced-tea.jpg",
    category: "beverage",
  },
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("Products seeded successfully");

    await mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding products:", error);
    process.exit(1);
  }
};

seedProducts();
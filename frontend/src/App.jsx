import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import LargePizzas from "./pages/LargePizzas";
import RegularPizzas from "./pages/RegularPizzas";
import Beverages from "./pages/Beverages";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import About from "./pages/About";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/large-pizzas"
          element={<LargePizzas />}
        />

        <Route
          path="/regular-pizzas"
          element={<RegularPizzas />}
        />

        <Route
          path="/beverages"
          element={<Beverages />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />
        <Route path="/about" element={<About />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/checkout"
          element={<Checkout />}
        />
        <Route
  path="/search"
  element={<SearchResults />}
/>

        <Route
          path="/order-confirmation"
          element={<OrderConfirmation />}
        />
      </Routes>
       <Footer />
    </div>
  );
}

export default App;
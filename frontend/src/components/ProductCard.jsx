import { useCart } from "../context/useCart";

function ProductCard({ product }) {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    cartItems,
  } = useCart();

  const cartItem = cartItems.find(
    (item) => item._id === product._id
  );

  const quantity = cartItem?.quantity || 0;

  return (
    <article className="product-card">
      <div className="product-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <p>{product.description}</p>

        <div className="product-bottom">
          <span className="product-price">
            ₹{product.price}
          </span>

          {quantity === 0 ? (
            <button
              className="add-button"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
          ) : (
            <div className="card-quantity-controls">
              <button
                onClick={() =>
                  decreaseQuantity(product._id)
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  increaseQuantity(product._id)
                }
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
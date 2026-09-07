import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import API from "../api";
import ProductCard from "./ProductCard";

function ProductList({ category, title, description }) {
  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await API.get("/products", {
          params: category ? { category } : {},
        });

        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Unable to load products.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  const filteredProducts = products.filter((product) => {
    const search = searchTerm.toLowerCase().trim();

    if (!search) {
      return true;
    }

    return (
      product.name.toLowerCase().includes(search) ||
      product.description.toLowerCase().includes(search)
    );
  });

  return (
    <main className="listing-page">
      <section className="listing-header">
        <p>OUR MENU</p>

        <h1>
          {searchTerm
            ? `Search Results`
            : title}
        </h1>

        <span>
          {searchTerm
            ? `Showing results for "${searchTerm}"`
            : description}
        </span>
      </section>

      <section className="products-section">
        {loading && (
          <p className="status-message">
            Loading products...
          </p>
        )}

        {error && (
          <p className="status-message">
            {error}
          </p>
        )}

        {!loading &&
          !error &&
          filteredProducts.length === 0 && (
            <p className="status-message">
              No products found for "{searchTerm}".
            </p>
          )}

        {!loading &&
          !error &&
          filteredProducts.length > 0 && (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                />
              ))}
            </div>
          )}
      </section>
    </main>
  );
}

export default ProductList;
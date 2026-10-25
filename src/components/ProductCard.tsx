import "./ProductCard.css";
import type { Product } from "../types/Product";

interface ProductCardProps {
  product: Product;
  onViewDetails: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

function ProductCard({
  product,
  onViewDetails,
  onAddToCart,
}: ProductCardProps) {
  return (
    <article className="product-card">
      <button
        className="product-image-button"
        onClick={() => onViewDetails(product)}
        aria-label={`View ${product.name} details`}
      >
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />
      </button>

      <div className="product-card-info">
        <span className="product-category">{product.category}</span>

        <h3>{product.name}</h3>

        <p className="product-rating">
          <span>★</span> {product.rating.toFixed(1)}
        </p>

        <p className="product-price">
          ₱{product.price.toLocaleString("en-PH", {
            minimumFractionDigits: 2,
          })}
        </p>

        <p
          className={`product-stock ${
            product.stock < 5 ? "low-stock" : ""
          }`}
        >
          {product.stock < 5
            ? `Only ${product.stock} left!`
            : `${product.stock} available`}
        </p>

        <div className="product-card-actions">
          <button
            className="details-button"
            onClick={() => onViewDetails(product)}
          >
            View Details
          </button>

          <button
            className="add-cart-button"
            onClick={() => onAddToCart(product)}
            disabled={product.stock <= 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
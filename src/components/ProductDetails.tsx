
import { useState } from "react";
import type { Product } from "../types/Product";
import "./ProductDetails.css";

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

function ProductDetails({
  product,
  onClose,
  onAddToCart,
}: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const outOfStock = product.stock <= 0;
  const subtotal = product.price * quantity;

  function handleAddToCart() {
    if (outOfStock) return;

    // Add the selected quantity to the cart.
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }

    onClose();
  }

  return (
    <div className="product-details-overlay" onClick={onClose}>
      <div
        className="product-details-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          className="product-details-close"
          onClick={onClose}
          aria-label="Close product details"
        >
          ×
        </button>

        <div className="product-details-layout">
          <div className="product-details-gallery">
            <img
              className="product-details-main-image"
              src={product.images[selectedImage]}
              alt={product.name}
            />

            {product.images.length > 1 && (
              <div className="product-details-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    className={
                      selectedImage === index ? "selected" : ""
                    }
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View product image ${index + 1}`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="product-details-info">
            <span className="product-details-category">
              {product.category}
            </span>

            <h2>{product.name}</h2>

            <p className="product-details-rating">
              <span>★</span> {product.rating} / 5
            </p>

            <h3 className="product-details-price">
              ₱
              {product.price.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
              })}
            </h3>

            <p className="product-details-description">
              {product.description}
            </p>

            <p
              className={`product-details-stock ${
                product.stock < 5 ? "low-stock" : ""
              }`}
            >
              {outOfStock
                ? "Out of stock"
                : product.stock < 5
                  ? `Only ${product.stock} left in stock!`
                  : `${product.stock} available`}
            </p>

            <div className="product-details-quantity">
              <span>Quantity</span>

              <div className="quantity-controls">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  disabled={quantity <= 1 || outOfStock}
                  aria-label="Decrease quantity"
                >
                  −
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) =>
                      Math.min(product.stock, current + 1)
                    )
                  }
                  disabled={outOfStock || quantity >= product.stock}
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <div className="product-details-subtotal">
              <span>Subtotal</span>
              <strong>
                ₱
                {subtotal.toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </strong>
            </div>

            <button
              className="product-details-add-button"
              onClick={handleAddToCart}
              disabled={outOfStock}
            >
              {outOfStock ? "Out of Stock" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;


import { useState } from "react";
import type { FormEvent } from "react";
import type { Product } from "../types/Product";
import "./AddProductForm.css";

interface AddProductFormProps {
  onAddProduct: (product: Product) => void;
  onCancel: () => void;
}

function AddProductForm({ onAddProduct, onCancel }: AddProductFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [rating, setRating] = useState("5");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const productPrice = Number(price);
    const productStock = Number(stock);
    const productRating = Number(rating);

    if (
      !name.trim() ||
      !description.trim() ||
      !image.trim() ||
      !price.trim() ||
      !stock.trim()
    ) {
      setError("Please complete all fields.");
      return;
    }

    if (!Number.isFinite(productPrice) || productPrice <= 0) {
      setError("Price must be greater than zero.");
      return;
    }

    if (!Number.isInteger(productStock) || productStock < 0) {
      setError("Stock must be a whole number of zero or more.");
      return;
    }

    if (
      !Number.isFinite(productRating) ||
      productRating < 1 ||
      productRating > 5
    ) {
      setError("Rating must be between 1 and 5.");
      return;
    }

    const newProduct: Product = {
      id: Date.now(),
      name: name.trim(),
      category,
      description: description.trim(),
      price: productPrice,
      stock: productStock,
      rating: productRating,
      images: [image.trim()],
    };

    onAddProduct(newProduct);
  }

  return (
    <div className="add-product-overlay">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <div className="add-product-heading">
          <div>
            <span>JSHOP INVENTORY</span>
            <h2>Add New Product</h2>
          </div>
          <button
            type="button"
            className="add-product-close"
            onClick={onCancel}
            aria-label="Close form"
          >
            ×
          </button>
        </div>

        {error && <p className="add-product-error">{error}</p>}

        <label>
          Product Name
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Enter product name"
            required
          />
        </label>

        <label>
          Category
          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>Electronics</option>
            <option>Bags</option>
            <option>Beauty</option>
            <option>Clothing</option>
            <option>Daily</option>
            <option>School</option>
          </select>
        </label>

        <label>
          Product Image URL
          <input
            type="url"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            placeholder="https://example.com/product.png"
            required
          />
          <small>Use a direct link to an online image.</small>
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Describe the product"
            rows={3}
            required
          />
        </label>

        <div className="add-product-fields">
          <label>
            Price (₱)
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
              placeholder="199.00"
              required
            />
          </label>

          <label>
            Stock
            <input
              type="number"
              min="0"
              step="1"
              value={stock}
              onChange={(event) => setStock(event.target.value)}
              placeholder="10"
              required
            />
          </label>
        </div>

        <label>
          Rating
          <select
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          >
            <option value="5">5 stars</option>
            <option value="4">4 stars</option>
            <option value="3">3 stars</option>
            <option value="2">2 stars</option>
            <option value="1">1 star</option>
          </select>
        </label>

        <div className="add-product-actions">
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
          <button type="submit" className="save-product-button">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductForm;
    
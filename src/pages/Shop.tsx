
import { useState } from "react";


import type { Product } from "../types/Product";
import ProductCard from "../components/ProductCard";
import ProductDetails from "../components/ProductDetails";
import AddProductForm from "../components/AddProductForm";
import { useProducts } from "../context/ProductContext";
import "./Shop.css";

interface ShopProps {
  onAddToCart: (product: Product) => void;
}

function Shop({ onAddToCart }: ShopProps) {
 const { products: shopProducts, addProduct } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [search, setSearch] = useState("");

  const categories = [
    "All",
    ...Array.from(new Set(shopProducts.map((product) => product.category))),
  ];

  const filteredProducts = shopProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  function handleAddProduct(product: Product) {
  addProduct(product);
  setSelectedCategory("All");
  setSearch("");
  setShowAddForm(false);
}

  return (
    <main className="shop-page">
      <header className="shop-heading">
        <span>EXPLORE JSHOP</span>
        <h1>Our Product List</h1>
        <p>Find something lovely for your everyday needs.</p>
      </header>

      <section className="shop-toolbar">
        <div className="shop-filters">
          <label htmlFor="shop-category">Category</label>
          <select
            id="shop-category"
            value={selectedCategory}
            onChange={(event) => setSelectedCategory(event.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <input
            className="shop-search"
            type="search"
            placeholder="Search products..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            aria-label="Search products"
          />
        </div>

        <button
          className="shop-add-button"
          onClick={() => setShowAddForm(true)}
        >
          + Add New Product
        </button>
      </section>

      <p className="shop-result-count">
        Showing {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""}
      </p>

      {filteredProducts.length > 0 ? (
        <div className="shop-product-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={setSelectedProduct}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      ) : (
        <div className="shop-empty">
          <h2>No products found</h2>
          <p>Try another search or category.</p>
        </div>
      )}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={onAddToCart}
        />
      )}

      {showAddForm && (
        <AddProductForm
          onAddProduct={handleAddProduct}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </main>
  );
}

export default Shop;

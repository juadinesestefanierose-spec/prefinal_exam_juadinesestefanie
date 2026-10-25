
import HeroSlider from "../components/HeroSlider";
import ProductCard from "../components/ProductCard";
import { useProducts } from "../context/ProductContext";
import Shop from "./Shop";
import type { Product } from "../types/Product";
import "./Home.css";


interface HomeProps {
  onShopNow: () => void;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

function Home({ onShopNow, onAddToCart, onViewDetails }: HomeProps) {
 const { products } = useProducts();
const featuredProducts = products.slice(0, 5);

  return (
    <main className="home-page">
      <HeroSlider onShopNow={onShopNow} />

      <section className="home-intro">
        <span>PARA SAYO NGANEE</span>
        <h2>Everyday Finds, Lovely Discoveries</h2>
        <p>
          Explore electronics, accessories, beauty, clothing,
          daily essentials, and school supplies.
        </p>
      </section>

      <section className="home-featured">
        <div className="home-section-heading">
          <div>
            <span>HANDPICKED FOR YOU</span>
            <h2>Featured Products</h2>
          </div>

          <button onClick={onShopNow}>View All Products →</button>
        </div>

        <div className="home-product-grid">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      <Shop onAddToCart={onAddToCart} />
    </main>
  );
}

export default Home;

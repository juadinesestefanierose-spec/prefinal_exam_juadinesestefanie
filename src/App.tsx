
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import { CartProvider, useCart } from "./context/CartContext";
import type { Product } from "./types/Product";
import { ProductsProvider } from "./context/ProductContext";
import Login from "./pages/login";
import Profile from "./pages/Profile";
import { AuthProvider, useAuth } from "./context/AuthContext";
import "./App.css";

import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";


function AppContent() {
  const [page, setPage] = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const { isLoggedIn, logout } = useAuth();

const [customerName, setCustomerName] = useState("");
const [orderNumber, setOrderNumber] = useState("");

 const {
  addToCart,
  totalItems,
  clearCart,
} = useCart();

  return (
    <div className="app">
      <Navbar
        cartCount={totalItems}
        onOpenCart={() => setCartOpen(true)}
        onNavigate={(nextPage) => {
          setPage(nextPage.toLowerCase() === "my account" ? "profile" : nextPage.toLowerCase());
          setSelectedProduct(null);
        }}
      />

      {page === "home" && (
        <Home
          onShopNow={() => setPage("shop")}
          onAddToCart={addToCart}
          onViewDetails={setSelectedProduct}
        />
      )}

      {page === "shop" && (
        <Shop onAddToCart={addToCart} />
      )}

      {page === "profile" && (
  isLoggedIn ? (
    <Profile onLogout={() => {
      logout();
      setPage("profile");
    }} />
  ) : (
    <Login onSuccess={() => setPage("profile")} />
  )
)}

      {selectedProduct && (
        <ProductDetails
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onCheckout={() => {
          setCartOpen(false);
          setPage("checkout");
        }}
      />

      
{page === "checkout" && (
  <Checkout
    onBack={() => setPage("shop")}
    onPlaceOrder={(name) => {
      setCustomerName(name);
      setOrderNumber(
        `JSH-${Date.now().toString().slice(-8)}`
      );
      clearCart();
      setPage("order-success");
    }}
  />
)}

{page === "order-success" && (
  <OrderSuccess
    customerName={customerName}
    orderNumber={orderNumber}
    onContinueShopping={() => {
      setPage("home");
      setSelectedProduct(null);
    }}
  />
)}


      <footer className="app-footer">
        <p>© 2026 Jshop. Little Finds, Big Happiness.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProductsProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </ProductsProvider>
    </AuthProvider>
  );
}

export default App;
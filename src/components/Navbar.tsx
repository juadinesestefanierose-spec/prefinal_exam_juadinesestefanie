import "./Navbar.css";

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onNavigate: (page: string) => void;
}

function Navbar({ cartCount, onOpenCart, onNavigate }: NavbarProps) {
  return (
    <header className="jshop-navbar">
      <button
        className="jshop-brand"
        onClick={() => onNavigate("home")}
        aria-label="Go to Jshop home"
      >
        <img src="/src/assets/jlogo.png" alt="Jshop logo" />
        <span>Jshop<span className="brand-dot">.</span></span>
      </button>

      <nav className="jshop-nav-links">
        <button onClick={() => onNavigate("home")}>Home</button>
        <button onClick={() => onNavigate("shop")}>Shop</button>
        <button onClick={() => onNavigate("profile")}>My Account</button>
      </nav>

      <div className="jshop-nav-actions">
        <button className="jshop-cart-button" onClick={onOpenCart}>
          <span>Cart</span>
          <span className="jshop-cart-count">{cartCount}</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
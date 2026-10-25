import { useCart } from "../context/CartContext";
import "./Cart.css";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

function Cart({ isOpen, onClose, onCheckout }: CartProps) {
  const {
    items,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalItems,
    totalPrice,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="cart-overlay" onClick={onClose}>
      <aside className="cart-panel" onClick={(event) => event.stopPropagation()}>
        <div className="cart-header">
          <div>
            <h2>Your Cart</h2>
            <p>{totalItems} item(s)</p>
          </div>

          <button className="cart-close" onClick={onClose} aria-label="Close cart">
            ×
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span>♡</span>
            <h3>wala laman</h3>
            <p>Find something lovely at Jshop.</p>
            <button onClick={onClose}>Continue Shopping</button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <article className="cart-item" key={item.product.id}>
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                  />

                  <div className="cart-item-info">
                    <h3>{item.product.name}</h3>
                    <p className="cart-item-price">
                      ₱{item.product.price.toLocaleString("en-PH", {
                        minimumFractionDigits: 2,
                      })}
                    </p>

                    <div className="cart-quantity">
                      <button
                        onClick={() => decreaseQuantity(item.product.id)}
                        aria-label={`Decrease ${item.product.name} quantity`}
                      >
                        −
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() => increaseQuantity(item.product.id)}
                        disabled={item.quantity >= item.product.stock}
                        aria-label={`Increase ${item.product.name} quantity`}
                      >
                        +
                      </button>
                    </div>

                    <p className="cart-subtotal">
                      Subtotal: ₱{(item.product.price * item.quantity).toLocaleString(
                        "en-PH",
                        { minimumFractionDigits: 2 },
                      )}
                    </p>

                    <button
                      className="cart-remove"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      Remove
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <strong>
                  ₱{totalPrice.toLocaleString("en-PH", {
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </div>

              <button
                className="cart-checkout"
                onClick={onCheckout}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

export default Cart;
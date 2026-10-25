
import { useState } from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";

interface CheckoutProps {
  onBack: () => void;
  onPlaceOrder: (customerName: string) => void;
}

function Checkout({ onBack, onPlaceOrder }: CheckoutProps) {
  const { items, totalPrice } = useCart();

  const [customerName, setCustomerName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (items.length === 0) {
      alert("wala laman.");
      return;
    }

    onPlaceOrder(customerName);
  }

  return (
    <main className="checkout-page">
      <button className="checkout-back" onClick={onBack}>
        ← Back to Cart
      </button>

      <div className="checkout-container">
        <section className="checkout-form-section">
          <h1>Checkout</h1>
          <p>Complete your details to place your order.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="customerName">Full Name</label>
            <input
              id="customerName"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              required
            />

            <label htmlFor="checkoutEmail">Email Address</label>
            <input
              id="checkoutEmail"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />

            <label htmlFor="checkoutPhone">Phone Number</label>
            <input
              id="checkoutPhone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />

            <label htmlFor="checkoutAddress">Delivery Address</label>
            <textarea
              id="checkoutAddress"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
              rows={3}
            />

            <label htmlFor="paymentMethod">Payment Metod</label>
            <select
              id="paymentMethod"
              value={paymentMethod}
              onChange={(event) => setPaymentMethod(event.target.value)}
            >
              <option>Cash on Delivery</option>
              <option>GCash (dire tutuo)</option>
            </select>

            <button type="submit" className="checkout-place-order">
              Place Order
            </button>
          </form>
        </section>

        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          {items.map((item) => (
            <div className="checkout-summary-item" key={item.product.id}>
              <span>
                {item.product.name} × {item.quantity}
              </span>
              <strong>
                ₱{(item.product.price * item.quantity).toLocaleString("en-PH", {
                  minimumFractionDigits: 2,
                })}
              </strong>
            </div>
          ))}

          <div className="checkout-summary-total">
            <span>Total</span>
            <strong>
              ₱{totalPrice.toLocaleString("en-PH", {
                minimumFractionDigits: 2,
              })}
            </strong>
          </div>
        </aside>
      </div>
    </main>
  );
}

export default Checkout;

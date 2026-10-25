
import "./OrderSuccess.css";

interface OrderSuccessProps {
  customerName: string;
  orderNumber: string;
  onContinueShopping: () => void;
}

function OrderSuccess({
  customerName,
  orderNumber,
  onContinueShopping,
}: OrderSuccessProps) {
  return (
    <main className="order-success-page">
      <section className="order-success-card">
        <div className="order-success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p className="order-success-greeting">
          Thank you, {customerName}! Your Jshop order has been received.
        </p>

        <div className="order-success-number">
          <span>Order Number</span>
          <strong>{orderNumber}</strong>
        </div>

        <p className="order-success-message">
          Your order is now being prepared. You can keep your order number
          for reference.
        </p>

        <button
          className="order-success-button"
          onClick={onContinueShopping}
        >
          Continue Shopping
        </button>
      </section>
    </main>
  );
}

export default OrderSuccess;

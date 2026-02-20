import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";


const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  const itemsTotal = getTotalCartAmount(cart);
  const deliveryCharge = 49;
  const totalAmount = itemsTotal + deliveryCharge;

  const handlePayNow = () => {
    navigate("/payment");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>Checkout</h2>

        <div style={styles.row}>
          <span>Items ({cart.length})</span>
          <span>₹{itemsTotal}</span>
        </div>

        <div style={styles.row}>
          <span>Delivery Charge</span>
          <span>₹{deliveryCharge}</span>
        </div>

        <hr />

        <div style={{ ...styles.row, fontWeight: "600" }}>
          <span>Total Amount</span>
          <span>₹{totalAmount}</span>
        </div>

        <button style={styles.payBtn} onClick={handlePayNow}>
          Pay ₹{totalAmount}
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "70vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
  },
  card: {
    width: "360px",
    background: "#fff",
    padding: "24px",
    borderRadius: "10px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#1f2937",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
    color: "#374151",
  },
  payBtn: {
    width: "100%",
    marginTop: "20px",
    padding: "12px",
    background: "#1f5e4b",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Checkout;

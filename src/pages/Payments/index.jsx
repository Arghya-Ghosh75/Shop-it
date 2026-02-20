import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Payment = () => {
  const navigate = useNavigate();
  const { cartDispatch } = useCart();

  const handleSuccess = () => {
    // ✅ clear cart after successful payment
    cartDispatch({ type: "CLEAR_CART" });

    alert("Payment Successful ✅");
    navigate("/order-success");
  };

  const handleFailure = () => {
    alert("Payment Failed ❌");
    navigate("/checkout");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h2>Mock Payment Gateway</h2>
      <p>Select payment outcome</p>

      <button
        onClick={handleSuccess}
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "green",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Success
      </button>

      <button
        onClick={handleFailure}
        style={{
          margin: "10px",
          padding: "10px 20px",
          background: "red",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        Failure
      </button>
    </div>
  );
};

export default Payment;

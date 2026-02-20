import { useCart } from "../../context/CartContext";
import { getTotalCartAmount } from "../../utils/getTotalCartAmount";
import { useNavigate } from "react-router-dom";

export const PriceDetails = () => {
  const { cart, cartDispatch } = useCart();
  const navigate = useNavigate();

  const totalCartAmount = getTotalCartAmount(cart);
  const deliveryCharge = 49;

  const handlePlaceOrder = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Navigate to checkout/payment page
    navigate("/checkout");
  };

  return (
    <div className="price-card">
      <h3 className="price-title">Price Details</h3>

      <div className="price-row">
        <span>Price ({cart.length} items)</span>
        <span>₹{totalCartAmount}</span>
      </div>

      <div className="price-row">
        <span>Delivery Charge</span>
        <span>₹{deliveryCharge}</span>
      </div>

      <hr />

      <div className="price-total">
        <span>Total Amount</span>
        <span>₹{totalCartAmount + deliveryCharge}</span>
      </div>

      <button
        className="place-order-btn"
        onClick={handlePlaceOrder}
      >
        PLACE ORDER
      </button>
    </div>
  );
};

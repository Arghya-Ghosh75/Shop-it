import { useCart } from "../../context/CartContext";
import { HorizontalProductCard } from "../../components/HorizontalProductCards";
import { PriceDetails } from "../../components/PriceDetails";

const Cart = () => {
  const { cart } = useCart();

  return (
    <main className="cart-page pt-6">
      <h2 className="cart-title">My Cart</h2>

      {cart && cart.length > 0 ? (
        <div className="cart-container">
          
          {/* LEFT: CART ITEMS */}
          <div className="cart-list">
            {cart.map((product) => (
              <div key={product.id} className="cart-item">
                <HorizontalProductCard product={product} />
              </div>
            ))}
          </div>

          {/* RIGHT: PRICE DETAILS */}
          <div className="price-details-wrapper">
            <PriceDetails />
          </div>

        </div>
      ) : (
        <p className="empty-cart">Cart is Empty, Add Products</p>
      )}
    </main>
  );
};

export default Cart;

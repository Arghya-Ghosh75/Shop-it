import { useCart } from "../../context/CartContext";
export const HorizontalProductCard = ({ product }) => {

  const {cartDispatch}=useCart();

  const onRemoveClick=(product)=>{
    cartDispatch({
      type:"REMOVE_FROM_CART",
      payload:{id:product.id}
    })

  }
  return (
    <div className="cart-card">
      <div className="cart-image">
        <img src={product.images[0]} alt={product.title} />
      </div>

      <div className="cart-details">
        <h4>{product.title}</h4>
        <p className="price">Rs. {product.price}</p>

        <div className="cart-qty">
          <span>Quantity:</span>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>

        <div className="cart-actions">
          <button onClick={()=>onRemoveClick(product)} className="remove-btn">Remove from Cart</button>
          <button className="wishlist-btn-cart">Move to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";

const WishlistProductCard = ({ product }) => {
  const { cartDispatch } = useCart();
  const { wishlistDispatch } = useWishlist();

  const moveToCartHandler = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: { product },
    });

    wishlistDispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: { id: product.id },
    });
  };

  return (
    <div className="wishlist-card">
      <img src={product.images[0]} alt={product.title} />

      <div className="wishlist-info">
        <h3>{product.title}</h3>
        <p>Rs. {product.price}</p>

        <div className="wishlist-actions">
          <button className="btn-primary" onClick={moveToCartHandler}>
            Move to Cart
          </button>

          <button
            className="btn-outline"
            onClick={() =>
              wishlistDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: { id: product.id },
              })
            }
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default WishlistProductCard;

import { FaHeart, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import { FindProductInCart } from "../../utils/FindProductinCart";
import { useNavigate } from "react-router-dom";

export const ProductCards = ({ product }) => {
  const { cart, cartDispatch } = useCart();
  const { wishlist, wishlistDispatch } = useWishlist();
  const navigate = useNavigate();

  const isProductInCart = FindProductInCart(cart, product.id);
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const onCartClick = () => {
    if (isProductInCart) {
      navigate("/cart");
      return;
    }

    cartDispatch({
      type: "ADD_TO_CART",
      payload: { product },
    });

    navigate("/cart");
  };

  const onWishlistClick = () => {
    wishlistDispatch({
      type: "ADD_TO_WISHLIST",
      payload: { product },
    });
  };

  return (
    <div className="card card-vertical shadow">
      <div className="card-image-container">
        <img
          className="card-image"
          src={product?.images?.[0]}
          alt={product?.title}
        />
      </div>

      <div className="card-details">
        <div className="card-des">{product?.title}</div>

        <div className="card-description">
          <p className="card-price">Rs. {product?.price}</p>
        </div>

        <div className="cta-btn">
          {/* CART BUTTON */}
          <button
            onClick={onCartClick}
            className={`button cart-btn ${
              isProductInCart ? "btn-success" : "btn-primary"
            }`}
          >
            {isProductInCart ? (
              <>
                <FaCheckCircle /> Go to Cart
              </>
            ) : (
              <>
                <FaShoppingCart /> Add To Cart
              </>
            )}
          </button>

          {/* WISHLIST BUTTON */}
          <button
            onClick={onWishlistClick}
            className={`button wishlist-btn ${
              isInWishlist ? "btn-wishlist-active" : ""
            }`}
          >
            <FaHeart className="wishlist-icon" />
            {isInWishlist ? "Wishlisted" : "Add To Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

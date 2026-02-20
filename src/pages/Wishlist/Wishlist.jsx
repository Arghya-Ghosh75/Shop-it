import { useWishlist } from "../../context/WishlistContext";
import WishlistProductCard from "../../components/WishlistProductCards";


const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <main className="wishlist-page">
      <h2 className="page-title">My Wishlist ❤️</h2>

      {wishlist.length > 0 ? (
        <div className="wishlist-container">
          {wishlist.map((product) => (
            <WishlistProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      ) : (
        <p className="empty-text">Your wishlist is empty</p>
      )}
    </main>
  );
};

export default Wishlist;

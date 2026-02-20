import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlist-reducer";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const initialState = {
    wishlist: [],
  };

  const [{ wishlist }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );

  return (
    <WishlistContext.Provider value={{ wishlist, wishlistDispatch }}>
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };

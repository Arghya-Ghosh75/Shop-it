export const cartReducer = (state, { type, payload }) => {
  let updatedCart = [];

  switch (type) {
    case "ADD_TO_CART": {
      const product = payload.product;
      const existingItem = state.cart.find((item) => item.id === product.id);

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "REMOVE_FROM_CART": {
      updatedCart = state.cart.filter((item) => item.id !== payload.id);

      localStorage.setItem("cart", JSON.stringify(updatedCart));

      return {
        ...state,
        cart: updatedCart,
      };
    }

    case "CLEAR_CART": {
      localStorage.removeItem("cart");
      return {
        ...state,
        cart: [],
      };
    }

    default:
      return state;
  }
};

import { getFromLocalStorage } from "@/utils/local-storage";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getFromLocalStorage("cart") || [],
  },
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      const isProductInCart = state.cart.find(
        (product: any) => product.id === id
      );

      if (isProductInCart) {
        // alert('This product is already in your cart');
        toast.info("This product is already in your cart", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      // add data to local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    updateCart: (state, action) => {
      const id = action.payload.id;
      const isProductInCart = state.cart.find(
        (product: any) => product.id === id
      );

      const type = action.payload.typeAction;

      if (type === "plus") {
        isProductInCart.quantity += 1;
      } else if (type === "minus") {
        if (isProductInCart.quantity > 1) {
          isProductInCart.quantity -= 1;
        } else {
          toast.info("Product quantity cannot be less than 1", {
            position: "bottom-center",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
          });
        }
      }
      // add data to local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const id = action.payload.id;
      const isProductInCart = state.cart.find(
        (product: any) => product.id === id
      );

      if (isProductInCart) {
        state.cart = state.cart.filter((product: any) => product.id !== id);
        toast.success(`${isProductInCart.name} removed from cart`, {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.info("This product is not in your cart", {
          position: "bottom-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }

      // add data to local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, updateCart, removeFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

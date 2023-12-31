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
      const id = action.payload._id;
      const isProductInCart = state.cart.find(
        (product: any) => product._id === id
      );

      if (state.cart.length >= 2) {
        toast.info("You can only select 2 products", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        return;
      }

      if (isProductInCart) {
        // alert('This product is already in your cart');
        toast.info("This product is already in your cart", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        toast.success(`${action.payload.productName} added to cart`, {
          position: "top-center",
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
        (product: any) => product._id === id
      );

      const type = action.payload.typeAction;

      if (type === "plus") {
        isProductInCart.quantity += 1;
      } else if (type === "minus") {
        if (isProductInCart.quantity > 1) {
          isProductInCart.quantity -= 1;
        } else {
          toast.info("Product quantity cannot be less than 1", {
            position: "top-center",
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
        (product: any) => product._id === id
      );

      if (isProductInCart) {
        state.cart = state.cart.filter((product: any) => product._id !== id);
        toast.success(`${isProductInCart.productName} removed from cart`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.info("This product is not in your cart", {
          position: "top-center",
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

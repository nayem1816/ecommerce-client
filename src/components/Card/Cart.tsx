"use client";

import { addToCart } from "@/redux/features/cartSlice";
import React from "react";
import { useDispatch } from "react-redux";
import { Label, Radio } from "flowbite-react";

const Cart = ({ product }: any) => {
  const [size, setSize] = React.useState();
  const dispatch = useDispatch();

  const cartProduct = {
    _id: product._id,
    productName: product.productName,
    productImage: product.productImage,
    price: size || product.sizePrice[0].price,
    size: size === product.sizePrice[0].price ? "M" : "XL",
  };

  const handleAddToCart = () => {
    dispatch(addToCart(cartProduct));
  };

  const handleRadioChange = (e: any) => {
    setSize(e.target.value);
  };

  return (
    <div className="">
      <div className="flex  py-4  text-sm text-gray-600 items-center">
        <div className="flex-1 inline-flex items-center">
          <span className="text-secondary whitespace-nowrap mr-3 text-md">
            Size
          </span>
          <div className="cursor-pointer text-gray-400 ">
            <fieldset
              onChange={(e) => handleRadioChange(e)}
              className="flex max-w-md gap-3">
              <div className="flex items-center gap-2">
                <Radio
                  id="united-state"
                  name="countries"
                  value={product.sizePrice[0].price}
                  defaultChecked
                />
                <Label htmlFor="united-state">
                  M (${product.sizePrice[0].price})
                </Label>
              </div>
              <div className="flex items-center gap-2">
                <Radio
                  id="germany"
                  name="countries"
                  value={product.sizePrice[1].price}
                />
                <Label htmlFor="germany">
                  XL (${product.sizePrice[1].price})
                </Label>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 text-sm font-medium justify-end">
        <button
          onClick={() => handleAddToCart()}
          className={`transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-[#06B6D4] px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-[#06B6D9] ${
            product?.stock === 0 && "cursor-not-allowed"
          }`}>
          <span>Add Cart</span>
        </button>
      </div>
    </div>
  );
};

export default Cart;

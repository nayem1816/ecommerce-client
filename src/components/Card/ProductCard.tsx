import React from "react";

import Cart from "./Cart";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div className="container">
      <div className="max-w-md w-full shadow-lg rounded-xl py-6 px-4">
        <div className="flex flex-col">
          <div className="">
            <img
              src={product?.productImage?.url}
              alt="Just a flower"
              className="w-full h-48  object-cover  rounded-2xl"
            />
            <div className="flex-auto justify-evenly mt-2">
              <div className="flex flex-wrap ">
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer text-gray-600 hover:text-purple-500 truncate ">
                    {product?.productName}
                  </h2>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xl text-black font-semibold mt-1">
                  ${product?.sizePrice[0].price}
                </div>
                <div className="">
                  Left in stock:
                  <span className="text-secondary"> {product?.stock}</span>
                </div>
              </div>

              <Cart product={product} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

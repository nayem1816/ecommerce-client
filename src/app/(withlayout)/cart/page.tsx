"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  updateCart,
} from "../../../redux/features/cartSlice";
import Link from "next/link";

type Cart = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const CartPage = () => {
  const [data, setData] = useState<Cart[]>([]);
  const cartData = useSelector(
    (state: any) => state.cartReducer.cart
  ) as Cart[];

  useEffect(() => {
    setData(cartData);
  }, [cartData]);

  const dispatch = useDispatch();

  const totalQuantity = data.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = data.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlusBtn = (id: number) => {
    dispatch(updateCart({ typeAction: "plus", id }));
  };
  const handleMinusBtn = (id: number) => {
    dispatch(updateCart({ typeAction: "minus", id }));
  };
  const handleRemoveBtn = (id: number) => {
    dispatch(removeFromCart({ id }));
  };
  const handleClearBtn = () => {
    dispatch(clearCart());
  };

  const handleCheckoutBtn = () => {
    console.log("Checkout");
  };
  return (
    <div>
      <div className="container p-8 mx-auto mt-12 bg-white">
        {data.length > 0 ? (
          <div className="w-full overflow-x-auto">
            <div className="my-2">
              <h3 className="text-xl font-bold tracking-wider">
                Shopping Cart {data.length} item
              </h3>
            </div>
            <table className="w-full shadow-inner">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Product
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">Qty</th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Price
                  </th>
                  <th className="px-6 py-3 font-bold whitespace-nowrap">
                    Remove
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item.id}>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      {item.name}
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <div>
                        <button
                          onClick={() => handleMinusBtn(item.id)}
                          className="px-2 py-0 shadow">
                          -
                        </button>
                        <button className="w-12 text-center bg-gray-100 outline-none cursor-text">
                          {item.quantity}
                        </button>
                        <button
                          onClick={() => handlePlusBtn(item.id)}
                          className="px-2 py-0 shadow">
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      ${item.price * item.quantity}
                    </td>
                    <td className="p-4 px-6 text-center whitespace-nowrap">
                      <button
                        onClick={() => handleRemoveBtn(item.id)}
                        className="px-2 py-0 text-red-100 bg-red-600 rounded">
                        x
                      </button>
                    </td>
                  </tr>
                ))}

                <tr>
                  <td className="p-4 px-6 text-center whitespace-nowrap"></td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    <div className="font-bold">Total Qty - {totalQuantity}</div>
                  </td>
                  <td className="p-4 px-6 font-extrabold text-center whitespace-nowrap">
                    Total - ${totalPrice}
                  </td>
                  <td className="p-4 px-6 text-center whitespace-nowrap">
                    <button
                      onClick={() => handleClearBtn()}
                      className="px-4 py-1 text-red-600 bg-red-100">
                      Clear All
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex justify-end mt-4 space-x-2">
              <Link href="/allProducts">
                <button className="px-6 py-3 text-sm text-gray-800 bg-gray-200 hover:bg-gray-400">
                  Continue Shopping
                </button>
              </Link>
              <button
                onClick={() => handleCheckoutBtn()}
                className="px-6 py-3 text-sm text-gray-800 bg-gray-200 hover:bg-gray-400">
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="flex justify-center">
            <h3 className="text-xl font-bold tracking-wider">
              Your cart is empty
            </h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;

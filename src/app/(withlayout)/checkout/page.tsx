"use client";

import CheckoutForm from "@/components/Checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const CheckoutPage = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [address, setAddress] = React.useState("");

  const stripePromise = loadStripe(
    "pk_test_51IeGAtHCo9A7jy27XPZM9atry5oeYI1LTwoeWBTN27159qurEdhs2LWdPPdZnmqP5W2j9SrXoZpkahRHYslpplrb001U80gqHq"
  );

  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-3xl font-semibold tracking-wide mt-6 text-center mb-12">
        Checkout
      </h1>
      <div className="grid grid-cols-2">
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Shipping Details</h2>
          </div>
          <div className="mt-4">
            <div className="">
              <div className="mb-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your Name*
                </label>
                <input
                  type="name"
                  id="name"
                  onChange={(e) => setName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your Email*
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@gmail.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your Phone*
                </label>
                <input
                  type="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="01841181011"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mb-2">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Your Address*
                </label>
                <input
                  type="textarea"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-2/3 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Dhaka, Bangladesh"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-5">Payment Details</h2>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              name={name}
              email={email}
              phone={phone}
              address={address}
            />
          </Elements>
          <div className="hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

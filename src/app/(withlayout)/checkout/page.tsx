"use client";

import CheckoutForm from "@/components/Checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

const CheckoutPage = () => {
  const stripePromise = loadStripe(
    "pk_test_51IeGAtHCo9A7jy27XPZM9atry5oeYI1LTwoeWBTN27159qurEdhs2LWdPPdZnmqP5W2j9SrXoZpkahRHYslpplrb001U80gqHq"
  );
  return (
    <div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        <div className="hidden"></div>
      </div>
    </div>
  );
};

export default CheckoutPage;

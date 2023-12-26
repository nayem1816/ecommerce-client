import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid justify-center gap-5">
        <div className="bg-white rounded-full h-24 w-24 flex items-center justify-center shadow-md mx-auto">
          <i className="text-green-500 text-6xl text-center">✓</i>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-12">
          <h1 className="text-green-600 font-semibold text-4xl mb-4">
            Success
          </h1>
          <p className="text-gray-700 text-lg">
            Your order has been placed successfully. We will contact you soon.
          </p>
          <Link href="/">
            <button className="btn btn-primary mt-8">Go to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

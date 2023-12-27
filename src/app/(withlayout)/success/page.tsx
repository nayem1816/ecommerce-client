import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className="mt-10">
      <div className="grid justify-center gap-5">
        <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center shadow-md mx-auto">
          <i className="text-[#06B6D4] text-4xl text-center">✓</i>
        </div>
        <div className="card bg-white shadow-md rounded-lg p-12">
          <h1 className="text-[#06B6D4] font-semibold text-4xl mb-4">
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

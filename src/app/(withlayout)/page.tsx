import ProductCard from "@/components/Card/ProductCard";
import React from "react";

const HomePage = async () => {
  const res = await fetch("http://localhost:4100/api/v1/product");

  const data = await res.json();

  return (
    <div className="container mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {data?.data?.map((item: any) => {
          return <ProductCard key={item?._id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;

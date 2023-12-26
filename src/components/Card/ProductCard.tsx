import React from "react";
import { Label, Radio } from "flowbite-react";

const ProductCard = () => {
  return (
    <div className="container">
      <div className="max-w-md w-full shadow-lg rounded-xl py-6 px-4">
        <div className="flex flex-col">
          <div className="">
            <img
              src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80"
              alt="Just a flower"
              className="w-full h-72  object-cover  rounded-2xl"
            />
            <div className="flex-auto justify-evenly mt-2">
              <div className="flex flex-wrap ">
                <div className="flex items-center w-full justify-between min-w-0 ">
                  <h2 className="text-lg mr-auto cursor-pointer text-gray-600 hover:text-purple-500 truncate ">
                    Lorem ipsum is placeholder text commonly used in the graphic
                  </h2>
                </div>
              </div>
              <div className="text-xl text-black font-semibold mt-1">
                $50.00
              </div>
              <div className="flex  py-4  text-sm text-gray-600 items-center">
                <div className="flex-1 inline-flex items-center">
                  <span className="text-secondary whitespace-nowrap mr-3 text-xl">
                    Size
                  </span>
                  <div className="cursor-pointer text-gray-400 ">
                    <fieldset className="flex max-w-md gap-6">
                      <div className="flex items-center gap-2">
                        <Radio
                          id="united-state"
                          name="countries"
                          value="USA"
                          defaultChecked
                        />
                        <Label htmlFor="united-state">M ($50)</Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Radio id="germany" name="countries" value="Germany" />
                        <Label htmlFor="germany">XL ($90)</Label>
                      </div>
                    </fieldset>
                  </div>
                </div>
                <div className="">
                  Left in stock:
                  <span className="text-secondary"> 10</span>
                </div>
              </div>
              <div className="flex space-x-2 text-sm font-medium justify-end">
                <button className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-[#FF6347] px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-[#FF6360] ">
                  <span>Add Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

/* eslint-disable no-unused-vars */
import React from "react";
import { categories } from "../data/data";

export const Categories = () => {
  return (
    <div className="max-w-[1320px] m-auto px-4 py-4 ">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2">
        {categories.map((item) => (
          <div
            key={item.id}
            className="p4 flex justify-center items-center hover:scale-105 duration-300"
          >
            <img src={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { mealData } from "../data/data";
import { ArrowSmRightIcon } from "@heroicons/react/outline";

export const Meal = () => {
  const [foods, setFoods] = useState(mealData);

  const filterCat = (category) => {
    setFoods(
      mealData.filter((item) => {
        return item.category == category;
      })
    );
  };

  return (
    <div className="max-w-[1320px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center py-6">
        <div className="flex justify-center md:justify-center">
          <button
            className="m-1 rounded-full border-orange-700 text-amber-300 bg-orange-700 hover:bg-white hover:border-orange-700 "
            onClick={() => setFoods(mealData)}
          >
            All
          </button>
          <button
            className="m-1 rounded-full border-orange-700 text-amber-300  bg-orange-700 hover:bg-white hover:border-orange-700 hover:text-orange-700"
            onClick={() => filterCat("pizza")}
          >
            Pizza
          </button>
          <button
            className="m-1 rounded-full border-orange-700 text-amber-300  bg-orange-700 hover:bg-white hover:border-orange-700 hover:text-orange-700"
            onClick={() => filterCat("chicken")}
          >
            Chicken
          </button>
          <button
            className="m-1 rounded-full border-orange-700 text-amber-300  bg-orange-700 hover:bg-white hover:border-orange-700 hover:text-orange-700"
            onClick={() => filterCat("Salad")}
          >
            Salad
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {foods.map((i) => (
          <div
            className="border-name hover:scale-105 duration-300"
            key={i.id * Math.random()}
          >
            <img
              src={i.image}
              alt=""
              className="w-full h-[200px] object-cover rounded-lg cursor-pointer"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-bold -mt-2">{i.name}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-2 font-bold px-2 border-8">
                {i.price}
              </p>
            </div>
            <div className="px-2 py-4 -mt-10">
              <p className="flex  items-center text-indigo-600 -mt-2 cursor-pointer">
                View More <ArrowSmRightIcon className="w-5 ml-2" />{" "}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

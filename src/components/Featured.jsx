/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export const Featured = () => {
  const sliders = [
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg",
    },
    {
      url: "https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg",
    },
  ];

  const [currIndex, setCurrIndex] = useState(0);

  const handleClick = (dir) => {
    setCurrIndex(
      (prev) =>
        (prev =
          dir == "left" ? (prev > 0 ? prev - 1 : 2) : prev < 2 ? prev + 1 : 0)
    );
  };

  const moveToSlide = (index) => {
    setCurrIndex(index);
  };

  return (
    <div className="max-w-[1520px] h-[500px] w-full py-4 px-4 relative group">
      <div
        className="w-full h-full rounded-2xl bg-center duration-500 bg-cover"
        style={{ backgroundImage: `url(${sliders[currIndex].url})` }}
      >
        (
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactLeft size={25} onClick={() => handleClick("left")} />
        </div>
        ) (
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer">
          <BsChevronCompactRight
            size={25}
            onClick={() => handleClick("right")}
          />
        </div>
        )
      </div>
      <div className="flex top-4 justify-center py-2">
        {sliders.map((slider, slideIndex) => (
          <div
            className="text-2xl cursor-pointer"
            key={slideIndex}
            onClick={() => moveToSlide(slideIndex)}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
};

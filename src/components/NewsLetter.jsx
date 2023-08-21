/* eslint-disable no-unused-vars */
import React from "react";

export const NewsLetter = () => {
  return (
    <div className="max-w-[1320px] m-auto text-white px-4 bg-[#24262b]">
      <div className="mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4 ">
          <h1>Need advice on how to improve your flow</h1>
          <p>Sign up to join our newsletter and stay up do date</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p3 flex w-full rounded-md text-black"
              type="email"
              name=""
              id=""
              placeholder="email"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 border-none">
              Notify me
            </button>
          </div>
          <p>
            we are concerned about the security of your data, Read
            <span className="text-[#00df9a] cursor-pointer">
              {" "}
              Privacy Policy
            </span>
          </p>
        </div>
        <hr className="my-8 bg-gray-700 border-1" />
      </div>
    </div>
  );
};

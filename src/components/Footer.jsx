/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="max-w-[1320px] m-auto px-4 py-2 bg-[#24262b]">
      <div className="py-16 px-4 grid lg:grid-cols-1 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500">YumEats</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea quia
            tempora molestiae facilis, laudantium unde voluptatum eveniet. Et
            vel libero, molestias doloremque, tempora accusamus architecto
            assumenda repellendus nisi qui maxime.
          </p>
          <div className="flex justify-between md:w-[75%] my-6">
            <FaFacebookSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 tsxt-sm">United Kingdom</li>
              <li className="py-2 tsxt-sm">USA</li>
              <li className="py-2 tsxt-sm">Canada</li>
              <li className="py-2 tsxt-sm">Australia</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 tsxt-sm">United Kingdom</li>
              <li className="py-2 tsxt-sm">USA</li>
              <li className="py-2 tsxt-sm">Canada</li>
              <li className="py-2 tsxt-sm">Australia</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 tsxt-sm">United Kingdom</li>
              <li className="py-2 tsxt-sm">USA</li>
              <li className="py-2 tsxt-sm">Canada</li>
              <li className="py-2 tsxt-sm">Australia</li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <h6 className="font-medium text-[#9b9b9b]">Location</h6>
            <ul>
              <li className="py-2 tsxt-sm">United Kingdom</li>
              <li className="py-2 tsxt-sm">USA</li>
              <li className="py-2 tsxt-sm">Canada</li>
              <li className="py-2 tsxt-sm">Australia</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

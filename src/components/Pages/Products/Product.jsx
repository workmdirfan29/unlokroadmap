import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Product = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="max-w-sm p-6 bg-white rounded-lg shadow-md">
        <img
          src="https://via.placeholder.com/300" // Replace with your image URL
          alt="Product"
          className="object-cover w-full h-48 rounded-t-lg"
        />
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Unlok Thmify
        </h2>
        <p className="mt-2 text-gray-600">
          This web app allows users to create and manage their content
          effortlessly.
        </p>
        <p className="mt-2 text-gray-600">
          Explore various features and benefits that enhance productivity and
          collaboration.
        </p>
        <div className="flex items-center justify-center mt-4">
          <button className="flex items-center px-4 py-2 text-white transition duration-200 bg-purple-600 rounded hover:bg-purple-700">
            <a
              href="https://unlokthmify.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              Visit Now <AiOutlineArrowRight className="ml-1" />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;

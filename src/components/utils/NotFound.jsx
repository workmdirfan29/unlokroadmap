import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center text-white bg-black-500">
      <div className="relative">
        <h1 className="p-6 font-bold bg-center bg-cover rounded-md text-9xl">
          Oops!
        </h1>
      </div>
      <p className="mt-4 text-lg">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 mt-6 text-white transition bg-orange-500 rounded hover:bg-orange-700"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;

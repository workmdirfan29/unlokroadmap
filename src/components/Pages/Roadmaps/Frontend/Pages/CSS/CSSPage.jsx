import React from "react";
import Spinner from "../Html/Spinner/Spinner";

const CSSPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          CSS <span className="text-purple-700">Roadmap</span>
        </h1>
        <div className="flex items-center gap-4 ">
          <p>Working</p>
          <div className="pt-4">
            <Spinner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CSSPage;

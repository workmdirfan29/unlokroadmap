import React, { useState } from "react";
import GuideLeft from "./GuideBox/GuideLeft";
import GuideRight from "./GuideBox/GuideRight";

const Guide = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar, hidden on small devices */}
      <div
        className={`fixed left-0 top-16 w-[25vw] h-screen border-r-2 border-neutral-900 z-10 pl-10 ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <GuideLeft
          isSidebarOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
        />
      </div>

      <div
        id="right"
        className={`w-full p-4 min-h-screen transition-all duration-300 ${
          isSidebarOpen ? "ml-[25vw]" : "ml-0"
        } md:ml-[25vw]`}
      >
        {/* Toggle button for mobile */}
        <button className="md:hidden" onClick={toggleSidebar}>
          {isSidebarOpen ? "" : ""}
        </button>
        <GuideRight />
      </div>
    </div>
  );
};

export default Guide;

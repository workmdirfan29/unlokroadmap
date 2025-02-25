import { Link } from "react-router-dom";

const techStacks = [
  { name: "Frontend", url: "frontend", new: false },
  { name: "Backend", url: "backend", new: true },
  { name: "Fullstack", url: "fullstack", comingSoon: true },
  { name: "DevOps", url: "devops", comingSoon: true },
  { name: "Data Analyst", url: "data-analyst", comingSoon: true },
];

const TechStack = () => {
  return (
    <div id="techstacks" className="flex flex-wrap gap-2 py-6">
      {techStacks.map((stack) => (
        <div key={stack.name} className="relative w-full sm:w-[220px]">
          <Link
            to={stack.url}
            className="flex justify-start items-center px-2 py-1.5 min-h-[50px] text-start w-full transition-all text-sm duration-300 ease-in-out border rounded-lg shadow-lg border-slate-800 hover:bg-gray-950 hover:text-white hover:shadow-xl"
          >
            {stack.name}
          </Link>

          {/* New or Coming Soon Badge */}
          {stack.new && (
            <div className="absolute top-0 right-0 flex items-center px-2 py-1 space-x-1 text-xs font-bold">
              {/* Blinking purple dot */}
              <span className="relative flex items-center justify-center">
                <span className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"></span>{" "}
                {/* Blinking outer circle */}
                <span className="relative w-1.5 h-1.5 bg-purple-500 rounded-full"></span>{" "}
                {/* Fixed purple dot */}
              </span>
              <span className="text-slate-100">New</span>
            </div>
          )}

          {stack.comingSoon && (
            <div className="absolute top-0 right-0 flex items-center px-2 py-0.5 space-x-1 text-[14px] font-medium">
              {/* Blinking yellow dot */}
              <span className="relative flex items-center justify-center">
                <span className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full animate-ping"></span>{" "}
                {/* Blinking outer circle */}
                <span className="relative w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>{" "}
                {/* Fixed yellow dot */}
              </span>
              <span className="text-slate-100">Coming Soon</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TechStack;

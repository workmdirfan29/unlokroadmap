import { Link } from "react-router-dom";
import { TiArrowLeft, TiArrowRight } from "react-icons/ti";

const NavigationButton = ({ path, title, direction = "right" }) => {
  return (
    <Link to={path}>
      <button className="relative inline-flex items-center justify-center h-10 px-5 overflow-hidden font-medium border rounded-md border-slate-200 group text-neutral-950 bg-neutral-100">
        {direction === "left" && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-6 group-hover:translate-x-0 group-hover:pr-2 group-hover:opacity-100">
            <TiArrowLeft size={25} />
          </div>
        )}
        <span>Learn {title}</span>
        {direction === "right" && (
          <div className="w-0 translate-x-[100%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-0 group-hover:pl-1 group-hover:opacity-100">
            <TiArrowRight size={25} />
          </div>
        )}
      </button>
    </Link>
  );
};

export default NavigationButton;

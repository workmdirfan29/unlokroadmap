import React from "react";

const HtmlPage = () => {
  return (
    <div className="flex flex-col p-2 text-gray-100 rounded-lg shadow-lg">
      <div id="headings">
        <h1 className="mb-4 text-2xl font-semibold">
          Html <span className="text-purple-700">Roadmap</span>
        </h1>
        <p className="mb-4 text-slate-200">
          HTML ( HyperText Markup Language ) is the standard language used to
          create and structure content on the web.
        </p>
        <hr className="mb-2 opacity-20" />
        <p className="mb-4 text-slate-200">
          Here's a comprehensive 10-day HTML roadmap, complete with resources to
          help you learn effectively:
        </p>
      </div>

      <div id="day-01">
        <h3 className="mb-2 text-xl font-semibold">
          Day 1 : Introduction to HTML
        </h3>
        <ul className="mb-1 list-disc md:ml-5">
          <li className="mb-1.5">
            <b>Learn the Basics:</b>{" "}
            <span>
              Understand what HTML is and its role in web development.
            </span>
          </li>
          <li className="mb-1.5">
            <b>Set Up Your Environment:</b>{" "}
            <span>Install a text editor (like VSCode or Sublime Text).</span>
          </li>
          <li className="mb-1.5">
            <b>Basic Structure:</b>{" "}
            <span>Learn about the basic HTML document structure:</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HtmlPage;

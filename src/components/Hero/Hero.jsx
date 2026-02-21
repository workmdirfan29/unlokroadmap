import React from "react";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full mt-20 px-6 py-16 bg-[#0d0d0d] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Why <span className="text-[#FF9524]">Developer Roadmap</span>?
          </h2>
          <p className="mb-12 text-lg text-gray-400 md:text-xl">
            We simplify the path to becoming a modern developer by offering
            curated, beginner-to-pro level roadmaps designed for real-world
            skills.
          </p>

          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">
                Step-by-Step Guides
              </h3>
              <p className="text-gray-300">
                Follow structured paths tailored to frontend, backend, and
                DevOps roles — no fluff, just what matters.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">
                Curated Resources
              </h3>
              <p className="text-gray-300">
                Save time with handpicked resources, tools, and tutorials so you
                can learn efficiently and effectively.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">
                Built by Developers
              </h3>
              <p className="text-gray-300">
                Created by professionals who understand the journey — we've been
                in your shoes and know what works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 bg-[#141414] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">
            Why <span className="text-[#FF9524]">Choose Us?</span>
          </h2>
          <p className="mb-12 text-lg text-gray-400 md:text-xl">
            Get access to features that set us apart from other platforms. We
            provide real value that accelerates your learning journey.
          </p>

          <div className="grid grid-cols-1 gap-8 text-left md:grid-cols-3">
            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">
                Comprehensive Roadmaps
              </h3>
              <p className="text-gray-300">
                Not just tutorials, but detailed plans and blueprints for your
                career as a developer, ensuring you stay on track.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">
                Community Support
              </h3>
              <p className="text-gray-300">
                Join a thriving community of learners and professionals. Ask
                questions, share knowledge, and grow together.
              </p>
            </div>

            <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
              <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">
                Real-World Projects
              </h3>
              <p className="text-gray-300">
                Practice your skills on real-world projects and get feedback
                from industry experts to sharpen your abilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

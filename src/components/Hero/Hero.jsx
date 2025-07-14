import React from 'react';

const Hero = () => {
  return (
    <section className="w-full mt-20 px-6 py-16 bg-[#0d0d0d] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Why <span className="text-[#FF9524]">Developer Roadmap</span>?
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-12">
          We simplify the path to becoming a modern developer by offering curated, beginner-to-pro level roadmaps designed for real-world skills.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">Step-by-Step Guides</h3>
            <p className="text-gray-300">
              Follow structured paths tailored to frontend, backend, and DevOps roles — no fluff, just what matters.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">Curated Resources</h3>
            <p className="text-gray-300">
              Save time with handpicked resources, tools, and tutorials so you can learn efficiently and effectively.
            </p>
          </div>

          <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-500/30 transition duration-300">
            <h3 className="text-xl font-semibold mb-2 text-[#FF9524]">Built by Developers</h3>
            <p className="text-gray-300">
              Created by professionals who understand the journey — we've been in your shoes and know what works.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

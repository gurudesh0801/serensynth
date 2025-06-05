import React from "react";

export default function WhoWeAre() {
  return (
    <div className="text-[#0C1B3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1B3A] to-[#1C2C4A] text-white text-center px-6 py-34">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Architects of Tomorrow's Brands
        </h1>
        <div className="border-b-2 w-70 mx-auto border-white mb-6"></div>
        <p className="max-w-4xl mx-auto text-lg font-light leading-relaxed">
          At Serenynth Labs Pvt Ltd, we don't just consult;{" "}
          <span className="font-bold">
            we build, operate, and accelerate brands for the future
          </span>
          . Our philosophy transcends traditional advisory roles. We believe in
          proving our strategies in the crucible of the real world. We actively
          create, launch, and scale our own in-house brands, meticulously
          testing and refining our approaches, before bringing these proven
          solutions to our clients. This hands-on, results-driven methodology
          ensures we deliver solutions that actually work, not just theoretical
          presentations.
        </p>
      </section>

      {/* Why We Exist */}
      <section className="text-center px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-semibold mb-2">
          Our Unique Approach: Real-World Proven Strategies
        </h2>
        <p className="text-xl font-medium text-blue-700 mb-4">
          The market is full of consultants who talk.{" "}
          <span className="underline">We execute.</span>
        </p>
        <p className="max-w-4xl mx-auto text-gray-700">
          What sets us apart is our commitment to real-world validation. We are
          a living laboratory of brand growth. By developing and nurturing our
          own ventures, we gain unparalleled insights into market dynamics,
          consumer behavior, and the most effective growth levers. This direct
          experience allows us to offer our partners not just advice, but
          battle-tested, data-backed strategies that have already driven
          tangible success.
        </p>
      </section>

      {/* What We Stand For */}
      <section className="px-6 py-16 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12">
          What We Stand For
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: "Growth with Clarity",
              desc: "We create actionable growth plans — no jargon, just strategy and execution that works.",
            },
            {
              title: "Executional Excellence",
              desc: "From fulfillment to leadership support, we streamline and optimize business operations with precision.",
            },
            {
              title: "Innovation at Core",
              desc: "We adopt emerging tools and stay aligned with market shifts to keep you ahead of the curve.",
            },
            {
              title: "True Partnership",
              desc: "We embed ourselves as an extension of your team, offering hands-on solutions and accountability.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Identity */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Identity
        </h2>
        <p className="max-w-4xl mx-auto text-gray-700">
          Serensynth is where ideas meet action. Whether you’re scaling a real
          estate project, launching an EdTech platform, or expanding a D2C
          brand, we step in as your execution partner — offering business
          functions as a service across six pillars:
        </p>
        {/* Placeholder for icons or columns */}
        <div className="mt-12 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(4)].map((_, idx) => (
              <div key={idx} className="bg-gray-100 h-40 w-60 rounded-xl" />
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="px-6 py-16 text-center bg-gray-50">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">What We Do</h2>
        <p className="text-gray-700 mb-10 max-w-3xl mx-auto">
          We offer a suite of specialized services designed to simplify scaling,
          including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
          {[
            "Asset Under Management",
            "Consultancy",
            "Virtual C-Suite Services",
            "eCommerce Acceleration",
            "SkillSage Platform",
            "Digital & Tech Solutions",
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#F5F6FF] px-6 py-3 rounded-lg shadow hover:shadow-md transition text-sm font-medium text-center"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Who We Serve */}
      <section className="px-6 py-16 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">
          Who We Serve
        </h2>
        <p className="text-gray-700 mb-10 max-w-xl mx-auto border-b-2 border-[#D3AD86] pb-4">
          We bring specialized expertise to diverse industries, tailoring our
          digital marketing strategies for maximum impact.
        </p>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                title: "Real Estate Developers & Agencies",
                desc: "Looking to automate lead generation, streamline sales ops, and close deals faster.",
              },
              {
                title: "Platform Expertise",
                desc: "In need of student funnel optimization, backend systems, and digital growth strategies.",
              },
              {
                title: "D2C & FMCG Brands",
                desc: "Launching or scaling online stores, logistics, or product visibility across platforms.",
              },
              {
                title: "Startups & Entrepreneurs",
                desc: "Seeking a lean but effective backend to power growth.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow transition"
              >
                <h3 className="text-lg text-left font-semibold text-blue-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-left">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

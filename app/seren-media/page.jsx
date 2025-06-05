"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-white text-[#0C1B3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#334473] to-[#05143D] text-white py-46 px-6 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your Digital Growth Partner
            </h1>
            <p className="mb-6 text-gray-300">
              At Seren Media, we don’t just run ads — we build brands,
              accelerate revenue, and craft full-funnel marketing strategies
              that convert clicks into loyal customers.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-[#0C1B3A] px-6 py-2 rounded shadow font-medium hover:bg-gray-100">
                Get Started
              </button>
              <button className="border border-white px-6 py-2 rounded hover:bg-white hover:text-[#0C1B3A] transition">
                Our Services →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-[#0C1B3A] w-100 ml-5 rounded-lg p-6 shadow-md"
          >
            <p className="font-semibold mb-2">Ready to grow online?</p>
            <p className="text-sm mb-4 text-gray-600">
              Get a free digital marketing audit and strategy call.
            </p>
            <input
              type="email"
              placeholder="Your Business email"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <button className="bg-[#0C1B3A] text-white w-full py-2 rounded hover:opacity-90">
              Book My Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="px-6 md:px-20 py-20 bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Our Core Services</h2>
          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            From Meta and Google ads to marketplace management, CRM
            integrations, and SEO — we offer end-to-end performance-driven
            marketing solutions tailored for modern brands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Performance Marketing",
              description:
                "We plan, execute, and scale paid campaigns that maximize ROI and drive real business growth — not just impressions.",
              points: [
                "Meta (Facebook & Instagram) Ads",
                "Google Search, Display & Shopping Ads",
                "Retargeting & Conversion Campaigns",
                "A/B Testing & Funnel Optimization",
              ],
            },
            {
              title: "SEO & Organic Growth",
              description:
                "We improve your search rankings and website visibility so your customers find you before they find your competitors.",
              points: [
                "On-Page & Technical SEO",
                "Keyword Research & Optimization",
                "Local SEO & Google Business Profile",
                "Blog Strategy & Backlink Building",
              ],
            },
            {
              title: "Lead Generation & CRM",
              description:
                "Generate high-quality leads and automate your customer journey with powerful CRM and marketing integrations.",
              points: [
                "Landing Pages & Conversion Funnels",
                "CRM Setup (Zoho, Hubspot, Salesforce)",
                "Automated Follow-ups & Drip Campaigns",
              ],
            },
            {
              title: "eCommerce Marketplace Setup",
              description:
                "From launch to logistics, we handle everything needed to scale your D2C or B2B marketplace presence.",
              points: [
                "Amazon, Flipkart, Meesho, Zepto, IndiaMART Store Setup",
                "Shopify Store Development & App Integrations",
                "Product Listings, Ads, and Optimizations",
              ],
            },
            {
              title: "Sales Tools & Automation",
              description:
                "Bridge the gap between marketing and sales with custom tools that improve efficiency.",
              points: [
                "IVR & Call Tracking Systems",
                "Employee Field Tracking & Task Monitoring",
                "Chatbot Integration (WhatsApp, Website, Meta)",
              ],
            },
            {
              title: "Brand Building & Awareness",
              description:
                "We craft compelling narratives and digital campaigns that connect emotionally and perform commercially.",
              points: [
                "Content Strategy & Social Media Marketing",
                "PR & Influencer Collaborations",
                "Ad Creatives, Videos & Copywriting",
              ],
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#f9f9f9] p-6 rounded shadow-sm"
            >
              <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
              <p className="text-sm my-3">{service.description}</p>
              <ul className="list-disc ml-5 text-sm text-gray-700 space-y-1">
                {service.points.map((pt, idx) => (
                  <li key={idx}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our partners */}
      <section className="py-20 px-6 md:px-20 text-center">
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Trusted by Business
        </h3>
        <h2 className="text-3xl font-bold mb-8">Our Partners & Business</h2>

        <div className="flex gap-2 items-center justify-center">
          <div className="w-38 h-36 bg-gray-300"></div>
          <div className="w-38 h-36 bg-gray-300"></div>
          <div className="w-38 h-36 bg-gray-300"></div>
          <div className="w-38 h-36 bg-gray-300"></div>
        </div>
      </section>

      {/* Industries We Work With */}
      <section className="bg-gray-50 py-20 px-6 md:px-20 text-center">
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Who We Serve
        </h3>
        <h2 className="text-3xl font-bold mb-8">Industries We Work With</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We bring specialized expertise to diverse industries, tailoring our
          digital marketing strategies for maximum impact.
        </p>
        <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {[
            "D2C & FMCG Brands",
            "Education & EdTech",
            "Health & Wellness",
            "Real Estate & Construction",
            "B2B & SaaS Startups",
            "Local Service Providers & MSMEs",
          ].map((industry, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-[#3D4267] text-white px-4 py-4 border rounded-lg shadow-sm"
            >
              {industry}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4 md:px-10 bg-white text-center">
        <h4 className="text-sm font-medium text-gray-500 mb-2">
          Why Choose Us
        </h4>
        <h2 className="text-3xl font-bold mb-6">Why Choose Seren Media?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          We bring specialized expertise to diverse industries, tailoring our
          digital marketing strategies for maximum impact.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {[
            {
              title: "Data-Driven Approach",
              desc: "Every decision we make is backed by performance analytics and KPIs.",
            },
            {
              title: "Platform Expertise",
              desc: "Certified professionals across Google, Meta, Shopify, Amazon, and more.",
            },
            {
              title: "Seamless Execution",
              desc: "From strategy to implementation, we act as your digital growth partner.",
            },
            {
              title: "Scalable Solutions",
              desc: "Whether you're running a small brand or a large eCommerce store — we’ve got you covered.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-[#f9f9f9] p-10 w-90 md:p-10 rounded shadow-sm text-left"
            >
              <h4 className="text-2xl font-semibold mb-2">{card.title}</h4>
              <p className="text-gray-600 text-sm">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call To Action */}
      <section className="bg-[#f1f1f1] py-20 px-6 md:px-20 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Let's Build a Digital Engine for Your Business
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto mb-6">
          With Seren Media, your business doesn’t just go online — it thrives
          online. Let us help you boost visibility, build a loyal customer base,
          and increase conversions with precision-led digital marketing
          solutions.
        </p>
        <button className="bg-[#0C1B3A] text-white px-6 py-2 rounded hover:opacity-90">
          Get in touch
        </button>
      </section>
    </main>
  );
}

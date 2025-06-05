"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const jobs = [
  {
    title: "Key Account Manager – E-commerce",
    tags: ["Hybrid", "Full-time"],
    desc: "Manage and grow key e-commerce client accounts across platforms like Amazon, Flipkart, Zepto, and Shopify. Ensure success across listings, performance marketing, logistics, and growth planning.",
  },
  {
    title: "Tele Sales Executive",
    tags: ["Remote", "Full-time"],
    desc: "Your job is to connect, convince, and convert leads over calls. Be the first voice of Serensynth for inbound & outbound calls",
  },
  {
    title: "Graphic Designer",
    tags: ["Hybrid", "Remote", "Full-time"],
    desc: "We need a designer who brings ideas to life — from digital ads to brand identity and packaging.",
  },
  {
    title: "Video Editor",
    tags: ["Remote", "Hybrid", "Full-time"],
    desc: "Create high-impact videos — from short reels and brand films to explainer videos. If you know how to keep attention and drive action, we want you.",
  },
  {
    title: "Meta Ads Executive",
    tags: ["Remote", "Full-time"],
    desc: "We’re seeking a creative & data-driven Meta Ads Executive to drive paid growth across Facebook & Instagram.",
  },
  {
    title: "PPC Advertiser",
    tags: ["Remote", "Full-time"],
    desc: "You'll run performance-driven ad campaigns across platforms — especially Google and Meta. Ideal for someone who understands CPI, ROAS, and funnel optimization deeply.",
  },
];

export default function CareersPage() {
  return (
    <div className="bg-white text-[#0C1B3A]">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-[#0C1B3A] to-[#19294F] text-white py-40 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold mb-4"
        >
          Work With US
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-base leading-relaxed"
        >
          We offer comprehensive solutions in business acceleration, technology
          enablement, eCommerce, logistics, and career advancement. Whether
          you’re an entrepreneur, professional, or startup, we have the
          expertise to drive your success.
        </motion.p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-white text-[#0C1B3A] font-semibold py-2 px-6 rounded"
        >
          Apply Here
        </motion.button>
      </section>

      {/* Consultant Invitation */}
      <section className="py-16 px-4 max-w-5xl mx-auto">
        <h2 className="text-center text-2xl font-semibold text-[#0C1B3A] mb-8">
          Join us as a Consultant
        </h2>
        <div className="flex justify-end mb-6">
          <button className="border border-[#0C1B3A] text-[#0C1B3A] rounded-full px-4 py-1 text-sm font-medium">
            Open positions ↓
          </button>
        </div>

        {/* Job Cards */}
        {jobs.map((job, index) => (
          <motion.div
            key={job.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h3 className="font-semibold text-lg">{job.title}</h3>
            <div className="flex gap-2 mt-2 mb-4">
              {job.tags.map((tag) => (
                <span
                  key={tag}
                  className="border border-gray-400 rounded-full px-2 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-sm text-gray-700 mb-2">{job.desc}</p>
            <button className="w-full flex justify-end items-center text-sm text-[#0C1B3A] font-medium hover:underline">
              See positions <FaArrowRight className="ml-2 text-xs" />
            </button>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

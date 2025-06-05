"use client";

import { motion } from "framer-motion";

const sectorsLeft = [
  "E-Commerce & D2C",
  "FMCG Brands",
  "Real Estate Visionaries",
];
const sectorsRight = [
  "Ambitious Startups & Entrepreneurs",
  "Media & Entertainment Trailblazers",
  "Education & Ed-Tech Innovators",
  "Manufacturing Powerhouses",
];

export default function SectorsWeServe() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Industries We Elevate
        <div className="mx-auto mt-2 h-[2px] w-80 bg-gray-300" />
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Left Column */}
        <div className="space-y-6">
          {sectorsLeft.map((sector, i) => (
            <motion.div
              key={i}
              className="border-b pb-2 text-lg text-gray-800"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {sector}
            </motion.div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {sectorsRight.map((sector, i) => (
            <motion.div
              key={i}
              className="border-b pb-2 text-lg text-gray-800"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {sector}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

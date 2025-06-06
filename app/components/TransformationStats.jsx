"use client";

import { motion } from "framer-motion";

const stats = [
  "$2M+ Value Generated for Clients",
  "15+ Trusted Ecosystem Partners",
  "Zero Disruption Implementation Record",
];

export default function TransformationStats() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Transformation We’ve Driven
        <div className="mx-auto mt-2 h-[2px] w-40 bg-gray-300" />
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="bg-[#0C1B3A] text-white px-10 py-16 rounded-xl shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <p className="text-3xl font-bold leading-relaxed">{stat}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";

export default function LaunchpadSection() {
  return (
    <section className="py-16 px-4 md:px-12 bg-white">
      {/* Section Heading */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center text-[#0C1B3A] mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        SerenSynth Launchpad
        <div className="mx-auto mt-2 h-[2px] w-24 bg-gray-300" />
      </motion.h2>

      {/* Gradient Box */}
      <motion.div
        className="max-w-6xl mx-auto rounded-2xl p-6 sm:p-40 flex items-center justify-center text-center"
        style={{
          background: "linear-gradient(120deg, #8B0000, #000066, #FFDAB9)",
        }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <button className="bg-white text-black px-6 py-2 rounded-lg border border-[#e5c28c] hover:shadow-lg transition font-medium text-sm sm:text-base">
          Join Waitlist
        </button>
      </motion.div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CallToActionCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col md:flex-row max-w-5xl mx-auto my-12 rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Left Card */}
      <motion.div
        className="flex-1 bg-white p-16"
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          What we can help you <br /> achieve ?
        </h2>
        <hr className="border-t border-gray-300 my-4 w-3/4" />
        <button className="mt-4 bg-[#0C1B3A] text-white px-5 py-2 rounded-md flex items-center gap-2 hover:bg-[#11224a] transition">
          Let’s get to work <span>→</span>
        </button>
      </motion.div>

      {/* Right Card */}
      <motion.div
        className="flex-1 bg-[#374161] text-white p-16 rounded-tr-xl md:rounded-tr-none md:rounded-r-xl"
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Let’s Grow <br /> Together
        </h2>
        <hr className="border-t border-gray-400 my-4 w-3/4" />
        <button className="mt-4 bg-white text-[#0C1B3A] px-5 py-2 rounded-md flex items-center gap-2 hover:bg-gray-100 transition">
          let’s get to work <span>→</span>
        </button>
      </motion.div>
    </motion.div>
  );
}

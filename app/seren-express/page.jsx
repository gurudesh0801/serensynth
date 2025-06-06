"use client";
import { motion } from "framer-motion";

const logisticsFeatures = [
  {
    title: "Integrated Logistics",
    desc: "Your entire supply chain, managed by one trusted partner.",
    icon: "🛠️",
  },
  {
    title: "Cost Efficiency",
    desc: "Say goodbye to commissions and hello to significant savings (up to 30%).",
    icon: "💰",
  },
  {
    title: "Speed & Reliability",
    desc: "From next-day to same-day delivery options, we prioritize getting your goods where they need to be, fast.",
    icon: "⚡",
  },
  {
    title: "Dedicated Support",
    desc: "Benefit from Seren Support, ensuring smooth operations and quick resolutions.",
    icon: "📞",
  },
  {
    title: "Order Verification",
    desc: "Added security and accuracy for every shipment.",
    icon: "✅",
  },
  {
    title: "Trusted Carriers",
    desc: "Partnering with leaders like Bluedart, Delhivery, and DTDC for nationwide reach and reliability.",
    icon: "🚚",
  },
];

export default function SerenExpressPage() {
  return (
    <main className="bg-white text-[#0C1B3A]">
      {/* Hero Placeholder */}
      <section className="px-6 md:px-20 py-16 pt-35">
        <div className="w-full h-64 bg-gray-100 rounded-lg shadow-inner flex items-center justify-center text-gray-400">
          {/* Replace this with actual image or animation */}
          Hero Image / Banner
        </div>
      </section>

      {/* Discover Section */}
      <section className="px-6 md:px-20 pb-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Discover The Seren Experience
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Domestic Shipping",
              bold: "Seamless Start, Swift Delivery.",
              text: "Get your shipments moving today with our reliable and efficient domestic shipping solutions. From local to nationwide, we ensure your products reach their destination on time, every time.",
            },
            {
              title: "Quick Commercial Solutions",
              bold: "Agility for Your Business.",
              text: "Navigate the complexities of commercial logistics with ease. Our tailored solutions are designed for speed and precision, empowering your business to respond rapidly to market demands and maintain a competitive edge.",
            },
            {
              title: "Warehouse & Fulfillment",
              bold: "Optimize Your Supply Chain.",
              text: "Unlock peak performance with our integrated warehouse and fulfillment services. From storage and inventory management to pick-and-pack and dispatch, we handle every detail with expertise, ensuring smooth operations and satisfied customers.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="border rounded p-6 bg-white shadow-sm"
            >
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-sm">
                <strong>{item.bold}</strong> {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 px-6 md:px-20 py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why choose Goldlabs Express?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {logisticsFeatures.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-lg p-6 shadow text-center"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h4 className="text-blue-700 font-semibold mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen glow-bg bg-black text-white px-6 py-14 space-y-24 relative overflow-hidden">
      {/* HERO */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Bernando
        </h1>
        <p className="mt-4 text-zinc-400 max-w-md">
          Explorer game & teknologi. Suka ngulik hal keren di web.
        </p>
      </motion.section>

      {/* CARD SLIDER */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex gap-6 overflow-x-auto pb-6"
      >
        {[
          { title: "🎮 Games", desc: "Main banyak game tanpa terikat satu dunia." },
          { title: "🧠 Exploring", desc: "Web interaktif, animasi, UI futuristik." },
          { title: "🚀 Mindset", desc: "Device sederhana, mimpi visual maksimal." },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="min-w-[260px] rounded-2xl bg-white/5 backdrop-blur-xl p-6 border border-white/10 shadow-xl hover:shadow-cyan-500/20 transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-300">{item.desc}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* EXTRA SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <h2 className="text-3xl font-bold mb-4">
          Build Slowly. Look Powerful.
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto">
          Nggak kejar cepat. Nggak kejar sempurna.  
          Tapi setiap langkah keliatan niat dan hidup.
        </p>
      </motion.section>

    </main>
  );
            }

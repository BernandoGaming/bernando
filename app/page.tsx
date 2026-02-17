"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-10">
      
      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-14"
      >
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          Bernando
        </h1>
        <p className="mt-3 text-zinc-400 max-w-md">
          Explorer game & teknologi. Suka ngulik hal keren di web.
        </p>
      </motion.section>

      {/* CARD SLIDER */}
      <section className="flex gap-5 overflow-x-auto pb-6">
        {[
          {
            title: "🎮 Games",
            desc: "Main banyak game: Minecraft, FF, ML, Bloodstrike, dan random lainnya.",
          },
          {
            title: "🧠 Exploring",
            desc: "Web, animasi, UI interaktif, dan visual yang bikin wow.",
          },
          {
            title: "🚀 Journey",
            desc: "Mulai dari device sederhana, tapi pengen hasil maksimal.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.08 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="min-w-[260px] rounded-2xl bg-zinc-800/70 backdrop-blur-md p-5 border border-zinc-700 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-zinc-300">{item.desc}</p>
          </motion.div>
        ))}
      </section>

    </main>
  );
}

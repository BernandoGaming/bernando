"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m{" "}
          <span className="text-primary">Bernando</span>
        </h1>

        <p className="mt-4 text-muted text-lg">
          Gamer • Web Developer • Creative Thinker
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-xl bg-primary text-black font-semibold hover:scale-105 transition">
            About Me
          </button>

          <button className="px-6 py-3 rounded-xl border border-primary text-primary hover:bg-primary hover:text-black transition">
            Projects
          </button>
        </div>
      </motion.div>
    </main>
  );
}

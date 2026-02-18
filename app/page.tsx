"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-zinc-950 text-zinc-100 flex justify-center">
      <div className="w-full max-w-md px-6 py-12">

        {/* Header */}
        <section className="text-center mb-14">
          <h1 className="text-4xl font-bold tracking-tight mb-3">
            Bernando
          </h1>
          <p className="text-zinc-400 text-sm leading-relaxed">
            ruang kecil di internet,<br />
            tempat aku hidup & berkembang
          </p>

          {/* Avatar */}
          <div className="mt-8 flex justify-center">
            <div className="w-24 h-24 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 text-xs">
              avatar
            </div>
          </div>
        </section>

        {/* Menu */}
        <section className="space-y-6">

          <Portal
            title="Dashboard"
            desc="Ringkasan hidup & aktivitas"
          />

          <Portal
            title="Play"
            desc="Game & dunia hiburan"
          />

          <Portal
            title="Lab"
            desc="Eksperimen, ide, dan proses"
          />

        </section>

      </div>
    </main>
  );
}

function Portal({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileTap={{ scale: 0.97 }}
      className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 shadow-sm"
    >
      <h2 className="text-lg font-semibold mb-1">
        {title}
      </h2>
      <p className="text-sm text-zinc-400">
        {desc}
      </p>
    </motion.div>
  );
}

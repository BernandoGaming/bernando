"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const portals = [
  { title: "Dashboard", desc: "Ringkasan hidup & aktivitas", href: "/dashboard" },
  { title: "Play", desc: "Game & dunia hiburan", href: "/play" },
  { title: "Lab", desc: "Ngulik, eksperimen, dan ide", href: "/lab" },
  { title: "Content", desc: "YouTube & konten", href: "/content" },
  { title: "About", desc: "Tentang aku", href: "/about" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-bg text-text flex flex-col items-center justify-center px-6 py-20">
      
      {/* OPENING */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          Bernando
        </h1>
        <p className="mt-4 text-muted text-lg">
          ruang kecil di internet, tempat aku hidup & berkembang
        </p>
      </motion.section>

      {/* VISUAL IDENTITAS */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-14 mb-16"
      >
        <div className="w-32 h-32 rounded-full bg-card flex items-center justify-center text-muted">
          {/* placeholder avatar */}
          <span className="text-sm">avatar</span>
        </div>
      </motion.div>

      {/* PORTAL */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {portals.map((item, i) => (
          <Link key={i} href={item.href}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-card rounded-xl p-6 border border-white/5 hover:border-primary/40 transition"
            >
              <h2 className="text-xl font-medium">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.desc}</p>
            </motion.div>
          </Link>
        ))}
      </motion.section>

      {/* FOOTER NOTE */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-20 text-xs text-muted"
      >
        pelan-pelan, tapi nyata
      </motion.footer>

    </main>
  );
}

"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
      <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white p-6">
            {/* Hero */}
                  <motion.section
                          initial={{ opacity: 0, y: 40 }}
                                  animate={{ opacity: 1, y: 0 }}
                                          transition={{ duration: 0.8 }}
                                                  className="mb-12"
                                                        >
                                                                <h1 className="text-4xl font-bold mb-2">Bernando</h1>
                                                                        <p className="text-zinc-400">
                                                                                  Explorer game & teknologi. Suka ngulik hal keren di web.
                                                                                          </p>
                                                                                                </motion.section>

                                                                                                      {/* Cards */}
                                                                                                            <section className="overflow-x-auto flex gap-4 pb-4">
                                                                                                                    {[
                                                                                                                              { title: "🎮 Games", desc: "Minecraft, FF, ML, Bloodstrike, dan random lainnya." },
                                                                                                                                        { title: "🧠 Exploring", desc: "Web, animasi, UI, dan hal-hal visual." },
                                                                                                                                                  { title: "🚀 Goal", desc: "Bikin hal keren walau device pas-pasan." },
                                                                                                                                                          ].map((item, i) => (
                                                                                                                                                                    <motion.div
                                                                                                                                                                                key={i}
                                                                                                                                                                                            whileHover={{ scale: 1.05 }}
                                                                                                                                                                                                        className="min-w-[250px] bg-zinc-800/60 backdrop-blur rounded-xl p-4 shadow-lg"
                                                                                                                                                                                                                  >
                                                                                                                                                                                                                              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                                                                                                                                                                                                                          <p className="text-sm text-zinc-300">{item.desc}</p>
                                                                                                                                                                                                                                                    </motion.div>
                                                                                                                                                                                                                                                            ))}
                                                                                                                                                                                                                                                                  </section>
                                                                                                                                                                                                                                                                      </main>
                                                                                                                                                                                                                                                                        );
                                                                                                                                                                                                                                                                        }
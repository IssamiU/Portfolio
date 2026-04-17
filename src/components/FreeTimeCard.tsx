import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { freeTimeContent } from "../data/portfolio";

const tabs = ["Stack", "Músicas", "Livros"] as const;
type Tab = (typeof tabs)[number];

export function FreeTimeCard() {
  const [active, setActive] = useState<Tab>("Stack");

  return (
    <div className="glass-strong rounded-2xl p-6 sm:p-8">
      <h3 className="font-display text-lg font-bold text-foreground mb-5">
        Durante Meu Tempo Livre
      </h3>

      <div className="flex gap-2 mb-6 border-b border-border/50">
        {tabs.map((t) => {
          const isActive = active === t;
          return (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t}
              {isActive && (
                <motion.div
                  layoutId="freetime-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                />
              )}
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
        >
          {active === "Stack" && (
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">
                {freeTimeContent.stack.titulo}
              </p>
              <ul className="space-y-3">
                {freeTimeContent.stack.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 text-foreground"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-sm sm:text-base">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          )}
          {active === "Músicas" && (
            <ul className="space-y-3">
              {freeTimeContent.musicas.map((m, i) => (
                <motion.li
                  key={m}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm sm:text-base">{m}</span>
                </motion.li>
              ))}
            </ul>
          )}
          {active === "Livros" && (
            <ul className="space-y-3">
              {freeTimeContent.livros.map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="text-sm sm:text-base">{l}</span>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

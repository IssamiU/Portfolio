import { useState, useEffect } from "react";
import { personalInfo } from "../data/portfolio";
import { motion } from "framer-motion";

function LocalTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Date().toLocaleTimeString("pt-BR", {
          timeZone: personalInfo.timezone,
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  return <span>{time}</span>;
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border-t border-border/50 mt-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Contact */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-foreground text-sm">Contato</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <a href={`mailto:${personalInfo.email}`} className="block hover:text-primary transition-colors">
                {personalInfo.email}
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                LinkedIn
              </a>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="block hover:text-primary transition-colors">
                GitHub
              </a>
            </div>
          </div>

          {/* Location & Time */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-foreground text-sm">Localização</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>{personalInfo.location}</p>
              <p className="flex items-center gap-1.5">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Horário local: <LocalTime />
              </p>
            </div>
          </div>

          {/* Credits */}
          <div className="space-y-3">
            <h3 className="font-display font-semibold text-foreground text-sm">Sobre este site</h3>
            <div className="space-y-1.5 text-sm text-muted-foreground">
              <p>Design & desenvolvimento por <span className="text-foreground">{personalInfo.name}</span></p>
              <p>Feito com React + TailwindCSS</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {personalInfo.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

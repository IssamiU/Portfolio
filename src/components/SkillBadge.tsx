import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  icon?: string;
}

export function SkillBadge({ name, icon }: SkillBadgeProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -2 }}
      className="glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium text-foreground transition-shadow hover:glow-primary"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{name}</span>
    </motion.div>
  );
}

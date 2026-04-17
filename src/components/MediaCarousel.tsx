import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export type MediaItem = {
  type: "image" | "video" | "pdf";
  src: string;
  alt?: string;
  poster?: string;
};

/**
 * Carrossel unificado de mídia: aceita imagens, vídeos e PDFs.
 * - 1 item → renderiza estático (sem controles)
 * - 2+ itens → ativa navegação, dots e teclado
 */
export function MediaCarousel({ items, title }: { items: MediaItem[]; title?: string }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  if (!items || items.length === 0) return null;

  const single = items.length === 1;
  const current = items[index];

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((i) => (i + dir + items.length) % items.length);
  };

  return (
    <div className="relative w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-black/40 border border-border/40">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 60 : -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -60 : 60 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <MediaRenderer item={current} title={title} />
          </motion.div>
        </AnimatePresence>

        {!single && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Mídia anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/70 backdrop-blur border border-border/60 text-foreground hover:bg-background hover:border-primary/50 transition-all flex items-center justify-center"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próxima mídia"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-background/70 backdrop-blur border border-border/60 text-foreground hover:bg-background hover:border-primary/50 transition-all flex items-center justify-center"
            >
              ›
            </button>

            <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-background/70 backdrop-blur border border-border/60 text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
              {index + 1} / {items.length} · {current.type}
            </div>
          </>
        )}
      </div>

      {!single && (
        <div className="mt-4 flex items-center justify-center gap-2">
          {items.map((it, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Ir para mídia ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-primary" : "w-1.5 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function MediaRenderer({ item, title }: { item: MediaItem; title?: string }) {
  if (item.type === "video") {
    return (
      <video
        src={item.src}
        poster={item.poster}
        controls
        className="w-full h-full object-contain bg-black"
      />
    );
  }
  if (item.type === "pdf") {
    return (
      <iframe
        src={item.src}
        title={item.alt ?? title ?? "PDF"}
        className="w-full h-full bg-white"
      />
    );
  }
  return (
    <img
      src={item.src}
      alt={item.alt ?? title ?? ""}
      loading="lazy"
      className="w-full h-full object-cover"
    />
  );
}

/**
 * Helper: monta a lista de mídia a partir dos campos do projeto,
 * priorizando banner/thumbnail como capa e adicionando galeria/vídeo/pdf.
 */
export function buildProjectMedia(p: {
  banner?: string;
  thumbnail?: string;
  images?: string[];
  video?: string;
  pdf?: string;
}): MediaItem[] {
  const items: MediaItem[] = [];
  const cover = p.banner ?? p.thumbnail;
  if (cover) items.push({ type: "image", src: cover });
  p.images?.forEach((src) => {
    if (src !== cover) items.push({ type: "image", src });
  });
  if (p.video) items.push({ type: "video", src: p.video, poster: cover });
  if (p.pdf) items.push({ type: "pdf", src: p.pdf });
  return items;
}

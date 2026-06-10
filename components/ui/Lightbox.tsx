"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as const;

export type LightboxImage = {
  src: string;
  alt: string;
};

type LightboxProps = {
  images: LightboxImage[];
  index: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function LightboxInner({ images, index, onClose, onPrev, onNext }: Omit<LightboxProps, "index"> & { index: number }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease }}
      onClick={onClose}
    >
      <button
        className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors p-2 cursor-pointer"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={22} />
      </button>

      <span className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-white/50">
        {index + 1} / {images.length}
      </span>

      <button
        className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors p-2 cursor-pointer"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        aria-label="Previous"
      >
        <ChevronLeft size={28} />
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="relative max-h-[85vh] max-w-[90vw] md:max-w-[70vw]"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.35, ease }}
          onClick={(e) => e.stopPropagation()}
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            width={1500}
            height={2000}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
            className="max-h-[85vh] w-auto h-auto object-contain"
            sizes="90vw"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <button
        className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors p-2 cursor-pointer"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        aria-label="Next"
      >
        <ChevronRight size={28} />
      </button>
    </motion.div>
  );
}

export function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  return (
    <AnimatePresence>
      {index !== null && (
        <LightboxInner
          images={images}
          index={index as number}
          onClose={onClose}
          onPrev={onPrev}
          onNext={onNext}
        />
      )}
    </AnimatePresence>
  );
}

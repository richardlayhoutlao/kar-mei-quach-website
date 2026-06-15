"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";
import { PageCTA } from "@/components/layout/PageCTA";

const ease = [0.25, 0.1, 0.25, 1] as const;

const heroImages = [
  {
    src: "https://images-pw.pixieset.com/elementfield/6GW5JyO/8E9A0743-Enhanced-NR-Edit-615309f7-1500.jpg",
    alt: "Couple portrait",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/6GW5JyO/8E9A0537-Enhanced-NR-Edit-23d884d7-1500.jpg",
    alt: "Couple session",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/6GW5JyO/8E9A0794-Enhanced-NR-Edit-63a7e271-1500.jpg",
    alt: "Couple outdoors",
  },
];

const images = [
  {
    src: "https://images-pw.pixieset.com/elementfield/6GW5JyO/8E9A0743-Enhanced-NR-Edit-615309f7-1500.jpg",
    alt: "Couple portrait",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/6GW5JyO/8E9A0537-Enhanced-NR-Edit-23d884d7-1500.jpg",
    alt: "Couple session",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/6GW5JyO/8E9A0794-Enhanced-NR-Edit-63a7e271-1500.jpg",
    alt: "Couple outdoors",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/6GW5JyO/8E9A0643-Enhanced-NR-Edit-91106082-1500.jpg",
    alt: "Couple close-up",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export default function Page() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + images.length) % images.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % images.length));

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[calc(100dvh-var(--navbar-height,0px))] min-h-0 md:h-[80vh] md:min-h-[520px] w-full overflow-hidden">

        {/* ── White gradient top to bottom ── */}
        <div className="hidden lg:block absolute top-0 left-0 bottom-0 w-1/2 bg-gradient-to-b from-white to-transparent dark:from-transparent pointer-events-none z-10" />

        {/* ── Mobile: full-bleed image + overlay text ── */}
        <div className="absolute inset-0 md:hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.8, ease }}
          >
            <Image
              src={heroImages[0].src}
              alt={heroImages[0].alt}
              fill
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 z-10">
            <motion.p
              className="text-[9px] tracking-[0.5em] uppercase text-white/90 font-medium mb-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
            >
              Portfolio — Couple
            </motion.p>
            <motion.h1
              className="text-[5rem] font-bold tracking-tight font-hey-eloise leading-[1.05] text-white"
             
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.0 }}
            >
              Just the<br />Two of You.
            </motion.h1>
          </div>
        </div>

        {/* ── Desktop: cream background for left text panel ── */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/2 dark:hidden" style={{ background: "linear-gradient(to bottom, transparent 0%, #e8e4f4 25%, #e8e4f4 75%, transparent 100%)" }} />

        {/* ── Tablet: single image on right half ── */}
        <div className="hidden md:flex lg:hidden absolute top-0 right-0 bottom-0 w-1/2 overflow-hidden">
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease, delay: 0.1 }}
            >
              <Image
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                fill
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="object-cover object-top"
                priority
                sizes="50vw"
              />
            </motion.div>
          </div>
        </div>

        {/* ── Desktop: images on right half ── */}
        <div className="hidden lg:flex absolute top-0 right-0 bottom-0 w-1/2 gap-2 overflow-hidden">
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.6, ease, delay: 0.1 }}
            >
              <Image
                src={heroImages[0].src}
                alt={heroImages[0].alt}
                fill
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
                className="object-cover object-top"
                priority
                sizes="22vw"
              />
            </motion.div>
          </div>

          <div className="flex flex-1 flex-col gap-2 overflow-hidden">
            <div className="relative flex-1 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease, delay: 0.25 }}
              >
                <Image
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  fill
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="object-cover object-top"
                  sizes="22vw"
                />
              </motion.div>
            </div>
            <div className="relative flex-1 overflow-hidden">
              <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.6, ease, delay: 0.4 }}
              >
                <Image
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  fill
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="object-cover object-top"
                  sizes="22vw"
                />
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Desktop: text — identical container to gallery ── */}
        <div className="hidden md:flex absolute inset-0 flex-col justify-between pt-4 md:pt-8 xl:pt-10 pb-16 lg:pb-20 px-8 md:px-16 lg:px-24 xl:px-48 z-10">
          <div className="max-w-5xl xl:max-w-screen-2xl mx-auto w-full">
            <div className="w-1/2 pr-8 md:pr-12 lg:pr-16">
              <motion.p
                className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.2 }}
              >
                Portfolio — Couple
              </motion.p>
            </div>
          </div>
          <div className="max-w-5xl xl:max-w-screen-2xl mx-auto w-full">
            <div className="w-1/2 flex flex-col gap-10 pr-8 md:pr-12 lg:pr-16 border-r border-border/30">
              <motion.h1
                className="text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold tracking-tight font-hey-eloise leading-[1.0]"

                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease, delay: 0.4 }}
              >
                Just the<br />
                <span className="font-light italic text-muted-foreground font-hey-eloise-watercolor">Two of You.</span>
              </motion.h1>
              <div>
                <motion.p
                  className="text-sm text-muted-foreground font-light leading-relaxed max-w-[30ch]"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease, delay: 0.65 }}
                >
                  Love looks best when it&apos;s not performing — relaxed, real, and entirely yours. These sessions are built around you, unhurried and authentic.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="px-8 md:px-16 lg:px-24 xl:px-48 pt-20 md:pt-32 pb-20 md:pb-32">
        <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">

          <motion.div
            className="mb-10 md:mb-14 flex items-center gap-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <span className="text-[10px] tracking-[0.45em] uppercase text-muted-foreground shrink-0">Selected Work</span>
            <span className="block h-px flex-1 bg-border" />
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                variants={itemVariants}
                className="relative aspect-3/4 group overflow-hidden cursor-pointer"
                onClick={() => open(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-20 md:mt-28 pt-10 border-t border-border"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            <p className="text-sm text-muted-foreground font-light leading-loose max-w-md">
              Whether you&apos;re newly together or celebrating years of &apos;us&apos; — these
              sessions are an excuse to slow down and just be with each other.
            </p>
          </motion.div>

        </div>
      </main>

      <Lightbox
        images={images}
        index={lightboxIndex}
        onClose={close}
        onPrev={prev}
        onNext={next}
      />
      <PageCTA eyebrow="Couple sessions." line1="You & them." line2="Always." />
    </>
  );
}

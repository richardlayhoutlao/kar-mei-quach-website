"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";

const ease = [0.25, 0.1, 0.25, 1] as const;

const heroImages = [
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/GuirguisFamily-a833801f-1000.jpg",
    alt: "Family portrait outdoors",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/8E9A6613-51fdbcba-1000.jpg",
    alt: "Family together",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/HoFamilycopy-e8d33325-1000.jpg",
    alt: "Ho family portrait",
  },
];

const images = [
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/8E9A5546-b4683a32-1000.jpg",
    alt: "Family session",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/8E9A5565-46dfb8c1-1000.jpg",
    alt: "Family moment",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/8E9A6613-51fdbcba-1000.jpg",
    alt: "Family together",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/8E9A6705-a34a3e49-1000.jpg",
    alt: "Family portrait",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/Ayla4021-Edit-7cffe61e-1000.jpg",
    alt: "Ayla family session",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/GuirguisFamily-a833801f-1000.jpg",
    alt: "Guirguis family portrait",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/3x6wa6v/HoFamilycopy-e8d33325-1000.jpg",
    alt: "Ho family portrait",
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
      <section className="relative flex h-[80vh] min-h-[520px] md:h-[80vh] w-full overflow-hidden">

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
              className="object-cover object-top"
              priority
              sizes="100vw"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-14 z-10">
            <motion.p
              className="text-[9px] tracking-[0.5em] uppercase text-white/60 font-medium mb-3"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease, delay: 0.8 }}
            >
              Portfolio — Family
            </motion.p>
            <motion.h1
              className="text-[2.5rem] font-bold tracking-tight leading-[1.05] text-white"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.0 }}
            >
              Together,<br />in Frame.
            </motion.h1>
          </div>
        </div>

        {/* ── Desktop label ── */}
        <motion.p
          className="hidden md:block absolute top-8 xl:top-10 left-8 md:left-16 lg:left-24 xl:left-48 z-20 max-w-5xl xl:max-w-screen-2xl text-[9px] tracking-[0.55em] uppercase text-muted-foreground font-medium"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.2 }}
        >
          Portfolio — Family
        </motion.p>

        {/* ── Desktop: left text panel ── */}
        <div className="hidden md:flex relative z-10 flex-col justify-end py-16 lg:py-20 px-12 lg:px-20 xl:px-28 w-1/2 shrink-0 border-r border-border/30">
          <div className="flex flex-col gap-10">
            <motion.h1
              className="text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight leading-[1.0]"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, ease, delay: 0.4 }}
            >
              Together,<br />
              <span className="font-light italic text-muted-foreground">in Frame.</span>
            </motion.h1>

            <div>
              <motion.p
                className="text-sm text-muted-foreground font-light leading-relaxed max-w-[22ch] mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.65 }}
              >
                Family isn&apos;t just who you&apos;re born to — it&apos;s the moments you choose to keep.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.8 }}
              >
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase"
                >
                  Book a session
                  <span className="block h-px w-8 bg-current opacity-50 transition-all duration-300 group-hover:w-14 group-hover:opacity-80" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ── Desktop: right image panel (1 tall + 2 stacked) ── */}
        <div className="hidden md:flex w-1/2 shrink-0 gap-2 overflow-hidden">
          {/* single full-height portrait */}
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
                className="object-cover object-top"
                priority
                sizes="22vw"
              />
            </motion.div>
          </div>

          {/* two stacked portraits */}
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
                  className="object-cover object-top"
                  sizes="22vw"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <main className="px-8 md:px-16 lg:px-24 xl:px-48 pt-14 md:pt-20 pb-20 md:pb-32 xl:pb-56">
        <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">

          <motion.div
            className="columns-2 md:columns-3 gap-3 md:gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.05 }}
          >
            {images.map((img, i) => (
              <motion.div
                key={img.src}
                variants={itemVariants}
                className="break-inside-avoid mb-3 md:mb-4 group overflow-hidden cursor-pointer"
                onClick={() => open(i)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={750}
                  height={1000}
                  className="w-full h-auto transition-transform duration-700 ease-out group-hover:scale-[1.03]"
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
              Every family has its own rhythm. These sessions are crafted to
              honour the warmth between you — candid, unhurried, and entirely yours.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase"
              >
                Book a session
                <span className="block h-px w-8 bg-current opacity-50 transition-all duration-300 group-hover:w-14 group-hover:opacity-80" />
              </Link>
            </div>
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
    </>
  );
}

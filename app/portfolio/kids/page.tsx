"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";

const ease = [0.25, 0.1, 0.25, 1] as const;

const heroImages = [
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_ChloeColour_Expand_Quach_CleanBG-95d67773-1500.jpg",
    alt: "Portrait of Chloe",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_ThomasColor_Quach_CleanedBG-842f3eb0-1500.jpg",
    alt: "Portrait of Thomas",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_KenjiColour_Quach_CleanBG-b560c226-1500.jpg",
    alt: "Portrait of Kenji",
  },
];

const images = [
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_KittyColour_Quach_CleanBG-a1fc63e1-1500.jpg",
    alt: "Portrait of Kitty",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_KenjiColour_Quach_CleanBG-b560c226-1500.jpg",
    alt: "Portrait of Kenji",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_JayceColour_Quach_CleanBG-055ccdf5-1500.jpg",
    alt: "Portrait of Jayce",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_LiliaColour_Expand_Quach_CleanBG-25ea78a0-1500.jpg",
    alt: "Portrait of Lilia",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_ThomasColor_Quach_CleanedBG-842f3eb0-1500.jpg",
    alt: "Portrait of Thomas",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/Lucas2915-7698bc43-1500.jpg",
    alt: "Portrait of Lucas",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_MilanaColour2_Quach_CleanBG-d75dfa53-1500.jpg",
    alt: "Portrait of Milana",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_ChloeColour_Expand_Quach_CleanBG-95d67773-1500.jpg",
    alt: "Portrait of Chloe",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_AylaColour_Quach_CleanBG-f7eb4f06-1500.jpg",
    alt: "Portrait of Ayla",
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
              Portfolio — Kids
            </motion.p>
            <motion.h1
              className="text-[2.5rem] font-bold tracking-tight leading-[1.05] text-white"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.0 }}
            >
              Little Ones,<br />Big Moments.
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
          Portfolio — Kids
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
              Little<br />Ones,<br />
              <span className="font-light italic text-muted-foreground">Big<br />Moments.</span>
            </motion.h1>

            <div>
              <motion.p
                className="text-sm text-muted-foreground font-light leading-relaxed max-w-[22ch] mb-8"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease, delay: 0.65 }}
              >
                Every child is a world of their own — captured at their own pace.
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
            <div className="relative flex-1 overflow-hidden bg-background">
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
                  className="object-cover object-[center_45%]"
                />
              </motion.div>
            </div>
            <div className="relative flex-1 overflow-hidden bg-background">
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
                  className="object-cover object-[center_45%]"
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
              Every child is a world of their own. These sessions are crafted to
              celebrate their personality, curiosity, and joy — at their own pace.
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

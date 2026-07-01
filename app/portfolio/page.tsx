"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageCTA } from "@/components/layout/PageCTA";

const ease = [0.25, 0.1, 0.25, 1] as const;

const categories = [
  {
    href: "/portfolio/couple",
    label: "Couples",
    sub: "Just the two of you.",
    src: "/assets/km-price-couple.jpg",
    alt: "Montreal couples photographer Kar-Mei Quach",
    position: "object-top",
  },
  {
    href: "/portfolio/maternity",
    label: "Maternity",
    sub: "Before they arrive.",
    src: "/assets/km-price-maternity.jpg",
    alt: "Montreal maternity photographer Kar-Mei Quach",
    position: "object-center",
  },
  {
    href: "/portfolio/family",
    label: "Family",
    sub: "Together, in frame.",
    src: "/assets/km-price-family.jpg",
    alt: "Montreal family photographer Kar-Mei Quach",
    position: "object-top",
  },
  {
    href: "/portfolio/kids",
    label: "Kids",
    sub: "Childhood, caught.",
    src: "/assets/km-price-kids.jpg",
    alt: "Montreal children photographer Kar-Mei Quach",
    position: "object-top",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function Page() {
  return (
    <>
    <main className="px-8 md:px-16 lg:px-24 xl:px-48 pt-4 md:pt-8 xl:pt-10 pb-20 md:pb-32">
      <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">

        {/* Header */}
        <motion.p
          className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-medium mb-10 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          Portfolio
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-medium tracking-tight leading-[1.0] mb-16 md:mb-20"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Shot with<br />
          <span className="font-light italic text-muted-foreground">Intention.</span>
        </motion.h1>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {categories.map((cat) => (
            <motion.div key={cat.href} variants={cardVariants}>
              <Link href={cat.href} className="group block relative overflow-hidden aspect-[3/4]">
                <Image
                  src={cat.src}
                  alt={cat.alt}
                  width={900}
                  height={1200}
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className={`absolute inset-0 w-full h-full object-cover ${cat.position} transition-transform duration-700 ease-out group-hover:scale-[1.04]`}
                  priority
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* base dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                {/* hover scrim */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* text */}
                <div className="absolute bottom-0 left-0 right-0 px-7 pb-8">
                  <p className="text-[9px] tracking-[0.45em] uppercase text-white/60 font-medium mb-1.5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    {cat.sub}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {cat.label}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </main>
    <PageCTA eyebrow="The portfolio." line1="Every shot" line2="Tells a story." />
    </>
  );
}

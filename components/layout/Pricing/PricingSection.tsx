"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const packages = [
  {
    title: "Couple",
    price: "From $500",
    image: "https://images-pw.pixieset.com/elementfield/yWxYV5n/Nidarsan-e61ea278-1000.jpg",
    alt: "Couple session",
    href: "/portfolio/couple",
  },
  {
    title: "Maternity",
    price: "From $500",
    image: "https://images-pw.pixieset.com/elementfield/0Kl51Po/VictoriaPregnancy2481-Edit-1db8cd83-1000.jpg",
    alt: "Maternity session",
    href: "/portfolio/maternity",
  },
  {
    title: "Family",
    price: "From $500",
    image: "https://images-pw.pixieset.com/elementfield/3x6wa6v/8E9A6705-a34a3e49-1000.jpg",
    alt: "Family session",
    href: "/portfolio/family",
  },
  {
    title: "Kids",
    price: "From $500",
    image: "https://images-pw.pixieset.com/elementfield/VMDLKmm/8E9A2761-Edit-ffddf968-1000.jpg",
    alt: "Kids session",
    href: "/portfolio/kids",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export function PricingSection() {
  return (
    <main className="px-8 md:px-16 lg:px-24 xl:px-48 pt-4 md:pt-8 xl:pt-10 pb-20 md:pb-32 xl:pb-56">
      <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">

        <motion.p
          className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-medium mb-10 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          Pricing
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
          className="mb-16 md:mb-24"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight font-hey-eloise leading-[1.0]">
            Investment In Moments<br /><span className="font-light italic text-muted-foreground font-hey-eloise-watercolor">That Last Forever.</span>
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {packages.map(({ title, price, image, alt, href }) => (
            <motion.div key={title} variants={cardVariant}>
              <Link href={href} className="group block relative overflow-hidden aspect-3/4">
                <Image
                  src={image}
                  alt={alt}
                  fill
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                {/* base dark gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                {/* hover scrim */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* text */}
                <div className="absolute bottom-0 left-0 right-0 px-7 pb-8">
                  <p className="text-[9px] tracking-[0.45em] uppercase text-white/60 font-medium mb-1.5 translate-y-1 group-hover:translate-y-0 transition-transform duration-500">
                    {price}
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                    {title}
                  </h2>
                </div>
              </Link>
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
            All sessions are tailored to your family and vision.
            Reach out to discuss packages, add-ons, and what to expect.
          </p>
        </motion.div>

      </div>
    </main>
  );
}

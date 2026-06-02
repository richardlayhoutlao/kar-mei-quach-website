"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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
          className="mb-8 md:mb-16"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-lg">
            Investment in moments<br />that last forever.
          </h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {packages.map(({ title, price, image, alt, href }, i) => {
            const isLeft = i % 2 === 0;
            const isBottom = i >= 2;
            const hasMobileTopBorder = i === 1;
            return (
              <motion.div
                key={title}
                variants={cardVariant}
                className={cn(
                  "group pt-8 pb-12 md:py-12 border-border",
                  isBottom && "border-t",
                  hasMobileTopBorder && "border-t md:border-t-0",
                  isLeft ? "md:pr-12 xl:pr-32 md:border-r" : "md:pl-12 xl:pl-32",
                )}
              >
                <Link href={href} className="block">
                <div className="relative aspect-square overflow-hidden mb-6">
                  <Image
                    src={image}
                    alt={alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <div className="flex items-baseline gap-4">
                    <span className="text-[10px] tracking-[0.3em] text-muted-foreground/50 font-medium tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-lg md:text-xl xl:text-2xl font-semibold tracking-tight">
                      {title}
                    </h2>
                  </div>
                  <span className="shrink-0 text-xs font-medium tracking-widest uppercase text-muted-foreground">
                    {price}
                  </span>
                </div>
                </Link>
              </motion.div>
            );
          })}
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
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase"
            >
              Get in touch
              <span className="block h-px w-8 bg-current opacity-50 transition-all duration-300 group-hover:w-14 group-hover:opacity-80" />
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

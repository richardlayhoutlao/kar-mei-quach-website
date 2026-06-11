"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.1, 0.25, 1] as const;

const testimonials = [
  {
    name: "Pierre & Abi",
    quote:
      "An incredible experience with Kar-Mei. Her talent and sensitivity truly make all the difference. These are memories we'll cherish for our entire lives. Thank you so much!",
  },
  {
    name: "Lam's Family",
    quote:
      "Kar-Mei is an incredibly professional and passionate photographer. We were blessed to have her take our family and maternity pictures. Our kids had an amazing time during the photoshoot and were even more over the moon when they saw their pictures. We highly recommend her to help immortalize your family!",
  },
  {
    name: "Nidarsan & Anthy",
    quote:
      "Honestly, it was a really wonderful experience. The photographer made us feel comfortable right from the start, and it really shows in the photos—they're natural and spontaneous. We're extremely happy with the result; we absolutely love them!",
  },
  {
    name: "Nguyen's Family",
    quote:
      "We had a wonderful experience during the photoshoot. Karmei was incredibly patient and remarkably gentle, which helped the children quickly feel comfortable and natural in front of the camera. The entire experience was enjoyable from beginning to end.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export function TestimonialsSection() {
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
          Testimonials
        </motion.p>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight font-hey-eloise leading-[1.0] mb-16 md:mb-24 max-w-xl"
         
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Real Moments.<br /><span className="font-light italic text-muted-foreground font-hey-eloise-watercolor">Real Words.</span>
        </motion.h1>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          {testimonials.map(({ name, quote }, i) => {
            const isLeft = i % 2 === 0;
            const isBottom = i >= 2;
            const hasMobileTopBorder = i === 1;
            return (
              <motion.div
                key={name}
                variants={cardVariant}
                className={cn(
                  "pt-10 pb-12 md:py-16 border-border",
                  isBottom && "border-t",
                  hasMobileTopBorder && "border-t md:border-t-0",
                  isLeft
                    ? "md:pr-12 xl:pr-24 md:border-r"
                    : "md:pl-12 xl:pl-24",
                )}
              >
                <span className="block font-serif text-7xl leading-none text-foreground/10 mb-2 select-none">
                  &ldquo;
                </span>
                <p className="text-sm text-muted-foreground leading-loose font-light mb-10">
                  {quote}
                </p>
                <div className="flex items-center gap-4">
                  <span className="block h-px w-6 bg-foreground/25 shrink-0" />
                  <span className="text-[10px] tracking-[0.35em] uppercase font-medium">
                    {name}
                  </span>
                </div>
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
            Ready to create memories of your own? I&apos;d love to hear your story.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase py-5 pr-8"
            >
              Book a session
              <span className="block h-px w-8 bg-current opacity-50 transition-all duration-300 group-hover:w-14 group-hover:opacity-80" />
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
}

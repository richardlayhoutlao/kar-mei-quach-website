"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, ease, delay },
  };
}

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center w-full min-h-[calc(100vh-7rem)] bg-transparent pt-4 pb-8">
      <motion.div
        className="flex items-center justify-center w-full"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image
          src="/Homepage-idmg.png"
          alt="Hero"
          width={2400}
          height={1792}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          className="w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl h-auto 2xl:pt-20"
          priority
        />
      </motion.div>
      <div className="flex flex-col items-center mt-6">
        <div className="flex flex-col items-center px-6 text-center text-foreground md:px-16 lg:px-24">
          <motion.h2
            className="mb-4 text-[10px] font-medium tracking-[0.25em] uppercase sm:text-[11px] sm:tracking-[0.35em] whitespace-nowrap"
            {...fadeUp(0.6)}
          >
            Couples · Maternity · Family · Kids
          </motion.h2>

          <motion.h3
            className="mb-6 max-w-2xl text-4xl leading-[1.1] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-hey-eloise"
            {...fadeUp(0.85)}
          >
            When Vision Meets<br />Memories
          </motion.h3>


          <motion.div
            {...fadeUp(1.1)}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 py-3"
            >
              More About Me
              <span className="block h-px w-8 bg-muted-foreground/60 transition-all duration-500 group-hover:w-20 group-hover:bg-foreground" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

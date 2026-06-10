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
    <section className="relative h-[calc(100vh-7rem)] min-h-[600px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[900px] xl:min-h-[1000px] 2xl:min-h-[10vh] w-full overflow-hidden lg:h-[calc(100vh-15rem)] bg-transparent">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease }}
      >
        <Image
          src="/Homepage.png"
          alt="Hero"
          width={2400}
          height={1792}
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          className="absolute
          inset-0
          m-auto
          w-full
          pb-20
          sm:pb-0
          xl:pb-48
          2xl:pb-8
          max-w-sm
          sm:max-w-sm
          md:max-w-2xl
          lg:max-w-3xl
          xl:max-w-4xl
          2xl:max-w-7xl
          h-auto"
          priority
        />
      </motion.div>

      {/* <motion.div
        className="pointer-events-none absolute inset-x-0 top-16 bottom-0 bg-linear-to-t from-[#e8e4f4] via-[#e8e4f4]/30 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
      /> */}

      <div className="absolute inset-0 flex flex-col justify-end">
        <div className="flex flex-col items-center px-6 text-center text-foreground md:px-16 lg:px-24 pb-[13vh] md:pb-[9vh] lg:pb-[12vh] 2xl:pb-[3vh]">
          <motion.h2
            className="mb-5 text-[8px] font-medium tracking-[0.45em] uppercase sm:text-[10px]"
            {...fadeUp(0.6)}
          >
            Couples · Maternity · Family · Kids
          </motion.h2>

          <motion.h3
            className="mb-8 max-w-2xl text-3xl leading-[1.1] font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-hey-eloise"
            {...fadeUp(0.85)}
          >
            When Vision Meets<br />Memories
          </motion.h3>


          <motion.div
            {...fadeUp(1.1)}
          >
            <Link
              href="/about"
              className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase"
            >
              More About Me
              <span className="block h-px w-8 bg-white/50 transition-all duration-300 group-hover:w-14 group-hover:bg-white/80" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

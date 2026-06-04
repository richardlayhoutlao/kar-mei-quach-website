"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true },
    transition: { duration: 0.9, ease, delay },
  };
}

export function AboutSection() {
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
          About Me
        </motion.p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-32 2xl:gap-52 items-start">

          <motion.div
            className="relative aspect-[3/4] w-full overflow-hidden"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, ease, delay: 0.1 }}
          >
            <Image
              src="https://images-pw.pixieset.com/elementfield/PExza3G/Websiteself-portrait1-18abe0f5-1500.jpg"
              alt="Kar-Mei Quach"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-10 xl:whitespace-nowrap"
              {...fadeUp(0.2)}
            >
              Who Is<br />Kar-Mei Quach?
            </motion.h1>

            <motion.div className="space-y-6" {...fadeUp(0.35)}>
              <p className="text-sm text-muted-foreground leading-loose font-light">
                Kar-Mei is a children and family photographer. As a mother of
                three herself, she is drawn to the beauty of real life. She
                captures emotion, connection, and the in-between moments that
                often go unnoticed.
              </p>

              <p className="text-sm text-muted-foreground leading-loose font-light">
                Life with children is messy, chaotic, and full of heart. The
                most meaningful images aren&apos;t always posed. Sometimes a
                glance, a messy hug, or even a tear tells the story.
              </p>

              <p className="text-sm text-muted-foreground leading-loose font-light">
                With a background in optometry, she&apos;s trained to truly
                see; noticing subtle expressions, light, and detail.
              </p>
            </motion.div>

            <motion.div className="mt-12 pt-10 border-t border-border" {...fadeUp(0.5)}>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-3 text-[10px] tracking-[0.35em] uppercase"
              >
                View My Portfolio
                <span className="block h-px w-8 bg-current opacity-50 transition-all duration-300 group-hover:w-14 group-hover:opacity-80" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
  );
}

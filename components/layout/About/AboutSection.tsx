"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageCTA } from "@/components/layout/PageCTA";

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
    <>
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
              src="/Websiteself-portrait1-18abe0f5-1500.jpg"
              alt="Kar-Mei Quach"
              fill
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>

          <div className="flex flex-col justify-center">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight font-hey-eloise mb-10 leading-[1.0]"
             
              {...fadeUp(0.2)}
            >
              Who Is<br /><span className="font-light italic text-muted-foreground font-hey-eloise-watercolor">Kar-Mei Quach?</span>
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
                className="group inline-flex items-center gap-4 text-[10px] tracking-[0.4em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 py-5 pr-8"
              >
                View My Portfolio
                <span className="block h-px w-8 bg-muted-foreground/60 transition-all duration-500 group-hover:w-20 group-hover:bg-foreground" />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </main>
    <PageCTA eyebrow="About Kar-Mei." line1="The person" line2="Behind the lens." />
    </>
  );
}

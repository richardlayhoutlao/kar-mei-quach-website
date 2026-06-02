"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbox } from "@/components/ui/Lightbox";

const ease = [0.25, 0.1, 0.25, 1] as const;

const images = [
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_ChloeColour_Expand_Quach_CleanBG-95d67773-1500.jpg",
    alt: "Portrait of Chloe",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_KenjiColour_Quach_CleanBG-b560c226-1500.jpg",
    alt: "Portrait of Kenji",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_AylaColour_Quach_CleanBG-f7eb4f06-1500.jpg",
    alt: "Portrait of Ayla",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_JayceColour_Quach_CleanBG-055ccdf5-1500.jpg",
    alt: "Portrait of Jayce",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_KittyColour_Quach_CleanBG-a1fc63e1-1500.jpg",
    alt: "Portrait of Kitty",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_ThomasColor_Quach_CleanedBG-842f3eb0-1500.jpg",
    alt: "Portrait of Thomas",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_LiliaColour_Expand_Quach_CleanBG-25ea78a0-1500.jpg",
    alt: "Portrait of Lilia",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/W26_PC_Portfolio_MilanaColour2_Quach_CleanBG-d75dfa53-1500.jpg",
    alt: "Portrait of Milana",
  },
  {
    src: "https://images-pw.pixieset.com/elementfield/pyKnnRX/Lucas2915-7698bc43-1500.jpg",
    alt: "Portrait of Lucas",
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
      <main className="px-8 md:px-16 lg:px-24 xl:px-48 pt-4 md:pt-8 xl:pt-10 pb-20 md:pb-32 xl:pb-56">
        <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">

          <motion.p
            className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-medium mb-10 md:mb-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            Portfolio — Kids
          </motion.p>

          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight max-w-lg mb-16 md:mb-24"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
          >
            Little Ones,<br />Big Moments.
          </motion.h1>

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

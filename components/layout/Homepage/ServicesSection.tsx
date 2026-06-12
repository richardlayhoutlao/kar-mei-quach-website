"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HeartHandshake, Baby, Home, Smile, type LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    icon: HeartHandshake,
    title: "Couples",
    description:
      "Focused on real connection and emotion, these sessions are designed to feel natural. I capture moments that reflect warmth, intimacy, and timelessness.",
    href: "/portfolio/couple",
  },
  {
    icon: Baby,
    title: "Maternity",
    description:
      "Maternity sessions are calm, natural, and deeply personal. The goal is to create soft and heartfelt images showcasing excitement and anticipation.",
    href: "/portfolio/maternity",
  },
  {
    icon: Home,
    title: "Family",
    description:
      "Family sessions are relaxed and guided by real interaction rather than poses. I capture natural moments of laughter, movement, and interaction. The result is timeless images that reflect your family as they truly are.",
    href: "/portfolio/family",
  },
  {
    icon: Smile,
    title: "Kids",
    description:
      "Kids sessions are candid, playful, and guided by their energy. By allowing space for curiosity and their personality to shine, I capture authentic expressions and moments that feel true to who they are.",
    href: "/portfolio/kids",
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.22,
    },
  },
};

const ease = [0.25, 0.1, 0.25, 1] as const;

const cardVariant = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease },
  },
};

export function ServicesSection() {
  return (
    <section className="px-8 md:px-16 lg:px-24 xl:px-48 py-20 md:py-32">
      <div className="max-w-5xl xl:max-w-screen-2xl mx-auto">
        <motion.div
          className="mb-10 md:mb-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <h1 className="text-[10px] tracking-[0.5em] uppercase text-muted-foreground font-medium mb-4">
            What I Do
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight font-hey-eloise leading-none">
            Photography for life's<br /> <span className="font-light italic text-muted-foreground font-hey-eloise-watercolor">real moments.</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {services.map(({ icon: Icon, title, description, href }, i) => (
            <motion.div key={title} variants={cardVariant}>
              <FeatureCard
                title={title}
                description={description}
                Icon={Icon}
                index={i}
                href={href}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

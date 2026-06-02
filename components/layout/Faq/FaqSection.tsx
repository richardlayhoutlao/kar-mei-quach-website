"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ease = [0.25, 0.1, 0.25, 1] as const;

const faqs = [
  {
    question: "How should we dress for our family session?",
    answer: [
      "Similar colour palette is more pleasing to the eye and it stands the test of time.",
      "Don't worry; I will share a check-list a few days before the shoot.",
    ],
  },
  {
    question: "What's the best time to have a session with kids?",
    answer: [
      "Mornings are the best. Afternoons are great. We should take advantage of kids' high energy.",
      "At the end of the day, we are all tired. Evenings should be overall avoided.",
    ],
  },
  {
    question: "When is the best time to do a maternity photoshoot?",
    answer: [
      "The ideal time frame is between 5-7 months of pregnancy.",
      "During that time, the belly is usually in a nice round shape and future mommy can still easily move around.",
    ],
  },
  {
    question: "How long is a shoot?",
    answer: [
      "In average, a photoshoot is around 1-1.5h.",
      "More than that, the magic is gone already.",
    ],
  },
  {
    question: "When can we expect to receive the photos?",
    answer: [
      "Depending on the work volume that i have, I usually aim to deliver within 1-2 months from the photoshoot.",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export function FaqSection() {
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
          FAQ
        </motion.p>

        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-16 md:mb-24 max-w-xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          Good questions.
        </motion.h1>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
        >
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map(({ question, answer }) => (
              <motion.div key={question} variants={itemVariant}>
                <AccordionItem value={question} className="border-b border-border">
                  <AccordionTrigger className="py-7 md:py-8 text-sm md:text-base font-medium tracking-tight text-left no-underline hover:no-underline [&:hover]:no-underline group/trigger cursor-pointer">
                    {question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 md:pb-8">
                    <div className="text-sm text-muted-foreground font-light space-y-1.5">
                      {answer.map((sentence, i) => (
                        <p key={i} className="leading-relaxed">{sentence}</p>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          className="mt-20 md:mt-28 pt-10 border-t border-border"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease, delay: 0.1 }}
        >
          <p className="text-sm text-muted-foreground font-light leading-loose max-w-md">
            Still have questions? I&apos;d be happy to chat before you book.
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

"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PageCTA } from "@/components/layout/PageCTA";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ease = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 } as const,
    viewport: { once: true },
    transition: { duration: 0.9, ease, delay },
  };
}

function FloatingField({
  label,
  name,
  type = "text",
  textarea = false,
  value,
  onChange,
  delay,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  delay: number;
}) {
  const [focused, setFocused] = useState(false);
  const lifted = focused || value.length > 0;

  return (
    <motion.div className="relative pb-1" {...fadeUp(delay)}>
      <label
        className={cn(
          "absolute left-0 text-[10px] tracking-[0.2em] uppercase transition-all duration-300 pointer-events-none select-none",
          lifted ? "top-0 opacity-50" : "top-[1.4rem] opacity-40"
        )}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          name={name}
          rows={5}
          required
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full pt-7 pb-3 bg-transparent text-sm font-light resize-none outline-none border-b transition-colors duration-300",
            focused ? "border-foreground/60" : "border-border"
          )}
        />
      ) : (
        <input
          type={type}
          name={name}
          required={name !== "subject"}
          value={value}
          onChange={onChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cn(
            "w-full pt-7 pb-3 bg-transparent text-sm font-light outline-none border-b transition-colors duration-300",
            focused ? "border-foreground/60" : "border-border"
          )}
        />
      )}
    </motion.div>
  );
}

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFields((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_KEY,
          ...fields,
        }),
      });
      const data = await res.json();
      if (!data.success) throw new Error();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

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
          Contact
        </motion.p>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-32 2xl:gap-52 items-start">

          <div>
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight font-hey-eloise mb-10 leading-[1.0]"
             
              {...fadeUp(0.2)}
            >
              Let&apos;s Work<br /><span className="font-light italic text-muted-foreground font-hey-eloise-watercolor">Together.</span>
            </motion.h1>

            <motion.div className="space-y-6" {...fadeUp(0.35)}>
              <p className="text-sm text-muted-foreground leading-loose font-light">
                I&apos;d love to hear about your family, your vision, and the
                story you want to tell. Every session is personal — let&apos;s
                talk about what matters most to you.
              </p>
              <p className="text-sm text-muted-foreground leading-loose font-light">
                Fill out the form or reach out directly. I&apos;ll be in touch
                within one to two business days.
              </p>
            </motion.div>

            <motion.div
              className="mt-12 pt-10 border-t border-border"
              {...fadeUp(0.5)}
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 mb-5">
                Email directly
              </p>
              <Link
                href="mailto:info@karmeiquach.com"
                className="group inline-flex items-center gap-3 text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300 py-5 pr-8"
              >
                info@karmeiquach.com
                <span className="block h-px w-8 bg-current opacity-40 transition-all duration-300 group-hover:w-14 group-hover:opacity-70" />
              </Link>
            </motion.div>
          </div>

          <div>
            {status === "sent" ? (
              <motion.div
                className="pt-2"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
              >
                <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/60 mb-5">
                  Message sent
                </p>
                <p className="text-sm text-muted-foreground leading-loose font-light max-w-xs">
                  Thank you, {fields.name}. I&apos;ll be in touch within one to
                  two business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <FloatingField
                  label="Name"
                  name="name"
                  value={fields.name}
                  onChange={handleChange("name")}
                  delay={0.25}
                />
                <FloatingField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={fields.email}
                  onChange={handleChange("email")}
                  delay={0.35}
                />
                <FloatingField
                  label="Subject"
                  name="subject"
                  value={fields.subject}
                  onChange={handleChange("subject")}
                  delay={0.43}
                />
                <FloatingField
                  label="Message"
                  name="message"
                  textarea
                  value={fields.message}
                  onChange={handleChange("message")}
                  delay={0.51}
                />

                {status === "error" && (
                  <p className="text-[10px] tracking-[0.15em] uppercase text-destructive">
                    Something went wrong. Please try again.
                  </p>
                )}

                <motion.div {...fadeUp(0.62)}>
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full text-foreground/60 hover:text-foreground text-[10px] tracking-[0.35em] uppercase font-light py-5 px-8 transition-all duration-300 disabled:opacity-40 cursor-pointer bg-[#e8e4f4] dark:bg-transparent dark:border dark:border-foreground/30 dark:hover:bg-foreground/10"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>
                </motion.div>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
    <PageCTA line1="Let's Work" line2="Together." />
    </>
  );
}

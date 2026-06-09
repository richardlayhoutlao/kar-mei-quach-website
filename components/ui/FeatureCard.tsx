import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  index: number;
  href?: string;
}

export function FeatureCard({ title, description, Icon, index, href }: FeatureCardProps) {
  const isLeft = index % 2 === 0;
  const isBottom = index >= 2;
  const hasMobileTopBorder = index === 1;

  const className = cn(
    "group block border-border pt-8 pb-12 md:py-12",
    href ? "cursor-pointer" : "cursor-default",
    isBottom && "border-t",
    hasMobileTopBorder && "border-t md:border-t-0",
    isLeft ? "md:pr-16 md:border-r" : "md:pl-16",
  );

  const inner = (
    <>
      <div className="flex items-center gap-2.5 mb-4">
        <Icon size={18} className="text-muted-foreground/40 transition-colors duration-300 group-hover:text-foreground" />
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-foreground">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground leading-loose font-light transition-colors duration-300 group-hover:text-foreground/70">
        {description}
      </p>
    </>
  );

  if (href) {
    return <Link href={href} className={className}>{inner}</Link>;
  }

  return <div className={className}>{inner}</div>;
}

import { type LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  isBottom?: boolean;
  isLeft?: boolean;
}

export function FeatureCard({ title, description, Icon, isBottom, isLeft }: FeatureCardProps) {
  return (
    <div
      className={`group border-border pt-8 pb-12 md:py-12 cursor-default${isBottom ? " border-t" : ""}${isLeft ? " md:pr-16 md:border-r" : " md:pl-16"}`}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <Icon size={18} className="text-muted-foreground/40 transition-colors duration-300 group-hover:text-foreground" />
        <h2 className="text-xl md:text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-foreground">{title}</h2>
      </div>
      <p className="text-sm text-muted-foreground leading-loose font-light transition-colors duration-300 group-hover:text-foreground/70">
        {description}
      </p>
    </div>
  );
}

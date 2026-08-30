import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
      <h2 className="display-title text-[clamp(2rem,4vw,3.25rem)] text-pacific">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
          {intro}
        </p>
      ) : null}
    </div>
  );
}

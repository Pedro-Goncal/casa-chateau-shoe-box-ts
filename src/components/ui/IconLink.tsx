import { cn } from "@/lib/cn";

type IconComponent = React.ComponentType<{ className?: string }>;

type IconLinkProps = {
  href: string;
  label: string;
  description?: string;
  icon: IconComponent;
  external?: boolean;
  className?: string;
};

export function IconLink({
  href,
  label,
  description,
  icon: Icon,
  external = false,
  className,
}: IconLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "group flex h-full items-center gap-4 rounded-[1.35rem] border border-sand/80 bg-surface/90 px-6 py-5 transition hover:-translate-y-0.5 hover:border-adobe/35 hover:shadow-[0_18px_40px_rgba(42,35,30,0.08)]",
        className,
      )}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-adobe/10">
        <Icon
          className="h-5 w-5 text-adobe transition group-hover:scale-110"
          aria-hidden="true"
        />
      </span>
      <div>
        <p className="display-title text-xl text-pacific">{label}</p>
        {description ? (
          <p className="mt-1 text-sm text-muted">{description}</p>
        ) : null}
      </div>
    </a>
  );
}

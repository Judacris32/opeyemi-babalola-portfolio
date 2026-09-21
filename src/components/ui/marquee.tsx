import { resolveTechIcon } from "@/data/skill-icons";

export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-white/15 bg-gradient-to-br from-[oklch(62.3%_0.214_259.815)] to-[oklch(34%_0.15_259.815)] py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[oklch(62.3%_0.214_259.815)] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[oklch(34%_0.15_259.815)] to-transparent sm:w-32" />

      {/* `marquee-track` (defined in globals.css) drives the scroll and only
          pauses on hover for devices with real hover -- on touchscreens a
          tap can't "unhover", so pausing there would leave it stuck. */}
      <div className="group flex w-max items-center gap-10 marquee-track">
        {loop.map((skill, i) => {
          const { icon: Icon } = resolveTechIcon(skill);
          return (
            <span
              key={`${skill}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-lg font-medium tracking-wide text-white/90 sm:text-xl"
            >
              <Icon className="h-5 w-5 shrink-0 text-[oklch(82.8%_0.189_84.429)] sm:h-6 sm:w-6" />
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
}

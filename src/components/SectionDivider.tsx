/**
 * SVG wave divider placed between sections to create
 * clear, elegant visual separation with multiple peaks and valleys.
 */

type Color = "white" | "slate" | "primary";

const colorMap: Record<Color, string> = {
  white: "#ffffff",
  slate: "#f1f5f9",   // slate-100
  primary: "#1e3a5f",
};

const bgMap: Record<Color, string> = {
  white: "bg-white",
  slate: "bg-slate-100",
  primary: "bg-primary",
};

export function SectionDivider({
  from,
  to,
  flip = false,
}: {
  from: Color;
  to: Color;
  flip?: boolean;
}) {
  const fillColor = colorMap[to];
  const bgColor = bgMap[from];

  return (
    <div className={`${bgColor} relative -mb-px`} aria-hidden="true">
      <svg
        className={`w-full h-14 sm:h-20 block ${flip ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 40C120 60 240 70 360 50C480 30 600 10 720 30C840 50 960 70 1080 50C1200 30 1320 20 1440 40V80H0V40Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

/**
 * Curved SVG wave dividers placed between sections to create
 * clear, elegant visual separation.
 *
 * Usage:
 *   <SectionDivider from="white" to="slate" />
 *   <SectionDivider from="slate" to="white" variant="curve" />
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
  variant = "wave",
  flip = false,
}: {
  from: Color;
  to: Color;
  variant?: "wave" | "curve" | "tilt";
  flip?: boolean;
}) {
  const fillColor = colorMap[to];
  const bgColor = bgMap[from];

  if (variant === "tilt") {
    return (
      <div className={`${bgColor} relative`} aria-hidden="true">
        <svg
          className={`w-full h-8 sm:h-12 block ${flip ? "scale-x-[-1]" : ""}`}
          viewBox="0 0 1440 48"
          preserveAspectRatio="none"
          fill="none"
        >
          <path d="M0 0L1440 48H0V0Z" fill={fillColor} />
        </svg>
      </div>
    );
  }

  if (variant === "curve") {
    return (
      <div className={`${bgColor} relative`} aria-hidden="true">
        <svg
          className={`w-full h-10 sm:h-16 block ${flip ? "scale-x-[-1]" : ""}`}
          viewBox="0 0 1440 64"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 0C480 64 960 64 1440 0V64H0V0Z"
            fill={fillColor}
          />
        </svg>
      </div>
    );
  }

  // wave (default)
  return (
    <div className={`${bgColor} relative`} aria-hidden="true">
      <svg
        className={`w-full h-10 sm:h-16 block ${flip ? "scale-x-[-1]" : ""}`}
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 32C240 56 480 64 720 48C960 32 1200 8 1440 32V64H0V32Z"
          fill={fillColor}
        />
      </svg>
    </div>
  );
}

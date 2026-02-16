"use client";

import { useReveal } from "../hooks/useReveal";
import { useCountUp } from "../hooks/useCountUp";

type Props = {
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
};

export default function StatCard({
  value,
  label,
  suffix = "",
  delay = 0,
}: Props) {
  const { ref, visible } = useReveal(delay);
  const count = useCountUp(value, 1800, visible);

  const format = (num: number) => {
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out
        hover:-translate-y-2 hover:shadow-lg
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
      `}
    >
      <h4 className="text-5xl font-bold text-gray-900">
        {format(count)}
        {suffix}
      </h4>
      <p className="text-lg font-semibold text-gray-800">{label}</p>
    </div>
  );
}

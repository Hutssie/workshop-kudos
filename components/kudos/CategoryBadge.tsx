import type { KudosCategory } from "@prisma/client";
import { CATEGORY_LABELS, CATEGORY_COLORS } from "@/lib/categories";

interface CategoryBadgeProps {
  category: KudosCategory;
  className?: string;
}

export function CategoryBadge({ category, className = "" }: CategoryBadgeProps) {
  const label = CATEGORY_LABELS[category];
  const color = CATEGORY_COLORS[category];

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium text-white ${className}`}
      style={{ backgroundColor: color }}
    >
      {label}
    </span>
  );
}

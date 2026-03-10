import type { KudosCategory } from "@prisma/client";

export const CATEGORY_OPTIONS: KudosCategory[] = [
  "TeamPlayer",
  "GreatWork",
  "Helpful",
  "Innovation",
  "Leadership",
  "PositiveAttitude",
];

export const CATEGORY_LABELS: Record<KudosCategory, string> = {
  TeamPlayer: "Team Player",
  GreatWork: "Great work",
  Helpful: "Helpful",
  Innovation: "Innovation",
  Leadership: "Leadership",
  PositiveAttitude: "Positive Attitude",
};

export const CATEGORY_COLORS: Record<KudosCategory, string> = {
  TeamPlayer: "#6955cd",
  GreatWork: "#357d1c",
  Helpful: "#5b6880",
  Innovation: "#271a60",
  Leadership: "#49a628",
  PositiveAttitude: "#8d80dd",
};

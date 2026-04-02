export type Question = {
  id: string;
  question: string;
  options: string[];
};

export type PlacementResult = {
  status: "processing" | "completed";
  score?: number;
  level?: string;
  certificateUrl?: string;
};

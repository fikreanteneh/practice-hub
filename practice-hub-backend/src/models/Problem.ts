type Difficulty = "Easy" | "Medium" | "Hard";

export type Problem = {
  Id: string;
  CreatedAt: string;
  Title: string;
  Tags: string[];
  Difficulty: Difficulty;
  Question: Record<string, unknown>; // JSON object type
  Solution?: Record<string, unknown> | null; // Optional JSON object type
  Choices: string[];
  LikeCount: number;
  DislikeCount: number;
  FavouriteCount: number;
  SolveCount: number;
};

export type ProblemCreate = {
  Title: string;
  Tags: string[];
  Difficulty: Difficulty;
  Question: Record<string, unknown>; // JSON object type
  Solution?: Record<string, unknown> | null; // Optional JSON object type
  Choices: string[];
};

export type ProblemUpdate = {
  Id: string;
  Title: string;
  Tags: string[];
  Difficulty: Difficulty;
  Question: Record<string, unknown>; // JSON object type
  Solution?: Record<string, unknown> | null; // Optional JSON object type
  Choices: string[];
};

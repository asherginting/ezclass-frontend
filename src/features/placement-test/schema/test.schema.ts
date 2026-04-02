import { z } from "zod";

export const testSchema = z.object({
  answers: z.record(z.string(), z.string()),
});

export type TestFormValues = z.infer<typeof testSchema>;

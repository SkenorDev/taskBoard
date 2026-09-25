import { z } from "zod";

const testStepCreateSchema = z
  .object({
    position: z.number().int().positive(),
    action: z.string().trim().min(1, "Action is required"),
    expectedOutcome: z
      .string()
      .trim()
      .min(1, "Expected outcome is required"),
  })
  .strict();

export const testCaseCreateSchema = z
  .object({
    title: z.string().trim().min(1, "Title is required"),
    feature: z.string().trim().min(1, "Feature is required"),
    preconditions: z.string().trim().min(1).nullable().optional(),
    steps: z
      .array(testStepCreateSchema)
      .min(1, "At least one test step is required"),
    expectedResult: z.string().trim().min(1, "Expected result is required"),
    actualResult: z.string().trim().min(1).nullable().optional(),
    priority: z.enum(["Low", "Medium", "High"]).default("Medium"),
    status: z
      .enum(["Not Run", "Pass", "Fail", "Blocked", "Skipped"])
      .default("Not Run"),
  })
  .strict()
  .superRefine(({ steps }, context) => {
    const positions = new Set<number>();

    steps.forEach((step, index) => {
      if (positions.has(step.position)) {
        context.addIssue({
          code: "custom",
          message: "Step positions must be unique",
          path: ["steps", index, "position"],
        });
      }

      positions.add(step.position);
    });
  });

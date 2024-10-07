import { z } from 'zod';

export const MultiplySchema = z.object({
  num1: z.number(),
  num2: z.number(),
});

export type MultiplySchemaType = z.infer<typeof MultiplySchema>;

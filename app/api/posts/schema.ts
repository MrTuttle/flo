// app/api/posts/schema.ts

import { z } from "zod";

const schema = z.object({
  title: z.string().min(3),
  description: z.string().min(3),
  // price: z.number().min(1).max(100),
  // age: z.number(),
  // categories: z.array(z.string()),
});
export default schema;

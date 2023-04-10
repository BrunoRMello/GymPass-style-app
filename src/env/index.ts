import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  NODE_ENV: z.enum(["dev", "test", "production"]).default("dev"),
  PORT: z.coerce.number().default(3333),
});

// Validar se process.env tem as variáveis.
const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("✖️ Invalid environment variable", _env.error.format());

  throw new Error("Invalid environment variable");
}

export const env = _env.data;

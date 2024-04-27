import { createEnv } from "@t3-oss/env-core"
import { z } from "zod"

export const env = createEnv({
  server: {
    PORT: z.coerce.number().int().positive().min(1).max(65535),
    DIR: z.string().min(1),
    CONFIG: z.string().min(1),
    HOST: z.string().min(1),
  },
  runtimeEnv: process.env,
})

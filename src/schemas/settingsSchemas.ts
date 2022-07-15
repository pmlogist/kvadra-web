import { z } from "zod";

export type RequestSettingsAllBody = z.infer<typeof all>;

const all = z.object({
  learning: z.enum(["en", "fr", "ru"]),
  locale: z.enum(["en", "fr", "ru"]),
});

export const settingsSchemas = { all };

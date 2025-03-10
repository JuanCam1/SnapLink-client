import { z } from "zod";

export const createLinkSchema = z.object({
  url_link: z.string()
    .url({
      message: "Enlace invalido",
    }),
  description_url: z
    .optional(
      z.string()
        .min(6, {
          message: "La descripción debe tener al menos 6 caracteres",
        }).max(500, {
          message: "La descripción debe tener menos de 500 caracteres",
        }),
    ),
  status_link: z.enum(["ACTIVE", "INACTIVE"]),


})
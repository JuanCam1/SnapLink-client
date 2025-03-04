import { z } from "zod";

export const createLinkSchema = z.object({
  url_link: z.string()
    .email({
      message: "Correo invalido",
    }),
  description_url: z
    .optional(
      z.string()
        .min(6, {
          message: "La contraseña debe tener al menos 6 caracteres",
        }).max(12, {
          message: "La contraseña debe tener menos de 12 caracteres",
        }),
    ),
  status_link: z.enum(["ACTIVE", "INACTIVE"]),


})
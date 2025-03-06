import { z } from "zod";

export const registerSchema = z.object({
  email: z.string().email({
    message: "Correo invalido",
  }),
  password: z.string().min(6, {
    message: "La contraseña debe tener al menos 6 caracteres",
  }).max(12, {
    message: "La contraseña debe tener menos de 12 caracteres",
  }),
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }).max(30, {
    message: "El nombre debe tener menos de 30 caracteres",
  }),

})
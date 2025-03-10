import type { z } from "zod";
import type { createLinkSchema } from "../schemas/create-link-schema";
import { config } from "@/utils/config";

const id_user = 1;
export const createLinkService = async (values: z.infer<typeof createLinkSchema>) => {
  const payload = JSON.stringify({
    userId: id_user,
    ...values,
  });

  const pathUrl = `${config.BASE_URL}/link`;

  const response = await fetch(pathUrl, {
    method: "POST",
    body: payload,
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}


export const changeStatusLinkService = async (id: string) => {
  const response = await fetch(`${config.BASE_URL}/link/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response;
}
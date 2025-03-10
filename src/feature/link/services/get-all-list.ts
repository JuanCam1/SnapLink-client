import { config } from "@/utils/config";
import type { LinksI } from "../model/list-link-model";

export const getAllListService = async (userId: number, page: number, pageSize: number): Promise<LinksI[]> => {
  const payload = JSON.stringify({
    page,
    pageSize
  })
  try {
    const pathUrl = `${config.BASE_URL}/link/user/${userId}`;
    const response = await fetch(pathUrl, {
      method: "POST",
      body: payload,
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch links");
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }

}
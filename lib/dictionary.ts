import { enDictionary } from "@/dictionaries/en";
import { trDictionary } from "@/dictionaries/tr";

export type Locale = "en" | "tr";

export const getDictionary = (locale: Locale) => {
  if (locale === "tr") {
    return trDictionary;
  }
  return enDictionary;
};

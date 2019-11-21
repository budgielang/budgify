import { Budgie } from "budgie";

export type BudgifySettings = {
  language: string;
  text: string;
}

export default async (language: string, text: string): Promise<string[]> => {
  return new Budgie(language).convert(text.split(/\r\n|\r|\n/));
}

import { initialData } from "@/config/static";
import { atom } from "jotai";

export interface IFormAtom {
  name: string;
  date: IDate;
  description: string;
}
export interface IDate {
  year: number | null;
  month: number | null;
  day: number | null;
}
export interface IFadeInOutAtom {
  fadeIn: boolean;
  fadeOut: boolean;
}
export const formAtom = atom<IFormAtom>({
  ...initialData,
});

export const fadeInOutAtom = atom<IFadeInOutAtom>({
  fadeIn: false,
  fadeOut: false,
});

export const animationAtom = atom<boolean>(false);

import { atom } from "jotai";
import { formAtom } from "./useAtom";
import { convertChinese, getEra } from "@/util";

export interface IEraData {
  eraName?: string;
  eraYear?: number;
  eraMonth?: string;
  eraDay?: string;
}

export const convertEra = atom((get) => {
  const { date } = get(formAtom);

  const obj: IEraData = {
    eraName: getEra(date)?.eraName,
    eraYear: getEra(date)?.eraYear,
    eraMonth: convertChinese(date.month),
    eraDay: convertChinese(date.day),
  };

  return obj;
});

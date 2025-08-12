import type { IDate } from "@/atom/useAtom";
import { ERAS } from "@/config/static";
import dayjs from "dayjs";

export const getEra = (date: IDate) => {
  const { year, month, day } = date;
  if (year == null || month == null || day == null) return;
  const fullday = dayjs(`${year}-${month}-${day}`);

  let eraIndex = ERAS.length - 1;
  for (let i = 0; i < ERAS.length; i++) {
    if (fullday.isBefore(ERAS[i].start)) {
      eraIndex = i - 1;
      break;
    }
  }
  if (eraIndex < 0) return;
  const era = ERAS[eraIndex];
  return { eraName: era.name, eraYear: year - era.start.year() + 1 };
};

export const convertChinese = (num: number | null | undefined) => {
  if (!num) return;
  const hanjaNumbers = [
    "零", //0
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
  ];
  if (num < 10) return hanjaNumbers[num];

  const splitNum = num.toString().split("").map(Number);
  if (splitNum.length == 2) {
    const [tens, ones] = splitNum;
    if (tens == 1) return "十" + hanjaNumbers[ones];

    let result = hanjaNumbers[tens] + "十";
    if (ones > 0) {
      result += hanjaNumbers[ones];
    }
    return result;
  }
  return "";
};

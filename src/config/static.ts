import dayjs from "dayjs";

export const mobilePoint = 768;

/**era */
export const startYear = 1869;
export const ERAS = [
  { name: "meiji", start: dayjs("1868-01-01") },
  { name: "taisho", start: dayjs("1912-07-30") },
  { name: "showa", start: dayjs("1926-12-25") },
  { name: "heisei", start: dayjs("1989-01-08") },
  { name: "reiwa", start: dayjs("2019-01-01") },
];

export const initialData = {
  name: "",
  date: { year: null, month: null, day: null },
  description: "",
};

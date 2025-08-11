import { formAtom } from "@/atom/useAtom";
import { startYear } from "@/config/static";
import dayjs from "dayjs";
import { useAtomValue } from "jotai";
import { useMemo } from "react";
export interface IDateOption {
  value: number;
  label: string;
}

export const useDate = () => {
  const formData = useAtomValue(formAtom);
  const { year: selectYear, month: selectMonth } = formData.date;

  const getLastDayOfMonth = (year: number, month: number) => {
    return dayjs(`${year}-${month}`, "YYYY-M").daysInMonth();
  };

  const yearOption = useMemo(() => {
    const thisYear = new Date().getFullYear();
    return Array.from({ length: thisYear - startYear + 1 }, (_, i: any) => ({
      value: i + startYear,
      label: `${i + startYear}`,
    })).reverse();
  }, []);

  const monthOption = useMemo(
    () =>
      Array.from({ length: 12 }, (_, i) => ({
        value: i + 1,
        label: `${i + 1}`,
      })),
    []
  );

  const dayOption = useMemo(
    () =>
      selectYear && selectMonth
        ? Array.from(
            { length: getLastDayOfMonth(selectYear, selectMonth) },
            (_, i) => ({
              value: i + 1,
              label: `${i + 1}`,
            })
          )
        : [],
    [selectYear, selectMonth]
  );

  return { yearOption, monthOption, dayOption };
};

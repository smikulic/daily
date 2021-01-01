import { DateUtils } from "react-day-picker";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

export const DATE_FORMAT = "dd MMM";

export const formatHours = (hourValue) => {
  let newDate = new Date(0);
  newDate.setSeconds(hourValue * 60 * 60); // minutes * seconds
  return newDate.toISOString().substr(11, 5);
};

export const parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
};

export const formatDate = (date, format, locale) => {
  return dateFnsFormat(date, format, { locale });
};

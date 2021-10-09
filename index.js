import { EASTER_WEEK_HOLIDAYS, HOLIDAYS } from "./holidays.js";
import {
  MILLISECONDS_DAY,
  butcherAlgorithm,
  getFormattedDate,
  nextDay
} from "./dateUtils.js";

const colombianHolidaysByYear = (year = new Date().getFullYear()) => {
  // validate years in range 1970 - 9999
  const validYear = /^(19[789]\d|[2-9]\d{3})$/.test(year);

  if (!validYear) {
    throw new Error(`A year was not provided or is invalid`);
  }

  const normalHolidays = HOLIDAYS.map((holiday) => ({
    holiday: nextDay(`${year}/${holiday.shortDate}`, holiday.daysToSum),
    celebrationDay: `${year}/${holiday.shortDate}`,
    holidayName: holiday.holidayName
  }));

  const sunday = new Date(butcherAlgorithm(year));

  const easterWeekHolidays = EASTER_WEEK_HOLIDAYS.map((ewHoliday) => {
    const day = new Date(sunday.getTime() + ewHoliday.offset * MILLISECONDS_DAY);

    return {
      holiday: nextDay(
        getFormattedDate(
          day.getUTCFullYear(),
          day.getUTCMonth() + 1,
          day.getUTCDate()
        ),
        ewHoliday.daysToSum
      ),
      celebrationDay: getFormattedDate(
        day.getUTCFullYear(),
        day.getUTCMonth() + 1,
        day.getUTCDate()
      ),
      holidayName: ewHoliday.holidayName
    };
  });

  return [...normalHolidays, ...easterWeekHolidays].sort((a, b) => {
    return new Date(a.holiday) - new Date(b.holiday);
  });
};

export default colombianHolidaysByYear;

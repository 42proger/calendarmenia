import { getWesternEaster } from "easter-date.js";

function formatDate(date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  return `${day}.${month}`;
}

function dateCalc(date, days) {
  const adjustedDate = new Date(date);
  adjustedDate.setDate(adjustedDate.getDate() + days);
  return adjustedDate;
}

export function calculateHolidays(year) {
  const easterDate = getWesternEaster(year);
  const easter = new Date(
    easterDate.year,
    easterDate.month - 1,
    easterDate.day
  );

  const holidays = {
    easter,
    sarkisDay: dateCalc(easter, -64),
    vardanankDay: dateCalc(easter, -52),
    maslenitsaDay: dateCalc(easter, -49),
    ripsimeDay: dateCalc(easter, 57),
    echmiadzinDay: dateCalc(easter, 63),
    vardavarDay: dateCalc(easter, 98),
    grapesDay: new Date(easter.getFullYear(), 7, 15),
    translatorDay: new Date(easter.getFullYear(), 8, 9),
  };

  holidays.grapesDay.setDate(
    holidays.grapesDay.getDate() + (holidays.grapesDay.getDay() >= 4 
      ? 7 - holidays.grapesDay.getDay() 
      : -holidays.grapesDay.getDay())
  );

  holidays.translatorDay.setDate(
    holidays.translatorDay.getDate() +
      ((6 - holidays.translatorDay.getDay()) % 7)
  );

  Object.keys(holidays).forEach((key) => {
    holidays[key] = { ...holidays[key], date: formatDate(holidays[key]) };
  });

  return holidays;
}

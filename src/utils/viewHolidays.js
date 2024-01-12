import { ref, onMounted, watch } from "vue";
import store from "../store/index.js";
import { calculateHolidays } from "../utils/calculateHolidays.js";

export default function useViewHolidays(holidaysData) {
  const inputYear = ref(store.state.inputYear);
  const holidays = ref([]);
  let cachedHolidays = {};

  onMounted(() => {
    updateHolidays();
  });

  watch(
    () => store.state.inputYear,
    (newValue) => {
      inputYear.value = newValue;
      updateHolidays();
    }
  );

  const calculateHolidayDate = (holidayId) => {
    const year = parseInt(inputYear.value);
    if (!cachedHolidays[year]) {
      cachedHolidays[year] = calculateHolidays(year);
    }
    return cachedHolidays[year][holidayId]?.date || "";
  };

  const updateHolidays = () => {
    const year = parseInt(inputYear.value);
    if (!cachedHolidays[year]) {
      cachedHolidays[year] = calculateHolidays(year);
    }

    const mergedHolidays = holidaysData.map((holiday) => ({
      ...holiday,
      date:
        holiday.date === "" ? calculateHolidayDate(holiday.id) : holiday.date,
    }));

    mergedHolidays.sort((a, b) => {
      const getDateValue = (date) => {
        if (!date) return Infinity;
        const [day, month] = date.split(".").map(Number);
        return month * 100 + day;
      };
      return getDateValue(a.date) - getDateValue(b.date);
    });
    holidays.value = mergedHolidays;
  };

  const isHolidayPassed = (holidayDate) => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();
    const isCurrentYear = currentYear === parseInt(inputYear.value);

    if (isCurrentYear && holidayDate) {
      const [day, month] = holidayDate.split(".").map(Number);
      if (
        month < currentMonth ||
        (month === currentMonth && day < currentDay)
      ) {
        return true;
      }
    }
    return false;
  };

  return { holidays, isHolidayPassed };
}

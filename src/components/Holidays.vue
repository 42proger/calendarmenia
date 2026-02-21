<script setup>
import useViewHolidays from "../utils/viewHolidays.js";
import { useI18n } from "vue-i18n";

const { holidaysData } = defineProps(["holidaysData"]);
const { holidays, isHolidayPassed } = useViewHolidays(holidaysData);
const { t } = useI18n({ useScope: "global" });

const getHolidayTitle = (holiday) => {
  return t(`holidayTitles.${holiday.id}`);
};

const getHolidayDescription = (holiday) => {
  return t(`holidayDescriptions.${holiday.id}`);
};
</script>

<template>
  <article
    v-for="(holiday, index) in holidays"
    :key="index"
    :class="['relative', 'flex', 'flex-row', 'justify-between', 'p-5', 'w-full', 'bg-sky-950', 'text-white', 'rounded', 'shadow-secondary-1', {'order-1 opacity-80 first:mt-16 hover:opacity-100': isHolidayPassed(holiday.date)}]"
  >
    <div class="w-full">
      <h4 class="pr-20 text-xl tracking-wide hyphens-auto">{{ getHolidayTitle(holiday) }}</h4>
      <details class="group block w-full text-blue-300 open:text-white hover:text-white">
        <summary class="cursor-pointer pt-3 pb-2 font-mono select-none">
          <span class="group-open:hidden">{{ t("holidays.moreDetails") }}</span>
          <span class="hidden group-open:inline underline">{{ t("holidays.collapse") }}</span>
        </summary>
        <p v-html="getHolidayDescription(holiday)" class="mt-5"></p>
      </details>
    </div>
    <div class="absolute right-5 top-5 bg-slate-900 py-2 px-4 h-14 rounded place-content-center text-xl select-none" >
      <span>{{ holiday.date }}</span>
    </div>
  </article>
</template>

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
    :class="[
      'relative flex flex-row justify-between p-7 w-full shadow-sm transition-all duration-300 transform-gpu glass-stabilize',
      'bg-white/50 glass-effect-md border border-white/60 text-slate-900 rounded-[2rem]',
      'hover:scale-[1.02] hover:bg-white hover:backdrop-blur-none',
      { 'order-1 opacity-60 first:mt-20 hover:opacity-100': isHolidayPassed(holiday.date) }
    ]"
  >
    <div class="w-full">
      <h4 class="pr-20 text-xl tracking-wide hyphens-auto">{{ getHolidayTitle(holiday) }}</h4>
      <details class="group block w-full text-slate-700 open:text-slate-950">
        <summary class="cursor-pointer pt-4 pb-2 font-mono text-sm uppercase tracking-widest select-none opacity-80 hover:opacity-100 transition-opacity">
          <span class="group-open:hidden">{{ t("holidays.moreDetails") }}</span>
          <span class="hidden group-open:inline underline decoration-slate-400 underline-offset-4">{{ t("holidays.collapse") }}</span>
        </summary>
        <p v-html="getHolidayDescription(holiday)" class="mt-4 text-base leading-relaxed text-slate-800"></p>
      </details>
    </div>
    <div class="absolute right-6 top-6 bg-white/60 glass-effect-md border border-white/40 py-2.5 px-5 h-14 rounded-2xl place-content-center text-xl font-bold tracking-tighter text-slate-900 shadow-sm select-none" >
      <span>{{ holiday.date }}</span>
    </div>
  </article>
</template>

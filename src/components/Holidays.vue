<script setup>
import useViewHolidays from "../utils/viewHolidays.js";

const { holidaysData } = defineProps(["holidaysData"]);
const { holidays, isHolidayPassed } = useViewHolidays(holidaysData);
</script>

<template>
  <article
    v-for="(holiday, index) in holidays"
    :key="index"
    :class="['relative', 'flex', 'flex-row', 'justify-between', 'p-5', 'w-full', 'bg-sky-950', 'text-white', 'rounded', 'shadow-secondary-1', {'order-1 opacity-80 first:mt-16 hover:opacity-100': isHolidayPassed(holiday.date)}]"
  >
    <div class="w-full">
      <h4 class="pr-20 text-xl tracking-wide hyphens-auto">{{ holiday.title }}</h4>
      <details class="block w-full text-blue-300 open:text-white hover:text-white">
        <summary class="cursor-pointer pt-3 pb-2 font-mono select-none">Подробнее</summary>
        <p v-html="holiday.details.description" class="mt-5"></p>
        <p class="font-mono text-xs mt-5 text-blue-300 select-none">{{ holiday.details.source }}</p>
      </details>
    </div>
    <div class="absolute right-5 top-5 bg-slate-900 py-2 px-4 h-14 rounded place-content-center text-xl select-none" >
      <span v-if="holiday.date">{{ holiday.date }}</span>
      <span v-else>{{ calculateHolidayDate(holiday.id) }}</span>
    </div>
  </article>
</template>

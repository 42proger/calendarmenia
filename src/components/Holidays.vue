<script setup>
import { computed } from "vue";
import useViewHolidays from "../utils/viewHolidays.js";
import { useI18n } from "vue-i18n";

const { holidaysData } = defineProps(["holidaysData"]);
const { holidays, isHolidayPassed } = useViewHolidays(holidaysData);
const { t } = useI18n({ useScope: "global" });

const upcomingHolidays = computed(() => holidays.value.filter(h => !isHolidayPassed(h.date)));
const passedHolidays = computed(() => holidays.value.filter(h => isHolidayPassed(h.date)));

const getHolidayTitle = (holiday) => t(`holidayTitles.${holiday.id}`);
const getHolidayDescription = (holiday) => t(`holidayDescriptions.${holiday.id}`);
</script>

<template>
  <div class="flex flex-col gap-y-4">
    <article
      v-for="(holiday, index) in upcomingHolidays"
      :key="'upcoming-' + index"
      class="relative flex flex-row justify-between p-7 w-full shadow-sm transition-[background-color,opacity] duration-200 glass-stabilize bg-white/80 border border-white/60 text-slate-900 rounded-[2rem] hover:bg-white/95"
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
      <div class="absolute right-6 top-6 bg-white/80 border border-white/40 py-2.5 px-5 h-14 rounded-2xl place-content-center text-xl font-bold tracking-tighter text-slate-900 shadow-sm select-none">
        <span>{{ holiday.date }}</span>
      </div>
    </article>

    <h2 v-if="passedHolidays.length > 0" class="mt-4 text-xl font-medium tracking-wide text-slate-800 select-none text-center">
      {{ t("holidays.passedHolidays") }}
    </h2>

    <article
      v-for="(holiday, index) in passedHolidays"
      :key="'passed-' + index"
      class="relative flex flex-row justify-between p-7 w-full shadow-sm transition-[background-color,opacity] duration-200 glass-stabilize bg-white/80 border border-white/60 text-slate-900 rounded-[2rem] opacity-60 hover:opacity-100 hover:bg-white/95"
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
      <div class="absolute right-6 top-6 bg-white/80 border border-white/40 py-2.5 px-5 h-14 rounded-2xl place-content-center text-xl font-bold tracking-tighter text-slate-900 shadow-sm select-none">
        <span>{{ holiday.date }}</span>
      </div>
    </article>
  </div>
</template>

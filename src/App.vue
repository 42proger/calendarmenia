<script setup>
import YearInput from "./components/YearInput.vue";
import LanguageSwitcher from "./components/LanguageSwitcher.vue";
import Holidays from "./components/Holidays.vue";
import jsonData from "./data/data.json";
import { useI18n } from "vue-i18n";
import store from "./store/index.js";

const holidaysData = jsonData.articles;
const { t } = useI18n({ useScope: "global" });
</script>

<template>
  <section class="flex flex-col w-full mt-5 mb-2 items-center">
    <h1 class="text-4xl tracking-tighter text-center font-black uppercase mb-12 text-slate-900 drop-shadow-sm select-none">
      {{ t("app.title") }}
    </h1>
    <div class="w-full mb-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
      <YearInput />
      <LanguageSwitcher />
    </div>
      <h2 class="text-xl font-medium tracking-wide text-slate-800 select-none">{{ t("app.holidaysForYear", { year: store.state.inputYear }) }}</h2>
  </section>
  <section class="flex flex-col w-full gap-y-4 mb-10">
    <Holidays :holidaysData="holidaysData" />
  </section>
</template>

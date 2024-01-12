<script setup>
import YearInput from "./components/YearInput.vue";
import Holidays from "./components/Holidays.vue";
import jsonData from "./data/data.json";
const holidaysData = jsonData.articles;
</script>

<template>
  <section class="flex flex-col w-full mt-5 mb-2 items-center">
    <h1 class="text-4xl tracking-wide text-center font-black uppercase mb-8 text-sky-950 select-none">
      Календарь 🇦🇲 праздников
    </h1>
    <YearInput />
  </section>
  <section class="flex flex-col w-full gap-y-4 mb-10">
    <Holidays :holidaysData="holidaysData" />
  </section>
</template>

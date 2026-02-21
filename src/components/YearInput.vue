<script setup>
import { computed } from "vue";
import store from "../store/index.js";

const inputYear = computed({
  get: () => store.state.inputYear,
  set: (val) => store.commit("setInputYear", val)
});

const updateYear = function (amount) {
  const year = parseInt(inputYear.value) + amount;
  if (year >= 301 && year <= 3000) {
    inputYear.value = year;
  }
};
</script>

<template>
  <div id="yearForm" class="flex flex-row items-center text-lg gap-x-4">
    <div class="flex h-12">
      <button
        class="bg-slate-900 text-white px-4 py-1 rounded-l"
        @click="updateYear(-1)"
      >
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h16"/></svg>
      </button>
      <input
        type="number"
        id="inputYear"
        class="w-40 text-white text-xl text-center bg-sky-950 tracking-wide focus:outline-none"
        v-model="inputYear"
        min="1900"
        max="2100"
        @input="updateYear(0)"
        @wheel.prevent="updateYear(-Math.sign($event.deltaY))"
      />
      <button
        class="bg-slate-900 text-white px-4 py-1 rounded-r"
        @click="updateYear(1)"
      >
        <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/></svg>
      </button>
    </div>
  </div>
</template>

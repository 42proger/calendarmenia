<script setup>
import { ref, watch } from "vue";
import store from "../store/index.js";

const localYear = ref(store.state.inputYear);

watch(() => store.state.inputYear, (v) => localYear.value = v);

const commit = () => {
  const v = parseInt(localYear.value) || 301;
  const clamped = Math.max(301, Math.min(v, 3000));
  store.commit("setInputYear", clamped);
  localYear.value = clamped;
};

const updateYear = (n) => {
  const v = (parseInt(localYear.value) || new Date().getFullYear()) + n;
  if (v >= 301 && v <= 3000) store.commit("setInputYear", v);
};
</script>

<template>
  <div id="yearForm" class="flex flex-row items-center text-lg gap-x-4">
    <div class="flex h-12 rounded-2xl overflow-hidden border border-white/60 shadow-md bg-white/85">
      <button
        class="group bg-white/40 px-5 transition-colors duration-200 hover:bg-white/80 active:bg-white/20"
        @click="updateYear(-1)"
      >
        <svg class="w-3 h-3 text-slate-800 transition-transform group-active:scale-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M1 1h16"/></svg>
      </button>
      <input
        type="number"
        id="inputYear"
        class="w-36 text-slate-900 text-xl font-bold text-center bg-transparent tracking-tighter focus:outline-none"
        v-model="localYear"
        @blur="commit"
        @keyup.enter="commit"
        @wheel.prevent="updateYear(-Math.sign($event.deltaY))"
      />
      <button
        class="group bg-white/40 px-5 transition-colors duration-200 hover:bg-white/80 active:bg-white/20"
        @click="updateYear(1)"
      >
        <svg class="w-3 h-3 text-slate-800 transition-transform group-active:scale-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 1v16M1 9h16"/></svg>
      </button>
    </div>
  </div>
</template>

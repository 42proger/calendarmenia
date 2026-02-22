<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";
import { availableLocales, setLocale } from "../i18n/index.js";

const { t, locale } = useI18n({ useScope: "global" });
const isOpen = ref(false);
const dropdownContainer = ref(null);

const handleLocaleChange = (code) => {
  setLocale(code);
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (dropdownContainer.value && !dropdownContainer.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", handleClickOutside);
});
</script>

<template>
  <div class="flex items-center gap-3">
    <span class="text-sm font-bold uppercase tracking-widest select-none text-slate-800/60">{{ t("app.language") }}</span>
    <div class="relative inline-block w-32" ref="dropdownContainer">
      <div class="rounded-2xl overflow-hidden border border-white/60 shadow-md bg-white/90 transition-colors duration-200 hover:bg-white focus-within:ring-2 focus-within:ring-slate-900/10">
        <button
          @click="isOpen = !isOpen"
          class="flex items-center justify-between w-full text-slate-900 font-bold px-5 py-2.5 focus:outline-none bg-transparent"
        >
          <span>{{ t(`language.${locale}`) }}</span>
          <svg 
            class="fill-current w-4 h-4 ml-2 opacity-70 transition-transform duration-300" 
            :class="{ 'rotate-180': isOpen }"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20"
          >
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
          </svg>
        </button>
      </div>
      
      <ul
        v-if="isOpen"
        class="absolute z-50 w-full mt-2 bg-white border border-white/60 rounded-2xl shadow-xl overflow-hidden py-1"
      >
        <li
          v-for="code in availableLocales"
          :key="code"
          @click="handleLocaleChange(code)"
          class="px-5 py-2.5 text-slate-800 font-medium hover:bg-slate-900/5 cursor-pointer transition-colors"
          :class="{'bg-slate-900/10 text-slate-950 font-bold': locale === code}"
        >
          {{ t(`language.${code}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

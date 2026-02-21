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
    <span class="font-semibold tracking-wide select-none text-sky-950">{{ t("app.language") }}</span>
    <div class="relative inline-block w-32" ref="dropdownContainer">
      <button
        @click="isOpen = !isOpen"
        class="flex items-center justify-between w-full bg-sky-950/95 text-white rounded border border-sky-900 pl-3 pr-2 py-1.5 shadow-sm transition focus:outline-none"
      >
        <span>{{ t(`language.${locale}`) }}</span>
        <svg 
          class="fill-current w-4 h-4 ml-2 transition-transform duration-200" 
          :class="{ 'rotate-180': isOpen }"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 20 20"
        >
          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>
        </svg>
      </button>
      
      <ul
        v-if="isOpen"
        class="absolute z-50 w-full mt-1 bg-sky-950 border border-sky-900 rounded shadow-lg overflow-hidden"
      >
        <li
          v-for="code in availableLocales"
          :key="code"
          @click="handleLocaleChange(code)"
          class="px-3 py-2 text-white hover:bg-sky-800 cursor-pointer transition-colors"
          :class="{'font-bold bg-sky-900': locale === code}"
        >
          {{ t(`language.${code}`) }}
        </li>
      </ul>
    </div>
  </div>
</template>

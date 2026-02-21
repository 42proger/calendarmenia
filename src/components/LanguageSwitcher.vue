<script setup>
import { useI18n } from "vue-i18n";
import { availableLocales, setLocale } from "../i18n/index.js";

const { t, locale } = useI18n({ useScope: "global" });

const handleLocaleChange = (event) => {
  setLocale(event.target.value);
};
</script>

<template>
  <label class="flex items-center gap-3">
    <span class="font-semibold tracking-wide select-none text-sky-950">{{ t("app.language") }}</span>
    <div class="relative inline-block">
      <select
        :value="locale"
        @change="handleLocaleChange"
        class="appearance-none bg-sky-950/95 text-white rounded border border-sky-900 pl-3 pr-8 py-1.5 shadow-sm cursor-pointer transition focus:outline-none w-full"
      >
        <option v-for="code in availableLocales" :key="code" :value="code">
          {{ t(`language.${code}`) }}
        </option>
      </select>
      <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white/70">
        <svg class="fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
      </div>
    </div>
  </label>
</template>

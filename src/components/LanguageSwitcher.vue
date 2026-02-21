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
    <select
      :value="locale"
      @change="handleLocaleChange"
      class="bg-sky-950/95 text-white rounded border border-sky-900 px-3 py-1.5 shadow-sm cursor-pointer transition focus:outline-none"
    >
      <option v-for="code in availableLocales" :key="code" :value="code">
        {{ t(`language.${code}`) }}
      </option>
    </select>
  </label>
</template>

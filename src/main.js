import { createApp } from "vue";
import "./index.css";
import App from "./App.vue";
import { i18n, setLocale } from "./i18n/index.js";

setLocale(i18n.global.locale.value);

createApp(App).use(i18n).mount("#app");
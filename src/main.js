import { createApp } from "vue";
import "@fontsource/noto-sans/latin-400.css";
import "@fontsource/noto-sans/latin-700.css";
import "@fontsource/noto-sans/latin-ext-400.css";
import "@fontsource/noto-sans/latin-ext-700.css";
import "@fontsource/noto-sans/cyrillic-400.css";
import "@fontsource/noto-sans/cyrillic-700.css";
import "@fontsource/noto-sans/cyrillic-ext-400.css";
import "@fontsource/noto-sans/cyrillic-ext-700.css";
import "@fontsource/noto-sans-armenian/armenian-400.css";
import "@fontsource/noto-sans-armenian/armenian-700.css";
import "./index.css";
import App from "./App.vue";
import { i18n, setLocale } from "./i18n/index.js";

setLocale(i18n.global.locale.value);

createApp(App).use(i18n).mount("#app");

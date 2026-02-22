# Armenian Calendar PWA

[![PWA](https://img.shields.io/badge/PWA-Installable-brightgreen?style=flat-square&logo=pwa&logoColor=white)](https://42proger.github.io/calendarmenia/)
[![W3C Validation](https://img.shields.io/w3c-validation/default?style=flat-square&targetUrl=https://42proger.github.io/calendarmenia/)](https://validator.w3.org/nu/?doc=https://42proger.github.io/calendarmenia/)

A simple PWA (Progressive Web Application) with Vue 3 and Vite for tracking state and religious holidays in Armenia.

Religious holidays are calculated based on the date of Easter in the selected year.

Gauss's Easter algorithm is used to calculate the Easter date: [easter.js](https://github.com/42proger/easter.js).

## Tech Stack

Vue 3, Vuex, Tailwind, Vite, PWA Vite Plugin, Workbox

## Run Locally

```bash
git clone https://github.com/42proger/calendarmenia
cd calendarmenia
npm install
npm run dev
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

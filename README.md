# Armenian Calendar PWA

[![PWA Shields](https://www.pwa-shields.com/1.0.0/series/classic/solid/green.svg)](https://42proger.github.io/calendarmenia/)
[![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2F42proger.github.io%2Fcalendarmenia%2F)](https://validator.w3.org/nu/?doc=https%3A%2F%2F42proger.github.io%2Fcalendarmenia)

A simple PWA (Progressive Web Application) with Vue 3 and Vite for tracking state and religious holidays in Armenia. 

Religious holidays are calculated based on the date of Easter in the selected year. 

Gauss's Easter algorithm is used to calculate the Easter date: https://github.com/42proger/easter.js.
## Tech Stack

Vue 3, Vuex, Tailwind, Vite, PWA Vite Plugin, Workbox 


## Run Locally

Clone the project

```bash
  git clone https://github.com/42proger/calendarmenia
```

Go to the project directory

```bash
  cd calendarmenia
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## License

[MIT](https://choosealicense.com/licenses/mit/)

import { createStore } from "vuex";

export default createStore({
  state: {
    inputYear: new Date().getFullYear(),
  },
  mutations: {
    setInputYear(state, year) {
      state.inputYear = year;
    },
  },
});

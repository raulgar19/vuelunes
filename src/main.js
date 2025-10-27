import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";

var app = createApp(App);

app.config.globalProperties.$filters = {
  changeColor(num) {
    if (num % 2 == 0) {
      return "<li style='color:green'>" + num + "</li>";
    } else {
      return "<li style='color:red'>" + num + "</li>";
    }
  },

  getOperaciones(i, numero) {
    return `<td>${numero} * ${i} `;
  },

  getResultado(i, numero) {
    return `= ${numero * i}</td>`;
  },
};

app.use(router).mount("#app");

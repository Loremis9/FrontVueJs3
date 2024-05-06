import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import { createPinia } from 'pinia'
import MaterialDashboard from "./material-dashboard";
const pinia = createPinia()
const appInstance = createApp(App);
appInstance.use(store);
appInstance.use(pinia)
appInstance.use(router);
appInstance.use(MaterialDashboard);
appInstance.mount("#app");

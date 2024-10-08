import "bootstrap/dist/css/bootstrap.css";

import { createApp } from "vue";
import App from "./App.vue";
import VueApexCharts from "vue3-apexcharts";
const app = createApp(App);
app.use(VueApexCharts)
app.mount("#app");

import "bootstrap/dist/js/bootstrap";

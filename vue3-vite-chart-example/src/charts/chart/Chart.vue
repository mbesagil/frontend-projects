<template>
  <div class="container my-2">
    <div class="row">
      <div class="col-lg-12">
        <div class="d-flex justify-content-center align-items-center">
          <h1>vue3-chart-js</h1>
          <a
            href="https://github.com/J-T-McC/vue3-chartjs"
            target="_blank"
            class="link-dark ps-5"
            >https://github.com/J-T-McC/vue3-chartjs</a
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Pie Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">2536</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">69421</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">89854</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Pie Chart -->
            <vue3-chart-js
              :height="140"
              class="chartjs-chart"
              v-bind="{ ...pie }"
            ></vue3-chart-js>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Donut Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">9595</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">36524</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">62541</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Donut Chart -->
            <vue3-chart-js
              :height="140"
              class="chartjs-chart"
              v-bind="{ ...Doughnut }"
            ></vue3-chart-js>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Polar area Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">4852</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">3652</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">85412</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Polar area Chart -->
            <vue3-chart-js
              :height="140"
              class="chartjs-chart"
              v-bind="{ ...PolarArea }"
            ></vue3-chart-js>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Radar Chart</h4>
            <div class="row text-center">
              <div class="col-sm-4">
                <h5 class="mb-0">694</h5>
                <p class="text-muted">Activated</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">55210</h5>
                <p class="text-muted">Pending</p>
              </div>
              <div class="col-sm-4">
                <h5 class="mb-0">489498</h5>
                <p class="text-muted">Deactivated</p>
              </div>
            </div>
            <!-- Radar Chart -->
            <vue3-chart-js
              :height="140"
              class="chartjs-chart"
              v-bind="{ ...radar }"
            ></vue3-chart-js>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";

import { line, pie, Doughnut, radar, bar, PolarArea } from "./chart-data";

/**
 * Chartjs-chart component
 */
export default {
  page: {
    title: "Chartjs Charts",
  },
  components: {
    Vue3ChartJs,
  },

  data() {
    return {
      line: line,
      pie: pie,
      Doughnut: Doughnut,
      radar: radar,
      bar: bar,
      PolarArea: PolarArea,
      title: "Chartjs Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Chartjs Charts",
          active: true,
        },
      ],
    };
  },
};
</script>

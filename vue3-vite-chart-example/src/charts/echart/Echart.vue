<template>
  <div class="container my-2">
    <div class="row">
      <div class="col-lg-12">
        <div class="d-flex justify-content-center align-items-center">
          <h1>EChart</h1>
          <a href="https://echarts.apache.org/" target="_blank" class="link-dark ps-5"
            >https://echarts.apache.org/</a
          >
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Line Chart</h4>
            <vue-echarts
              :option="option.lineChart"
              style="height: 300px"
              ref="chart"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Mix Line-Bar</h4>
            <vue-echarts
              :option="option.mixedBarChart"
              style="height: 300px"
              ref="chart"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Pie Chart</h4>
            <vue-echarts :option="option.pieChart" style="height: 300px" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Doughnut Chart</h4>
            <vue-echarts :option="option.doughnutChart" style="height: 300px" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Candle Stick Chart</h4>
            <vue-echarts
              :option="option.candleStickChart"
              style="height: 300px"
            />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Gauge Chart</h4>
            <vue-echarts :option="option.guageChart" style="height: 300px" />
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Bubble Chart</h4>
            <vue-echarts :option="option.bubbleChart" style="height: 300px" />
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Polar Chart</h4>
            <vue-echarts
              :option="option.polarChart.polar"
              style="height: 300px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueEcharts } from "vue3-echarts";

import {
  polarChart,
  lineChart,
  pieChart,
  bubbleChart,
  doughnutChart,
  mixedBarChart,
  guageChart,
  candleStickChart,
} from "./echart-data";

export default {
  page: {
    title: "Echart Chart",
  },
  components: { VueEcharts },
  data() {
    return {
      // polarChart: polarChart,
      // lineChart: lineChart,
      // pieChart: pieChart,
      // bubbleChart: bubbleChart,
      // doughnutChart: doughnutChart,
      // mixedBarChart: mixedBarChart,
      // candleStickChart: candleStickChart,
      // guageChart: guageChart,
      title: "ECharts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "ECharts",
          active: true,
        },
      ],
    };
  },
  computed: {
    option() {
      return {
        polarChart: polarChart,
        lineChart: lineChart,
        pieChart: pieChart,
        bubbleChart: bubbleChart,
        doughnutChart: doughnutChart,
        mixedBarChart: mixedBarChart,
        candleStickChart: candleStickChart,
        guageChart: guageChart,
      };
    },
  },
};
</script>

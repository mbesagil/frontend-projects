<template>
  <div>
    <span>Not useable</span>
  </div>
</template>

<script>
import { SmilAnimationChart } from "vue-chartist";
import {
  smilAnimationChart,
  simpleLineChart,
  polarBarChart,
  areaLineChart,
  lineSmoothingChart,
  overlappingBarChart,
  stackBarChart,
  horizontalBarChart,
  donutAnimateChart,
  simplePieChart,
  distributedSeries,
  labelPlacementChart,
  extremeConfiguration,
  lineAreaChart,
} from "./chartist-chart-data";

/**
 * Chartist-chart component
 */
export default {
  page: {
    title: "Chartist Chart",
  },
  data() {
    return {
      smilAnimationChart: smilAnimationChart,
      simpleLineChart: simpleLineChart,
      polarBarChart: polarBarChart,
      areaLineChart: areaLineChart,
      lineSmoothingChart: lineSmoothingChart,
      overlappingBarChart: overlappingBarChart,
      stackBarChart: stackBarChart,
      horizontalBarChart: horizontalBarChart,
      donutAnimateChart: donutAnimateChart,
      simplePieChart: simplePieChart,
      distributedSeries: distributedSeries,
      labelPlacementChart: labelPlacementChart,
      extremeConfiguration: extremeConfiguration,
      lineAreaChart: lineAreaChart,
      title: "Chartist Charts",
      items: [
        {
          text: "Charts",
          href: "/",
        },
        {
          text: "Chartist Charts",
          active: true,
        },
      ],
    };
  },

  components: {
    SmilAnimationChart,
  },
};
</script>

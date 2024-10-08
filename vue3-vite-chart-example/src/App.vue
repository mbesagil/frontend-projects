<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item" @click="selectComponent = 'ApexChart'">
            <a class="nav-link active_link">Apex Chart</a>
          </li>
          <li class="nav-item" @click="selectComponent = 'ChartistChart'">
            <a class="nav-link">Chartist</a>
          </li>
          <li class="nav-item" @click="selectComponent = 'Echart'">
            <a class="nav-link">Echart</a>
          </li>
          <li class="nav-item" @click="selectComponent = 'Chart'">
            <a class="nav-link">Chart</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <component :is="selectComponent"></component>
</template>

<script>
import ApexChart from "./charts/apex/ApexChart.vue";
import ChartistChart from "./charts/chartist/ChartistChart.vue";
import Echart from "./charts/echart/Echart.vue";
import Chart from "./charts/chart/Chart.vue";
export default {
  name: "App",
  data() {
    return {
      selectComponent: "ApexChart",
    };
  },
  components: {
    ApexChart,
    ChartistChart,
    Echart,
    Chart
  },

  mounted() {
    /*******************************for active_link link style selector*/
    var items = document.getElementById("navbarNav");
    var item = items.getElementsByClassName("nav-item");
    for (var i = 0; i < item.length; i++) {
      item[i].addEventListener("click", function () {
        var current = document.querySelector(".active_link");
        current.classList.remove("active_link");
        this.children[0].classList.add("active_link");
      });
    }
  },
};
</script>

<style scoped>
a {
  cursor: pointer;
}
.active_link {
  color: red !important;
}
</style>

<template>
  <div id="base_app">
    <base-calender></base-calender>
  </div>
</template>

<script>
import BaseCalender from "./components/BaseCalender.vue";
export default {
  components: {
    BaseCalender,
  },
};
</script>

<style>
#base_app {
  height: 100%;
  background-color: rgb(0, 0, 0);
  color: rgb(248, 249, 250);
}
</style>

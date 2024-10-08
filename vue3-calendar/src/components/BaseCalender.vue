<template>
  <div class="d-flex justify-content-center">
    <div id="schedule_calender">
      <h1>Calender App</h1>
      <div class="d-flex justify-content-between align-items-center">
        <span id="year-month-detail">
          <h3>{{ currentMonthInName }} {{ currentYear }}</h3>
        </span>
        <section class="p-1">
          <button class="btn btn-sm btn-outline-info" @click="prev">
            Prev
          </button>
          <button class="btn btn-sm btn-outline-info" @click="next">
            Next
          </button>
        </section>
      </div>

      <section>
        <div class="days">
          <span
            class="days_span border border-1 border-light"
            v-for="(day, index) in days"
            :key="index"
          >
            {{ day }}
          </span>
        </div>
      </section>
      <section>
        <div class="date border border-1 border-light ">
          <div
            class="date_div border border-1 border-light"
            v-for="day in startDay()"
            :key="day"
          ></div>
          <div
            class="date_div text-end border border-1 border-light"
            v-for="date in daysInMonth(currentYear, currentMonthInNumber)"
            :key="date"
            @click="getDate(date)"
          >
            <div class="w-100 h-100">
              <div class="w-100">
                <span class="text-end me-1">
                  {{ date }}
                </span>
              </div>
              <div class="w-100 d-flex flex-column-reverse" style="height: 44px;">
                <!-- <span class="w-100 bg-warning" style="height: 10px;"></span>
                <span class="w-100 bg-secondary" style="height: 10px;"></span>
                <span class="w-100 bg-primary" style="height: 10px;"></span>
                <span class="w-100 bg-info" style="height: 10px;"></span> -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentMonthInNumber: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    };
  },
  methods: {
    daysInMonth(year, month) {
      console.log(new Date(year, month + 1, 0).getDate());
      return new Date(year, month + 1, 0).getDate();
    },
    startDay() {
      let fırstDayofMonth = new Date(
        this.currentYear,
        this.currentMonthInNumber,
        1
      ).getDay();
      if (fırstDayofMonth === 0) {
        console.log("fırstDayofMonth", fırstDayofMonth);
        return 6;
      } else {
        console.log("fırstDayofMonth", fırstDayofMonth);
        return fırstDayofMonth - 1;
      }
    },
    next() {
      if (this.currentMonthInNumber === 11) {
        this.currentYear++;
        this.currentMonthInNumber = 0;
      } else {
        this.currentMonthInNumber++;
      }
    },
    prev() {
      if (this.currentMonthInNumber === 0) {
        this.currentYear--;
        this.currentMonthInNumber = 11;
      } else {
        this.currentMonthInNumber--;
      }
      console.log(this.currentMonthInNumber);
    },
    getDate(data) {
      console.log(data);
    },
  },
  computed: {
    currentMonthInName() {
      return new Date(
        this.currentYear,
        this.currentMonthInNumber
      ).toLocaleString("default", { month: "long" });
    },
  },
};
</script>

<style>
#schedule_calender {
  max-width: 600px;
}

.days,
.date {
  text-align: center;
  display: flex;
}
.date {
  flex-wrap: wrap;
}
.days_span {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 14.28%;
  height: 40px;
}

.date_div {
  width: 14.28%;
  height: 70px;
}

h1 {
  text-align: center;
}
.button {
  display: flex;
  justify-content: space-between;
}
button {
  cursor: pointer;
}
</style>

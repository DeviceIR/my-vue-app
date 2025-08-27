<script>
import { onMounted, onUnmounted, ref } from "vue";

export default {
  name: "Dashboard",
  setup() {
    const time = ref("");

    let intervalId;

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      time.value = `${hours}:${minutes}`;
    };

    onMounted(() => {
      updateTime(); // set initial time immediately
      intervalId = setInterval(updateTime, 1000); // update every second
    });

    onUnmounted(() => {
      clearInterval(intervalId);
    });

    return { time };
  },

  methods: {
    dayMessage() {
      const hour = new Date().getHours(); // local hour
      let message = "";

      if (hour >= 4 && hour < 10) {
        message = "Good morning sir";
      } else if (hour >= 10 && hour < 15) {
        message = "Good afternoon sir";
      } else if (hour >= 15 && hour < 20) {
        message = "Good evening sir";
      } else if (hour >= 20 || hour < 4) {
        message = "Good night sir";
      }

      return message;
    },
  },
};
</script>

<style scoped></style>

<template>
  <div class="dashboard">
    <h1>{{ time }}</h1>
    <h3>{{ dayMessage() }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

function dayMessage(): string {
  const hour: number = new Date().getHours();
  let message: string = "";

  if (hour >= 4 && hour < 10) {
    message = "Good morning sir";
  } else if (hour >= 10 && hour < 15) {
    message = "Good afternoon sir";
  } else if (hour >= 15 && hour < 20) {
    message = "Good evening sir";
  } else {
    message = "Good night sir";
  }

  return message;
}

export default defineComponent({
  name: "Dashboard",
  setup() {
    const time = ref<string>("");

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      time.value = `${hours}:${minutes}`;
    };

    onMounted(() => {
      updateTime();
      intervalId = setInterval(updateTime, 1000); // update every second
    });

    onUnmounted(() => {
      if (intervalId) clearInterval(intervalId);
    });

    return { time, dayMessage };
  },
});
</script>

<style scoped></style>

<template>
  <div class="flex flex-col gap-12">
    <h1 class="!text-9xl">{{ time }}</h1>
    <h3 class="text-4xl">{{ dayMessage() }}</h3>
  </div>
</template>

<!-- done -->

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

function dayMessage(username: string): string {
  const hour: number = new Date().getHours();
  let message: string = "";

  if (hour >= 4 && hour < 10) {
    message = `Good morning ${username}`;
  } else if (hour >= 10 && hour < 15) {
    message = `Good afternoon ${username}`;
  } else if (hour >= 15 && hour < 20) {
    message = `Good evening ${username}`;
  } else {
    message = `Good night ${username}`;
  }

  return message;
}

export default defineComponent({
  name: "Dashboard",
  setup() {
    const username = ref<string | null>("");
    username.value = localStorage.getItem("userName");
    const time = ref<string>("");

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      time.value = `${hours}:${minutes}`;
    };

    onMounted(() => {
      if (!username.value) username.value = prompt("enter your user name");

      localStorage.setItem("userName", username.value ?? "");

      updateTime();
      intervalId = setInterval(updateTime, 1000); // update every second
    });

    onUnmounted(() => {
      if (intervalId) clearInterval(intervalId);
    });

    return { time, dayMessage, username };
  },
});
</script>

<style scoped></style>

<template>
  <div class="flex flex-col gap-12">
    <h1 class="!text-9xl">{{ time }}</h1>
    <h3 class="text-4xl">{{ dayMessage(username ?? "") }}</h3>
  </div>
</template>

<!-- done -->

<template>
  <div class="flex flex-col gap-12">
    <h1 class="">{{ time }}</h1>
    <h3 class="">
      {{ dayMessage(username) }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const { t, locale } = useI18n();

    const username = ref(localStorage.getItem("userName") || "Guest");

    const language = ref(localStorage.getItem("userLang") || locale.value);
    const theme = ref(localStorage.getItem("userTheme") || "light");

    locale.value = language.value;

    document.documentElement.classList.toggle("dark", theme.value === "dark");

    const time = ref("");

    let intervalId: ReturnType<typeof setInterval> | null = null;

    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      time.value = `${hours}:${minutes}`;
    };

    const dayMessage = (username: string): string => {
      const hour = new Date().getHours();
      if (hour >= 4 && hour < 10) return `${t("morning")} ${username}`;
      if (hour >= 10 && hour < 15) return `${t("afternoon")} ${username}`;
      if (hour >= 15 && hour < 20) return `${t("evening")} ${username}`;
      return `${t("night")} ${username}`;
    };

    onMounted(() => {
      // Prompt only if username is empty
      if (!username.value) {
        username.value = prompt("Enter your user name") || "Guest";
        localStorage.setItem("userName", username.value);
      }

      updateTime();
      intervalId = setInterval(updateTime, 1000);
    });

    onUnmounted(() => {
      if (intervalId) clearInterval(intervalId);
    });

    return { time, dayMessage, username };
  },
});
</script>

<style scoped>
/* Dark mode example */
.dark {
  background-color: #1a202c;
  color: #f7fafc;
}
</style>

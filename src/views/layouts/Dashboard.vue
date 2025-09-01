<template>
  <div
    class="child flex flex-col gap-12"
    :style="{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }"
  >
    <h1 class="">{{ time }}</h1>
    <h3 class="md:text-4xl sm:text-3xl">
      {{ dayMessage(username) }}
    </h3>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  ref,
  type Ref,
} from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const { t, locale } = useI18n();

    // const username = ref(localStorage.getItem("userName") || "Guest");

    const username = inject("name") as Ref<string>; // TypeScript type
    const language = inject("language") as Ref<string>; // TypeScript type
    const theme = inject("theme") as Ref<string>; // TypeScript type

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

    return { time, dayMessage, username, language, theme };
  },
});
</script>

<style scoped>
.child {
  background-color: var(bg);
}
</style>

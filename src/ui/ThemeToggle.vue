<template>
  <button
    class="fixed top-4 right-4 z-50 px-4 py-2 rounded shadow-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
    @click="toggleTheme"
  >
    {{ buttonLabel }}
  </button>
</template>

<script setup lang="ts">
import { computed, inject, ref } from "vue";
import type { Ref } from "vue";

// Inject theme from parent

const theme = inject<Ref<string>>("theme", ref("light"));
const saveSettings = inject<() => void>("saveSettings");

if (!theme) throw new Error("ThemeToggle: theme not provided");

const buttonLabel = computed(() =>
  theme.value === "light" ? "☀️ Light" : "🌙 Dark"
);

function toggleTheme() {
  theme.value = theme.value === "dark" ? "light" : "dark";

  saveSettings?.();
}
</script>

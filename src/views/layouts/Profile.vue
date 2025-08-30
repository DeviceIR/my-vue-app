<template>
  <div class="p-6 max-w-md mx-auto space-y-6">
    <h1 class="text-2xl font-bold">{{ $t("profileSetting") }}</h1>

    <!-- Name update -->
    <div class="flex flex-col">
      <label class="font-medium mb-1">{{ $t("username") }}</label>
      <input
        type="text"
        v-model="name"
        placeholder="Enter your name"
        class="border rounded px-3 py-2"
        @input="changeName"
      />
    </div>

    <!-- Theme selection -->
    <div class="flex flex-col">
      <label class="font-medium mb-1">{{ $t("theme") }}</label>
      <select v-model="theme" class="border rounded px-3 py-2">
        <option value="light" class="bg-black">{{ $t("dark") }}</option>
        <option value="dark" class="bg-white text-black">
          {{ $t("light") }}
        </option>
      </select>
    </div>

    <!-- Language select -->
    <div class="flex flex-col">
      <label class="font-medium mb-1">{{ $t("language") }}</label>
      <select
        v-model="language"
        class="border rounded px-3 py-2 bg-gray-700 text-white focus:outline-none focus:ring-0"
      >
        <option value="en">{{ $t("english") }}</option>
        <option value="fa">{{ $t("farsi") }}</option>
      </select>
    </div>

    <!-- Save button -->
    <button
      @click="saveSettings"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {{ $t("saveSetting") }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const name = ref("");
const theme = ref("light");
const language = ref("en");

onMounted(() => {
  name.value = localStorage.getItem("userName") || "";
  theme.value = localStorage.getItem("userTheme") || "light";

  const savedLang = localStorage.getItem("userLang");
  if (savedLang) {
    language.value = savedLang;
    locale.value = savedLang;
  } else {
    language.value = locale.value;
  }

  document.documentElement.classList.toggle("dark", theme.value === "dark");
});

function saveSettings() {
  localStorage.setItem("userName", name.value);
  localStorage.setItem("userTheme", theme.value);
  localStorage.setItem("userLang", language.value);

  locale.value = language.value;

  document.documentElement.classList.toggle("dark", theme.value === "dark");

  alert("Settings saved!");
}
function changeName() {
  name.value = (event?.target as HTMLInputElement).value;
}

// Optional: automatically update theme when changed
watch(theme, (newTheme) => {
  document.documentElement.classList.toggle("dark", newTheme === "dark");
});
</script>

<style scoped>
/* Dark mode styles example */
.dark {
  background-color: #1a202c;
  color: #f7fafc;
}
</style>

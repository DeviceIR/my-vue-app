<template>
  <div class="p-6 max-w-md mx-auto space-y-6">
    <h1 class="text-2xl font-bold">Profile Settings</h1>

    <!-- Name update -->
    <div class="flex flex-col">
      <label class="font-medium mb-1">Your Name:</label>
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
      <label class="font-medium mb-1">Theme:</label>
      <select v-model="theme" class="border rounded px-3 py-2">
        <option value="light" class="bg-black">Dark</option>
        <option value="dark" class="bg-white text-black">Light</option>
      </select>
    </div>

    <!-- Language selection -->
    <div class="flex flex-col">
      <label class="font-medium mb-1">Language:</label>
      <select
        v-model="language"
        class="border rounded px-3 py-2 bg-gray-700 text-white focus:outline-none focus:ring-0"
      >
        <option value="en">English</option>
        <option value="fa">Persian</option>
        <option value="de">German</option>
        <!-- Add more languages here -->
      </select>
    </div>

    <!-- Save button -->
    <button
      @click="saveSettings"
      class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      Save Settings
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

// const username: string = localStorage.getItem("user") || "";

// Reactive state
const name = ref("");
const theme = ref("light");
const language = ref("en");

// Load saved settings from localStorage
onMounted(() => {
  name.value = localStorage.getItem("userName") || "";
  theme.value = localStorage.getItem("userTheme") || "light";
  language.value = localStorage.getItem("userLang") || "en";
  console.log(name.value);
});

// Save settings to localStorage and apply theme
function saveSettings() {
  localStorage.setItem("userName", name.value);
  localStorage.setItem("userTheme", theme.value);
  localStorage.setItem("userLang", language.value);

  // Apply theme class to document body
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

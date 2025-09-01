<script setup lang="ts">
import { ref, watch, onMounted, provide } from "vue";
import { useI18n } from "vue-i18n";

import Sidebar from "./views/Sidebar.vue";
import Navbar from "./views/Navbar.vue";
import MainContainer from "./views/MainContainer.vue";
import ThemeToggle from "./ui/ThemeToggle.vue";

// i18n
const { locale } = useI18n();

// Reactive state
const name = ref(localStorage.getItem("userName") || "");
const theme = ref(localStorage.getItem("userTheme") || "dark");
const language = ref(localStorage.getItem("userLang") || locale.value);

// On mount: ask for name if not set, apply theme & language
onMounted(() => {
  if (!name.value) {
    const enteredName = prompt("Enter your name")?.trim();
    name.value = enteredName && enteredName.length > 0 ? enteredName : "Guest";
  }

  locale.value = language.value;
  document.documentElement.classList.toggle("dark", theme.value === "dark");

  if (
    !localStorage.getItem("userName") ||
    !localStorage.getItem("userTheme") ||
    !localStorage.getItem("userLang")
  ) {
    saveSettings();
  }
});

// Watch theme changes to apply dynamically
watch(theme, (newTheme) => {
  document.documentElement.classList.toggle("dark", newTheme === "dark");
  localStorage.setItem("userTheme", newTheme);
});

// Save settings function
function saveSettings() {
  document.documentElement.classList.toggle("dark", theme.value === "dark");
  locale.value = language.value;

  localStorage.setItem("userName", name.value);
  localStorage.setItem("userTheme", theme.value);
  localStorage.setItem("userLang", language.value);

  console.log("Settings saved!");
}

// Optional: input change handler
function changeName(e: Event) {
  name.value = (e.target as HTMLInputElement).value;
}

// Provide globally to children
provide("name", name);
provide("theme", theme);
provide("language", language);
provide("saveSettings", saveSettings);
provide("changeName", changeName);
</script>

<template>
  <div class="appLayout relative">
    <!-- Navbar -->
    <Navbar
      class="text-[10px] 2xl:text-2xl xl:text-2xl lg:text-1xl md:text-[1rem] sm:text-[0.7rem]"
    />
    <ThemeToggle />

    <!-- Content => Sidebar + Container -->
    <div class="content">
      <Sidebar />

      <!-- Router views -->
      <MainContainer>
        <router-view />
      </MainContainer>
    </div>
  </div>
</template>

<style scoped>
.appLayout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--bg-color);
  color: var(--text-color);
  width: 100%;
}
.content {
  display: grid;
  grid-template-columns: 1fr 4fr;
  flex: 1;
  overflow: hidden;
}
</style>

<script setup lang="ts">
import { inject } from "vue";
import type { Ref } from "vue";

const theme = inject<Ref<string>>("theme");
const saveSettings = inject<() => void>("saveSettings");
// const theme = localStorage.getItem("userTheme");
let col = theme?.value;
console.log(col);
</script>

<template>
  <nav
    class="navbar flex justify-center items-center pb-4"
    :style="{
      backgroundColor: 'var(--bg-color)',

      border: 'var(--border-color)',
    }"
    :class="col === 'dark' ? 'bg-black text-white' : 'bg-white text-black'"
  >
    <h1 class="2xl:text-1xl" :style="{ color: 'var(--text-color)' }">
      {{ $t("Navigation") }}
    </h1>
  </nav>
</template>

<style scoped>
.navbar {
  height: 12vh;
  border: 1px solid rgb(229, 233, 8);
  border-radius: 10px;
}
h1 {
  font-style: italic;
  color: #fff;
  /* font-size: 24px; */
}
</style>

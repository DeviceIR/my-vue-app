<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
});
</script>

<template>
  <nav class="navbar">
    <h1>{{ $t("Navigation") }}</h1>
  </nav>
</template>

<style scoped>
.navbar {
  height: 10vh;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(229, 233, 8);
  border-radius: 10px;
}
h1 {
  font-style: italic;
  color: #fff;
  font-size: 24px;
}
</style>

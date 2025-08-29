<template>
  <div class="sidebar">
    <router-link to="/dashboard">Dashboard</router-link>
    <router-link to="/weather">Weather</router-link>
    <router-link to="/todo">To Do</router-link>
    <router-link to="/profile">Profile</router-link>
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
}
.sidebar {
  height: 80vh;
  margin: 10px 0;
  padding-top: 2rem;
  background-color: #333;
  border: 1px solid rgb(229, 233, 8);
  border-radius: 10px;

  display: flex;
  justify-content: start;
  align-items: center;
}
</style>

<!-- <script>
export default {
  name: "Sidebar",
};
</script> -->

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Sidebar",
});
</script>

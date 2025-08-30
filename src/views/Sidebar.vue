<template>
  <div class="sidebar">
    <router-link to="/dashboard">
      <ion-icon
        name="home-outline"
        class="visible w-8 h-8 text-amber-50 mr-4"
      ></ion-icon>
      <span class="text-2xl mx-0 my-auto align-top">Dashboard</span>
    </router-link>
    <router-link to="/weather"
      ><ion-icon
        name="cloudy-night-outline"
        class="visible w-8 h-8 text-amber-50 mr-4 align-top"
      ></ion-icon>
      <span class="text-2xl">Weather</span></router-link
    >
    <router-link to="/todo"
      ><ion-icon
        name="book-outline"
        class="visible w-8 h-8 text-amber-50 mr-4 align-top"
      ></ion-icon>
      <span class="text-2xl">To Do</span></router-link
    >
    <router-link to="/profile"
      ><ion-icon
        name="person-outline"
        class="visible w-8 h-8 text-amber-50 mr-4 align-top"
      ></ion-icon>
      <span class="text-2xl">Profile</span></router-link
    >
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
  padding: 8rem 0;
  background-color: #333;
  border: 1px solid rgb(229, 233, 8);
  border-radius: 10px;
  /* gap: 3.2rem; */

  display: flex;
  justify-content: space-between;
  align-items: start;
  padding-left: 24px;
}
</style>

<!-- <script>
export default {
  name: "Sidebar",
};
</script> -->

<script setup lang="ts"></script>

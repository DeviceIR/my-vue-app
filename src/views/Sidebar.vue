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
  height: 85vh;
  margin-top: 10px;
  background-color: #333;
  border: 1px solid rgb(229, 233, 8);
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default {
  name: "Sidebar",
};
</script>

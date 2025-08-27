<script>
import Sidebar from "./views/Sidebar.vue";
import Navbar from "./views/Navbar.vue";
import MainContainer from "./views/MainContainer.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Navbar,
    MainContainer,
  },
};
</script>

<template>
  <div class="appLayout">
    <!-- nav-->
    <Navbar />

    <!-- content=> sidebar + container -->
    <div class="content">
      <Sidebar />

      <!-- routers -->
      <MainContainer class="container">
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
}
.content {
  display: grid;
  grid-template-columns: 20% 1fr;
  flex: 1;
  overflow: hidden;
}
</style>

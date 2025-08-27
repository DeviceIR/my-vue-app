<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  background-color: #333;
  border: 1px solid rgb(229, 233, 8);

  overflow-y: auto;
  border-radius: 10px;
  height: 80vh;
  width: 80%;
  margin: 25px auto;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
export default { name: "MainContainer" };
</script>

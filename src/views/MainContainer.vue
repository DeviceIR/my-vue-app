<template>
  <div
    class="container flex justify-center items-center my-5 mx-10 xl:w-5/6 md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem]"
  >
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
  margin: 25px auto;
  width: 90%;
  padding: 4px;
}
</style>

<script>
import { defineComponent } from "vue";

export default defineComponent({ name: "MainContainer" });
</script>

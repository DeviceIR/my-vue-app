<template>
  <div
    class="container flex justify-center items-center my-5 mx-10 xl:w-5/6 md:text-[2.5rem] sm:text-[2rem] lg:text-[3rem] overflow-x-hidden"
    :style="{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      border: 'var(--border-color)',
    }"
  >
    <slot />
  </div>
</template>

<style scoped>
.container {
  overflow-y: auto;
  border-radius: 10px;
  height: 80vh;
  margin: 25px auto;
  width: 90%;
  padding: 4px;
}
</style>

<script setup lang="ts"></script>

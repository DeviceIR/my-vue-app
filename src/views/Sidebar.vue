<template>
  <div
    class="sidebar flex flex-col my-6 gap-7 justify-center px-6 lg:w-[25vh] md:w-[22vh]"
    :style="{
      backgroundColor: 'var(--bg-color)',
      color: 'var(--text-color)',
      border: 'var(--border-color)',
    }"
    :class="locale === 'fa' ? 'items-end' : 'items-start'"
  >
    <router-link
      to="/dashboard"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
    >
      <ion-icon
        name="home-outline"
        class="visible w-8 h-8"
        :style="{ color: 'var(--text-color)' }"
      ></ion-icon>
      <span
        class="text-2xl mx-0 my-auto align-top text-[10px] xl:text-4xl md:text-[2rem] sm:text-[1.5rem]"
        >{{ $t("dashboard") }}</span
      >
    </router-link>
    <router-link
      to="/weather"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
      ><ion-icon
        name="cloudy-night-outline"
        class="visible w-8 h-8"
        :style="{ color: 'var(--text-color)' }"
      ></ion-icon>
      <span
        class="text-2xl text-[10px] xl:text-4xl md:text-[2rem] sm:text-[1.5rem] my-auto mx-0"
        >{{ $t("weather") }}</span
      ></router-link
    >
    <router-link
      to="/todo"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
      ><ion-icon
        name="book-outline"
        class="visible w-8 h-8"
        :style="{ color: 'var(--text-color)' }"
      ></ion-icon>
      <span
        class="text-2xl text-[10px] xl:text-4xl md:text-[2rem] sm:text-[1.5rem] my-auto mx-0"
        >{{ $t("todo") }}</span
      ></router-link
    >
    <router-link
      to="/profile"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
      ><ion-icon
        name="person-outline"
        class="visible w-8 h-8"
        :style="{ color: 'var(--text-color)' }"
      ></ion-icon>
      <span
        class="text-2xl text-[10px] xl:text-4xl md:text-[2rem] sm:text-[1.5rem] my-auto mx-0"
        >{{ $t("profile") }}</span
      ></router-link
    >
    <p class="self-center">
      lang test : <span>{{ locale }}</span>
    </p>
  </div>
</template>

<style scoped>
.sidebar {
  height: 80vh;
  width: 100%;
  border-radius: 10px;
}
.ltr {
  direction: ltr;
}

.rtl {
  direction: rtl;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const language = locale.value;
</script>

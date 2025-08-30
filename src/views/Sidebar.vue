<template>
  <div
    class="sidebar flex flex-col mb-6 gap-7 justify-center px-6"
    :class="locale === 'fa' ? 'items-end' : 'items-start'"
  >
    <router-link
      to="/dashboard"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
    >
      <ion-icon
        name="home-outline"
        class="visible w-8 h-8 text-amber-50"
      ></ion-icon>
      <span class="text-2xl mx-0 my-auto align-top">{{ $t("dashboard") }}</span>
    </router-link>
    <router-link
      to="/weather"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
      ><ion-icon
        name="cloudy-night-outline"
        class="visible w-8 h-8 text-amber-50 align-top"
      ></ion-icon>
      <span class="text-2xl">{{ $t("weather") }}</span></router-link
    >
    <router-link
      to="/todo"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
      ><ion-icon
        name="book-outline"
        class="visible w-8 h-8 text-amber-50 align-top"
      ></ion-icon>
      <span class="text-2xl">{{ $t("todo") }}</span></router-link
    >
    <router-link
      to="/profile"
      class="flex mb-6 gap-2"
      :class="locale === 'fa' ? 'flex-row-reverse ' : 'flex-row'"
      ><ion-icon
        name="person-outline"
        class="visible w-8 h-8 text-amber-50 align-top"
      ></ion-icon>
      <span class="text-2xl">{{ $t("profile") }}</span></router-link
    >
    <p class="self-center">
      lang test : <span>{{ locale }}</span>
    </p>
  </div>
</template>

<style scoped>
.sidebar {
  height: 80vh;
  background-color: #333;
  border: 1px solid rgb(229, 233, 8);
  border-radius: 10px;
}
.ltr {
  direction: ltr;
}

.rtl {
  direction: rtl;
}
</style>

<!-- <script>
export default {
  name: "Sidebar",
};
</script> -->

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const language = locale.value;
</script>

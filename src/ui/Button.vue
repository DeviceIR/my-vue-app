<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}>();

const emit = defineEmits<{ (e: "click"): void }>();
</script>

<template>
  <button
    class="xl:w-1/2 xl:h-[3rem] lg:w-1/2 lg:h-[2.4rem] md:w-[15rem] md:h-[2.4rem] sm:w-[10rem] sm:h-[2rem] py-[0.6rem] px-[1.2rem] md:p-0 flex justify-center items-center"
    :class="[
      'rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed ',

      $attrs.class,
    ]"
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}>();

const emit = defineEmits<{ (e: "click"): void }>();

// Tailwind style maps
const variants: Record<string, string> = {
  primary: "bg-blue-500 text-white hover:bg-blue-600",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const sizes: Record<string, string> = {
  sm: "text-sm px-2 py-1",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const variantClass = computed(() => variants[props.variant ?? "primary"]);
const sizeClass = computed(() => sizes[props.size ?? "md"]);
</script>

<template>
  <button
    :class="[
      'rounded-lg font-semibold transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
      variantClass,
      sizeClass,
      $attrs.class, // <-- merge parent classes
    ]"
    :disabled="props.disabled"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

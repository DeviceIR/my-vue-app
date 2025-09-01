<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getTodayWeatherByCity } from "../../api/weatherApi";
import type { WeatherData } from "../../api/weatherApi";
import { useI18n } from "vue-i18n";

const city = ref("");
const weatherData = ref<WeatherData | null>(null);

onMounted(async () => {
  const { t, locale } = useI18n();
  const language = ref(localStorage.getItem("userLang") || locale.value);

  locale.value = language.value;
  city.value = prompt("Enter your city") || "";
  if (!city.value) return;

  weatherData.value = await getTodayWeatherByCity(city.value);
});
</script>

<template>
  <div class="flex flex-col h-full text-[1rem]">
    <!-- Header always on top -->
    <header class="flex flex-col sticky top-0 z-10 p-4">
      <h1 class="xl:!text-7xl lg:!text-6xl md:!text-[2.2rem] sm:!text-[1.5rem]">
        {{ $t("wheaterfor") }} {{ city }}
      </h1>
      <p class="mt-2">{{ $t("hourlytemp") }}</p>
    </header>

    <!-- Scrollable content -->
    <div
      class="flex-1 overflow-y-auto p-2"
      v-if="weatherData?.hourly.time.length"
    >
      <ul class="grid grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <li
          class="border-2 m-1 md:px-2 2xl:!text-3xl xl:!text-3xl md:!text-[1.2rem]"
          v-for="(t, i) in weatherData.hourly.temperature_2m"
          :key="i"
        >
          {{
            weatherData.hourly.time[i].toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })
          }}
          - {{ t.toFixed(0) }}°C
        </li>
      </ul>
    </div>

    <div v-else-if="city">{{ $t("loadingWeather") }}</div>
    <div v-else>Enter a city to see weather.</div>
  </div>
</template>

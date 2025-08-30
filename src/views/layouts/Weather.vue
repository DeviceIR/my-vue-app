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
  <div>
    <h1>{{ $t("wheaterfor") }} {{ city }}</h1>

    <div v-if="weatherData?.hourly.time.length">
      <p class="mt-4">{{ $t("hourlytemp") }}</p>
      <ul class="grid grid-cols-2 mt-10">
        <li
          class="border-2 m-1"
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

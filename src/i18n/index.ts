// src/i18n/index.ts
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    //pages
    dashboard: "Dashboard",
    weather: "Weather",
    todo: "To Do",
    profile: "Profile",

    settings: "Settings",
    save: "Save",
    language: "Language",
    theme: "Theme :",
    username: "Your Name",
    Navigation: "App Navigation Bar",
    saveSetting: "Save Setting",
    profileSetting: "Profile Setting",
    loadingWeather: "Loading weather...",
    wheaterfor: "Weather for : ",
    hourlytemp: "Today's hourly temperature:",
    addTask: "Add Task",

    //day parts
    morning: "Good morning",
    afternoon: "Good afternoon",
    evening: "Good evening",
    night: "Good night",

    //languages
    farsi: "persian",
    english: "english",

    //theme
    dark: "Dark",
    light: "Light",
  },
  fa: {
    dashboard: "داشبورد",
    weather: "آب‌وهوا",
    todo: "لیست کارها",
    profile: "پروفایل",
    settings: "تنظیمات",
    save: "ذخیره",
    language: "زبان",
    theme: ": تم",
    username: "نام شما",
    Navigation: "نوار برنامه",
    morning: "صبح بخیر",
    afternoon: "ظهر بخیر",
    evening: "عصر بخیر",
    night: "شب بخیر",
    saveSetting: "ذخیره تنظیمات",
    profileSetting: "تنظیمات پروفایل",
    farsi: "فارسی",
    english: "انگلیسی",
    dark: "تیره",
    light: "روشن",
    loadingWeather: "در حال دریافت اطلاعات",
    wheaterfor: "شرایط جوی شهر",
    hourlytemp: "دما در ساعات مختلف امروز ",
    addTask: "اضافه کردن",
  },
};

// const savedLocale = localStorage.getItem("userLang") || "en";

const i18n = createI18n({
  legacy: false, // composition API mode
  locale: "en", // default
  fallbackLocale: "en",
  messages,
});

export default i18n;

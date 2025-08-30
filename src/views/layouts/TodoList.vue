<script setup lang="ts">
import { onUnmounted, ref, watch } from "vue";
// @ts-ignore: ignore next line
import Button from "../../ui/Button.vue";
import { useI18n } from "vue-i18n";

interface ListItem {
  text: string;
  priority: boolean;
}

const { t, locale } = useI18n();
const language = ref(localStorage.getItem("userLang") || locale.value);
const list = ref<ListItem[]>(
  JSON.parse(localStorage.getItem("todoList") || "[]")
);
const inputText = ref("");

//initiale
locale.value = language.value;

//functions
function onInputChange() {
  // @ts-ignore: ignore next line
  const value = (event.target as HTMLInputElement).value;
  inputText.value = value;
}

function clearInputOnSubmit() {
  inputText.value = "";
}

function clearList() {
  list.value = [];
  localStorage.removeItem("todoList");
}

function addTask() {
  if (inputText.value) {
    list.value.push({ text: inputText.value, priority: true });
    console.log(list.value);
    clearInputOnSubmit();
  }
}
function removeTask(index: number) {
  list.value.splice(index, 1);
}

//watch
watch(
  list,
  (newList) => {
    localStorage.setItem("todoList", JSON.stringify(newList));
  },
  { deep: true }
);

onUnmounted(() => {
  localStorage.setItem("todoList", JSON.stringify(list.value));
});
</script>

<template>
  <div
    class="todolist-layout flex flex-col gap-2 justify-between items-center h-11/12"
  >
    <ul class="mb-10 gap-12 p-0 w-2xl">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="listItem"
        :class="locale === 'fa' ? 'flex-row-reverse' : ''"
      >
        <p>
          {{ item.text }}
        </p>

        <div
          class="actionBtns"
          :class="locale === 'fa' ? 'flex-row-reverse' : ''"
        >
          <!-- <Button @click="() => console.log('edit btn clicked');"> -->
          <Button> Edit </Button>
          <Button @click="() => removeTask(index)"> Remove </Button>
        </div>
      </li>
    </ul>

    <!-- add task btn -->
    <!-- :disabled="inputStatus" -->
    <div class="mt-2 flex flex-col gap-4 items-center">
      <input
        :value="inputText"
        @input="onInputChange"
        type="text"
        :placeholder="
          locale === 'en' ? 'Enter Your Task' : 'برنامه خود را بنویسید'
        "
        :class="[
          'border-amber-50 border-1 italic w-96 px-4 py-2',
          locale === 'fa' ? 'text-right' : 'text-left',
        ]"
      />
      <Button class="w-40 text-center" @click="addTask">{{
        $t("addTask")
      }}</Button>
    </div>
  </div>
</template>

<style scoped>
.list {
  list-style: none;
  gap: 12px;
  padding: 0;
  width: 40rem;
}
.listItem {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: inherit;
  color: #fefefe;
  border: 1px solid #fefefe;
  border-radius: 12px;
  padding: 5px 16px;
  margin: 20px 0;
}
.taskInput {
  padding: 12px 50px;
  margin: 20px 0;
}
.todolist-layout {
  padding: 1rem;
  display: flex;
  flex-direction: column;
}
.actionBtns {
  display: flex;
  gap: 20px;
}
</style>

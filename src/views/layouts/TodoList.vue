<script setup lang="ts">
import { ref } from "vue";
// @ts-ignore: ignore next line
import Button from "../../ui/Button.vue";

// const inputStatus = ref(false);
const inputText = ref("");

interface ListItem {
  text: string;
  priority: boolean;
}

const list = ref<ListItem[]>([]);
console.log(list);

function onInputChange() {
  // @ts-ignore: ignore next line
  const value = (event.target as HTMLInputElement).value;
  inputText.value = value;
}
function clearInputOnSubmit() {
  inputText.value = "";
}

function addTask() {
  // const s: string = prompt("enter ur task here,i dont have time to add input");

  // if (!inputStatus.value) {
  //   inputStatus.value = true;
  // }

  if (inputText.value) {
    list.value.push({
      text: inputText.value,
      priority: true,
    });
    clearInputOnSubmit();
  }
}
function removeTask(index: number) {
  list.value.splice(index, 1);
}
</script>

<template>
  <div
    class="todolist-layout flex flex-col gap-2 justify-between items-center h-11/12"
  >
    <ul class="mb-10 gap-12 p-0 w-2xl">
      <li v-for="(item, index) in list" :key="index" class="listItem">
        <p>
          {{ item.text }}
        </p>

        <div class="actionBtns">
          <Button @click="() => removeTask(index)"> Edit </Button>
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
        placeholder="Enter your task..."
        class="border-amber-50 border-1 italic w-96 px-4 py-2"
      />
      <Button class="w-40 text-center" @click="addTask"> Add Task </Button>
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

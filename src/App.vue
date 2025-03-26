<script setup>
import { ref } from 'vue'

const allTasks = ref([]);
const newTask = ref('');

const addTask = () => {
  if (newTask.value.trim()) {
    allTasks.value.push(newTask.value.trim());
    newTask.value = '';
  }
};
const deleteTask = (index) => {
  allTasks.value.splice(index, 1);
};
</script>

<template>
  <h1>Simplest To do app ever!</h1>
  <br>
  <div>
    <input v-model="newTask" type="text" placeholder="Enter a task" />
    <button @click="addTask">Add</button>
  </div>
  <br>
  <div>
    <ul>
      <li v-for="(task, index) in allTasks" :key="index">
        {{ task }}
        <button @click="deleteTask(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>
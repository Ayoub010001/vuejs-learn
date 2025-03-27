<!-- 
**This code without Pinia store** 

<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>


<template>
  <form @submit.prevent="addTodo">
    <input v-model="newTodo" required placeholder="new todo">
    <button>Add Todo</button>
  </form>
  <ul>
    <li v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template> 
-->

<script setup>
import AddTodoForm from './components/AddTodoForm.vue';
import HideShowBtn from './components/HideShowBtn.vue';
import Todos from './components/Todos.vue';
</script>

<template>
  <h1>Simplest To-app ever!</h1>
  <AddTodoForm />
  <Todos />
  <HideShowBtn />
</template>

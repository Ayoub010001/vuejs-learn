<script setup>
  import { useTodoStore } from '../store/todoStore';
  const todoStore = useTodoStore();
</script>

<template>
    <ul>
        <li v-for="todo in todoStore.filteredTodos" :key="todo.id">
        <input type="checkbox" v-model="todo.done" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="todoStore.removeTodo(todo)">X</button>
        </li>
    </ul>
</template>
<style>
.done {
  text-decoration: line-through;
}
</style>
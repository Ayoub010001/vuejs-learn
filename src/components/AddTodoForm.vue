<script setup>
  import { useTodoStore } from '../store/todoStore';
  const todoStore = useTodoStore();
</script>

<template>
    <form @submit.prevent="todoStore.addTodo">
      <input type="text" v-model="todoStore.newTodo" required placeholder="new todo" />
      <button class="btn">Add Todo</button>
    </form>
</template>

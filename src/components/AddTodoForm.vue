<script setup>
  import { useTodoStore } from '../store/todoStore';
  const todoStore = useTodoStore();
</script>

<template>
    <form @submit.prevent="todoStore.addTodo">
      <input v-model="todoStore.newTodo" required placeholder="new todo" />
      <button>Add Todo</button>
    </form>
</template>

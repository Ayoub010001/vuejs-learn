<script setup>
  import { useTodoStore } from '../store/todoStore';
  const todoStore = useTodoStore();
</script>

<template>
<button @click="todoStore.hideCompleted = !todoStore.hideCompleted">
    {{ todoStore.hideCompleted ? 'Show all' : 'Hide completed' }}
  </button>
</template>
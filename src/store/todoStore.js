// filepath: c:\Users\aritoub\Desktop\learn\VueJs\first-vue-project\src\stores\todoStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useTodoStore = defineStore('todo', () => {
  let id = 0;
  const todos = ref([
    { id: id++, text: 'Learn HTML', done: true },
    { id: id++, text: 'Learn JavaScript', done: true },
    { id: id++, text: 'Learn Vue', done: false },
  ]);
  const newTodo = ref('');
  const hideCompleted = ref(false);

  const filteredTodos = computed(() => {
    return hideCompleted.value
      ? todos.value.filter((t) => !t.done)
      : todos.value;
  });

  const addTodo = () => {
    if (newTodo.value.trim()) {
      todos.value.push({ id: id++, text: newTodo.value.trim(), done: false });
      newTodo.value = '';
    }
  };

  const removeTodo = (todo) => {
    todos.value = todos.value.filter((t) => t !== todo);
  };

  return {
    todos,
    newTodo,
    hideCompleted,
    filteredTodos,
    addTodo,
    removeTodo,
  };
});
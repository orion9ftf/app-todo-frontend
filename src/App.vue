<template>
  <div id="app">
    <div class="container">
      <h1>API</h1>
      <h6>Todos and todos</h6>

      <AddTodo />
      <FilterTodos />
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos.vue";

export default {
  name: "App",
  components: {
    Todo,
    AddTodo,
    FilterTodos,
    FilterTodos
}
};
</script>

<style>
body {
  font-family: sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}

.contaner {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>

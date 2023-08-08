import { createApp } from "vue";

createApp({
  data() {
    return {
      todos: [
        { title: "Code a to-do list", done: false },
        { title: "Eat breakfast", done: true },
        { title: "Do some exercise", done: false },
        { title: "Water the plants", done: true }
      ],
      newTodo: null
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo) {
        this.todos.push({ title: this.newTodo.trim(), done: false });
        this.newTodo = null;
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
}).mount('#todosContainer');

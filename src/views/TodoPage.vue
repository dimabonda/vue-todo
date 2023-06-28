<template>
  <div>
    <h2>Todo application</h2>
    <router-link to="/">Home</router-link>
    <hr>
    <AddTodoForm 
        v-on:add-todo="addTodo"
    />
		<select v-model="filterName">
			<option value="all">All</option>
			<option value="completed">Completed</option>
			<option value="not-completed">Not-completed</option>
		</select>
    <TodoList 
    	v-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
		<h3 v-else>No todos!</h3>
  </div>
</template>

<script>
import TodoList from '@/components/TodoList'
import AddTodoForm from '@/components/AddTodoForm'

export default {
  name: 'App',
  data(){
    return {
      todos: [
            {id: 1, title: "learn node js", completed: false},
            {id: 2, title: "learn Vue js", completed: false},
            {id: 3, title: "learn angular js", completed: false}
      ],
			filterName: 'all'
    }
  },
  components: {
    TodoList,
    AddTodoForm
  },
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter((todo) => todo.id !== id)
    },
    addTodo(todo){
      this.todos.push(todo)
    }
  },
	computed: {
		filteredTodos(){
			if(this.filterName === "all"){
				return this.todos
			}
			if(this.filterName === "completed"){
				return this.todos.filter(todo => todo.completed)
			}
			if(this.filterName === "not-completed"){
				return this.todos.filter(todo => !todo.completed)
			}
		}
	}
}
</script>
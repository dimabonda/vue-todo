<template>
    <li>
        <span v-bind:class="{done: todo.completed}">
            <input type="checkbox" v-model="todo.completed" />
            <strong>{{index + 1}}</strong>
            {{todo.title | uppercase}}
        </span>
        <button v-on:click="$emit('remove-todo', todo.id)" class="remove-btn">&times;</button>
    </li>
</template>

<script>
export default {
  props: {
    todo: {
        required: true,
        type: Object
    },
    index: {
      type: Number
    }
  },
  filters: {
    uppercase(value){
      return value.toUpperCase()
    }
  }
}

</script>

<style scoped>
    li {
      display: flex;
      justify-content: space-between;
      border: 1px solid #ccc;
      padding: .5rem 2rem;
      margin-bottom: 1rem;
    }
    .remove-btn {
      border-radius: 50%;
      background-color: red;
      color: #fff;
      font-weight: 700;
    }
    .done{
      text-decoration: line-through;
    }
</style>
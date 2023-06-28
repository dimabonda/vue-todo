<template>
    <form v-on:submit.prevent="addTodo">
        <input type="text" v-model="inputValue">
        <button type="submit">Add</button>
    </form>
</template>

<script>

export default {
	data(){
			return {
					inputValue: ''
			}
	},
	methods: {
		addTodo(){
			if(this.inputValue.trim()){
				const newTodo = {
					id: Date.now(),
					title: this.inputValue,
					completed: false
				}
				this.$emit("add-todo", newTodo)  
				this.inputValue = ''
			}
		}
	}
}

</script>

<style scoped>
    form {
        margin-bottom: 1rem;
    }
    input{
        width: 400px;
        margin-right: 1rem;
    }
</style>
<script setup>

import Tasks from '@/data/task.js';
import { ref } from 'vue';
import TodoItem from '@/components/TodoItem.vue';
const vueTask = ref(Tasks)
// console.log(vueTask);
const newTask= ref('')

function addTask(){
    const taskName  = newTask.value && newTask.value.trim();
    vueTask.value.push({
        id: Date.now(),
        text: taskName,
        done: false
    })
}
function taskDone(task) {
    task.done = !task.done;
}
function taskRemove(task) {
    vueTask.value = vueTask.value.filter(t => t.id !== task.id);
}
</script>

<template>
    <h1>Todolist</h1>
    <form @submit.prevent="addTask">
    <input v-model="newTask">
    <button>Add</button>    
    </form>

    <ul v-if="vueTask.length>0">
        <TodoItem
             v-for ="task in vueTask" :key="task.id"
             :task="task" 

             @done="taskDone"
             @remove="taskRemove"
        />
    </ul>
    <!-- :task is the prop passed to TodoItem -->
     <!-- @done and @remove are the custom events emitted from TodoItem -->
</template>

<style scoped>
h3 {
    color: #b51010;
}
ul {
    list-style-type: square;
}
button{
    color: #e7e3e3;
    background-color: #b51010;
}
</style>
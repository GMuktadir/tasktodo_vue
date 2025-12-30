<template>
    <li>
            <input type="checkbox" :checked="task.done"> {{ task.text }}
            <button type="button" @click="$emit('done', task)">Done</button>
            <button type="button" @click="$emit('remove', task)">Remove</button>
        </li>

</template>

<script setup>
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
});
</script>
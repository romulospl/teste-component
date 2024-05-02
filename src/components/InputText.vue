<script setup>

const props = defineProps(["label", "placeholder"])
</script>

<template>
    <label>{{ props.label }}</label>
    <input :placeholder="props.placeholder" style="margin-left:10px" />
</template>

<style scoped>
input {
    border-radius: 25px;
    padding: 5px;
}
</style>
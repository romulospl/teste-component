<script setup>
import { ref } from 'vue'

defineProps({
  label: String,
})

const count = ref(0)
</script>

<template>
  <div style="background-color: green;">
    <slot name="label"  v-if="$slots.label"></slot>
    <div v-else>{{ label }}</div>
    
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

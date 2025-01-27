<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <UnnnicButton>aaaa</UnnnicButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

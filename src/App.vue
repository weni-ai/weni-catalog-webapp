<template>
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
@import '@weni/unnnic-system/src/assets/scss/unnnic.scss';
@import './styles/reset.scss';

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>

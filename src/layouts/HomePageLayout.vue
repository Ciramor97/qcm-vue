<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from "../components/layout/Footer.vue";
</script>

<style scoped></style>

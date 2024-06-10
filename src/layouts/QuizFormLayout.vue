<template>
  <div class="w-screen h-screen overflow-x-hidden">
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from "../components/layout/Header.vue";
import Footer from "../components/layout/Footer.vue";
</script>

<style scoped></style>

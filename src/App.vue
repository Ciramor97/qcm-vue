<script setup lang="ts">
import FormLayout from "./layouts/FormLayout.vue";
import HomePageLayout from "./layouts/HomePageLayout.vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <FormLayout v-if="route.name !== 'home'">
    <RouterView />
  </FormLayout>

  <HomePageLayout v-if="route.name == 'home'">
    <RouterView />
  </HomePageLayout>
</template>

<style scoped>
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

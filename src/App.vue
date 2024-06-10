<script setup lang="ts">
import QuizFormLayout from "./layouts/QuizFormLayout.vue";
import HomePageLayout from "./layouts/HomePageLayout.vue";
import { RouterView, useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <HomePageLayout v-if="route.name == 'home'">
    <RouterView />
  </HomePageLayout>

  <QuizFormLayout v-else>
    <RouterView />
  </QuizFormLayout>
</template>

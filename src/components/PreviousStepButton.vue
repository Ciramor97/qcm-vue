<template>
  <button class="py-4 px-6 border rounded-[43px] border-primary flex">
    <ArrowLeftOutline />
    <span class="text-primary ml-3 font-semibold">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import ArrowLeftOutline from '../components/icons/ArrowLeftOutline.vue';

const props = defineProps<{
  label: string;
}>();
</script>

<style scoped></style>

<template>
  <button
    class="lg:p-4 md:p-3 p-2 text-sm rounded-[43px] bg-roseLight text-center font-semibold text-white"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
}>();
</script>

<style scoped></style>

<template>
  <button
    :disabled="disabled"
    class="lg:p-2 md:p-3 p-2 text-sm rounded-[43px] flex sm:gap-2 sm:flex-col md:flex-row items-center justify-center hover:text-roseLight"
    :class="
      withBorder
        ? 'text-roseLight bg-white border-roseLight border hover:bg-rose'
        : 'text-white bg-roseLight hover:bg-roseDark hover:text-white'
    "
  >
    <slot> </slot>
    <span v-if="loading" class="loader"></span>
    <span class="ml-1 font-semibold">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  withBorder: boolean;
  loading?: boolean;
  disabled?: boolean;
}>();
</script>

<style scoped>
.loader {
  border: 4px solid #f3f3f3; /* Light grey */
  border-top: 4px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <button
    class="lg:p-0 md:p-3 p-2 text-sm rounded-[43px] flex items-center hover:bg-rose"
    :class="
      withBorder
        ? 'text-roseLight bg-white border-roseLight border'
        : 'text-white bg-roseLight'
    "
  >
    <slot> </slot>

    <span class="ml-1 font-semibold">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  withBorder: boolean;
}>();
</script>

<style scoped></style>

<template>
  <div
    class="bg-light-gray py-[16px] px-[13px] text-secondary hover:text-light-pink flex justify-between rounded-lg hover:cursor-pointer transition ease-in-out delay-150 duration-300 hover:bg-pink"
  >
    <span class="font-semibold text-sm">{{ item }}</span>
    <ArrowRight />
  </div>
</template>

<script setup lang="ts">
import ArrowRight from "./icons/ArrowRight.vue";

defineProps<{
  item: string;
}>();
</script>

<style scoped></style>

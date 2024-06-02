<template>
  <div
    class="bg-[#F2F2F2] py-[16px] px-[13px] flex justify-between rounded-lg hover:cursor-pointer"
  >
    <span class="text-[#443D3C] font-semibold text-sm">{{ item }}</span>
    <ArrowRight />
  </div>
</template>

<script setup lang="ts">
import ArrowRight from '../components/icons/ArrowRight.vue';

const props = defineProps<{
  item: string;
}>();
</script>

<style scoped></style>

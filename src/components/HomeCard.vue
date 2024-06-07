<template>
  <li
    class="bg-rose px-[17px] py-[15px] rounded-lg shadow-custom flex flex-col items-center hover:bg-roseLight"
    @mouseover="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <component :is="icon" :bgColor="isHovered ? hoverBgColor : bgColor" />
    <div
      class="mt-2 text-center p-1 font-bold text-sm"
      :class="isHovered ? 'text-roseLight bg-white' : 'text-white bg-roseLight'"
    >
      {{ title }}
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  icon: any;
  title: string;
  bgColor: string;
  hoverBgColor: string;
}>();
const isHovered = ref(false);
</script>

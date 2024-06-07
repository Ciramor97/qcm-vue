<template>
  <li class="flex items-center">
    <component :is="icon" />

    <span class="ml-2 font-medium leading-[18.9px]"> {{ label }} </span>
  </li>
</template>

<script setup lang="ts">
defineProps<{
  icon: any;
  label: string;
}>();
</script>

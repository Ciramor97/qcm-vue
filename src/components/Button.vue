<template>
  <button
    :disabled="isDisabled"
    class="lg:p-2 md:p-3 p-2 text-sm rounded-[43px] flex sm:gap-2 md:flex-row items-center hover:text-light-pink justify-center"
    :class="
      withBorder
        ? 'text-light-pink bg-white border-light-pink border hover:bg-pink'
        : 'text-white bg-light-pink hover:bg-dark-pink hover:text-white'
    "
  >
    <slot> </slot>
    <span v-if="loading" class="loader"></span>
    <span class="ml-1 font-semibold">{{ label }}</span>
  </button>
</template>

<script setup lang="ts">
import { useIsFormDirty, useIsFormValid } from "vee-validate";
import { computed } from "vue";

const isDirty = useIsFormDirty();
const isValid = useIsFormValid();

const isDisabled = computed(() => {
  return !isDirty.value || !isValid.value;
});

defineProps<{
  label: string;
  withBorder: boolean;
  loading?: boolean;
}>();
</script>

<style scoped>
.loader {
  border: 4px solid theme("colors.light-pink");
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

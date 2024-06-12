<template>
  <div>
    <label
      class="flex gap-1 text-xs text-left opacity-80 text-black font-semibold"
      :class="{ 'text-light-pink': error }"
    >
      {{ label }}<span class="text-light-pink">*</span>
    </label>

    <Field
      :name="name"
      class="rounded p-2 border w-full"
      :class="{ 'border-light-pink': error }"
    />
    <br />
    <ErrorMessage
      :name="name"
      :class="{ 'text-light-pink text-[10px]': error }"
    />
  </div>
</template>

<script setup lang="ts">
import { Field, ErrorMessage } from "vee-validate";

defineProps<{
  label: string;
  error: string | undefined;
  name:string
}>();
</script>

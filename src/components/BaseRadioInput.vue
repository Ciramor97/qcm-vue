<template>
  <Field name="payment_mode" type="radio" :value="value" v-slot="{ field }">
    <label :for="id" class="cursor-pointer">
      <div
        class="rounded-lg p-4 bg-light-gray font-semibold flex justify-between"
      >
        {{ label }}
        <input
          :id="id"
          type="radio"
          :value="value"
          v-bind="field"
          class="w-5 h-5 accent-light-pink"
        />
      </div>
    </label>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate";

defineProps<{
  value: string;
  label: string;
  id: string;
}>();
</script>

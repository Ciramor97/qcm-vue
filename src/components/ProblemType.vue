<template>
  <div class="bg-rose px-10 pt-4 pb-3 rounded-lg shadow-custom">
    <component
      :is="
        problem == 'Plomberie'
          ? Plomberie
          : problem === 'Electricite'
          ? 'Electricite'
          : 'Chauffage'
      "
    />
    <div class="bg-roseLight mt-2 text-center p-1 text-white font-bold text-sm">
      {{ problem }}
    </div>
  </div>
</template>

<script setup lang="ts">
import Plomberie from "../components/icons/Plomberie.vue";
import Electricite from "../components/icons/Electricite.vue";
import Chauffage from "../components/icons/Chauffage.vue";

const props = defineProps<{
  problem: string;
}>();
</script>

<style scoped></style>

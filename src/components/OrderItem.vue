<template>
  <div
    class="bg-light-gray p-2 text-secondary hover:text-light-pink rounded-lg hover:cursor-pointer transition ease-in-out delay-150 duration-300 hover:bg-pink"
  >
    <div class="flex justify-between">
      <span
        >{{ order.userInfos.firstname }} {{ order.userInfos.firstname }}</span
      >
      <ArrowRight />
    </div>
    <div class="italic text-xs pt-1">
      Commande du {{ formatDateDDMMYYYY(order.createdAt) }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { GetOrderList } from "../types";
import ArrowRight from "./icons/ArrowRight.vue";
import { formatDateDDMMYYYY } from "../date/utils";

defineProps<{
  order: GetOrderList;
}>();
</script>

<style scoped></style>

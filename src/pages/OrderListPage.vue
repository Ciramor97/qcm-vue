<template>
  <div class="bg-[#F2F2F2] flex flex-col py-20 md:px-12 lg:px-[150px]">
    <div class="py-4 gap-3 mb-3 flex flex-col items-center">
      <h1
        class="text-black text-2xl md:text-[34px] leading-[51px] font-bold text-center"
      >
        Liste des commandes
      </h1>
      <Separator color="#FF445F" />
    </div>
    <div
      class="bg-white px-8 py-[38px] mx-10 my-4 rounded-lg shadow-custom pb-6"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 list-none">
        <OrderItem
          v-for="order in orderList"
          :order="order"
          @click="
            router.push({
              name: 'order-details',
              params: { id: order._id },
            })
          "
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { GetOrderList } from "../types";

import Separator from "../components/icons/Separator.vue";
import OrderItem from "../components/OrderItem.vue";
import { useOrderStore } from "../store/index";
import { useRouter } from "vue-router";

const orderStore = useOrderStore();
const router = useRouter();

const orderList = ref<GetOrderList[]>([]);

onMounted(async () => {
  orderList.value = await orderStore.getOrderList();
});
</script>

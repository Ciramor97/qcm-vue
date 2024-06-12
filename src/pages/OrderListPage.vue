<template>
  <div class="bg-[#F2F2F2] flex flex-col h-full py-20 md:px-12 lg:px-[150px]">
    <div class="pt-4 gap-3 mb-3 flex flex-col items-center">
      <h1
        class="text-black text-2xl md:text-[34px] leading-[51px] font-bold text-center"
      >
        Liste des commandes
      </h1>
      <Separator color="#FF445F" />
    </div>
    <div class="bg-white px-8 py-[38px] mx-10 my-4 rounded-lg shadow-custom">
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 list-none">
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
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import Separator from "../components/icons/Separator.vue";
import OrderItem from "../components/OrderItem.vue";
import { onMounted, ref } from "vue";
import { useQuizStore } from "../store";
import { GetOrderList } from "../types";
import { useRouter } from "vue-router";

const answerStore = useQuizStore();
const router = useRouter();

const orderList = ref<GetOrderList[]>([]);

onMounted(async () => {
  orderList.value = await answerStore.getOrderList();
});
</script>

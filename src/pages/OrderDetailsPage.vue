<template>
  <div class="bg-[#F2F2F2] flex flex-col py-20 md:px-12 lg:px-[150px]">
    <div class="pt-4 gap-3 mb-3 flex flex-col items-center">
      <h1
        class="text-black text-2xl md:text-[34px] leading-[51px] font-bold text-center"
      >
        Informations de la commande
      </h1>
      <Separator color="#FF445F" />
    </div>

    <div
      v-if="order"
      class="bg-white px-8 py-[38px] mx-10 my-4 rounded-lg shadow-custom"
    >
      <h1>
        <span
          class="bg-light-pink px-2 text-white font-extrabold text-center mr-2"
          >1</span
        >
        <span class="font-semibold text-lg">Informations du client</span>
      </h1>
      <div class="grid gap-2 md:grid-cols-2 md:gap-4 py-2">
        <div>
          <p>Nom</p>
          <p class="text-sm">{{ order.user.firstname }}</p>
        </div>
        <div>
          <p>Prénom</p>
          <p class="text-sm">{{ order.user.lastname }}</p>
        </div>
        <div>
          <p>Email</p>
          <p class="text-sm">{{ order.user.email }}</p>
        </div>
        <div>
          <p>Numéro</p>
          <p class="text-sm">{{ order.user.phone }}</p>
        </div>
      </div>

      <h1>
        <span
          class="bg-light-pink px-2 text-white font-extrabold text-center mr-2"
          >2</span
        >
        <span class="font-semibold text-lg">Réponses du client</span>
      </h1>
      <div class="py-2 gap-2">
        <div v-for="item in order.quiz" class="mb-3">
          <p class="italic text-light-pink text-sm font-semibold">
            &rarr; {{ item.label }}
          </p>
          <p class="text-sm font-medium">{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { GetOrder } from "../types";
import Separator from "../components/icons/Separator.vue";

import { useOrderStore } from "../store/index";
import { useRoute } from "vue-router";

const route = useRoute();
const answerStore = useOrderStore();

const order = ref<GetOrder | null>(null);

onMounted(async () => {
  order.value = await answerStore.getOrder(route.params.id as string);
});
</script>

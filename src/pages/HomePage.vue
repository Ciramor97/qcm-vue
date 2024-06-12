<template>
  <div
    class="bg-secondary w-full h-full flex flex-col items-center rounded-t-lg"
  >
    <div class="pt-20 flex flex-col items-center">
      <h1 class="md:text-4xl font-bold text-white text-center text-xl">
        Mon problème concerne :
      </h1>
      <div class="py-6">
        <Separator color="#FFF" />
      </div>
      <!-- improve: replace id string by const -->
      <div
        class="grid grid-cols-2 md:grid-cols-3 mb-20 gap-4 hover:cursor-pointer list-none"
        @click="
          router.push({
            name: 'quiz',
            params: { id: PLOMBERIE_ID },
          })
        "
      >
        <HomeCard
          v-for="item in typeOfProblem"
          :key="item.label"
          :icon="item.icon"
          :title="item.label"
          bg-color="#FF445F"
          hover-bg-color="#FFF"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { PLOMBERIE_ID } from "../constants";

import Separator from "../components/icons/Separator.vue";
import Plomberie from "../components/icons/Plomberie.vue";
import Electricite from "../components/icons/Electricite.vue";
import Chauffage from "../components/icons/Chauffage.vue";
import Serrurerie from "../components/icons/Serrurerie.vue";
import Vitrerie from "../components/icons/Vitrerie.vue";
import Electromenager from "../components/icons/Electromenager.vue";

import HomeCard from "../components/HomeCard.vue";

import { useOrderStore } from "../store/index";
import { useQuizStore } from "../store/quiz";

import { useRouter } from "vue-router";

const router = useRouter();

const typeOfProblem = [
  { icon: Plomberie, label: "Plomberie" },
  { icon: Electricite, label: "Electricité" },
  { icon: Chauffage, label: "Chauffage" },
  { icon: Serrurerie, label: "Serrurerie" },
  { icon: Vitrerie, label: "Vitrerie" },
  { icon: Electromenager, label: "Electromenager" },
];

onMounted(() => {
  useOrderStore().cleanState(null);
  useQuizStore().getQuiz();
});
</script>

<template>
  <div
    class="bg-light-gray flex flex-col pt-10 pb-20 md:pt-20 md:px-12 lg:px-[150px]"
  >
    <div class="pt-4 md:gap-3 md:mb-3 flex flex-col items-center">
      <h1
        class="text-black md:text-2xl text-sm leading-[51px] font-bold text-center"
      >
        {{ currentQuiz.question }}
      </h1>
      <Separator color="#FF445F" class="w-14 md:w-full" />
    </div>
    <div class="bg-white px-8 py-[38px] mx-10 my-4 rounded-lg shadow-custom">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 list-none">
        <AnswerCard
          v-for="item in currentQuiz.answers"
          :item="item.label"
          @click="selectAnswer(item.id, item.label)"
        />
      </div>
      <PreviousStepButton
        :with-border="true"
        label="Etape précédente"
        @click="router.back()"
        ><ArrowLeftOutline
      /></PreviousStepButton>
    </div>
    <ul
      class="bg-light-green p-10 mx-10 mb-20 rounded-lg flex flex-col gap-2 text-secondary text-sm list-none"
    >
      <li class="flex items-center gap-2">
        <Check />
        <span
          >Plus de <b>1500 professionnels qualifiés</b>, recrutés selon des
          critères et un processus stricts</span
        >
      </li>
      <li class="flex items-center gap-2">
        <Check />
        <span
          >Fourchette tarifaire <b>connue à l’avance</b>, incluant le
          déplacement ainsi qu’un devis gratuits</span
        >
      </li>
      <li class="flex items-center gap-2">
        <Check />
        <span
          >Intervention <b>7j/7 24h/24</b> pour les dépannages d’urgence</span
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, watch, ref } from "vue";

import Separator from "../components/icons/Separator.vue";
import ArrowLeftOutline from "../components/icons/ArrowLeftOutline.vue";
import Check from "../components/icons/Check.vue";
import PreviousStepButton from "../components/Button.vue";
import AnswerCard from "../components/AnswerCard.vue";

import { useOrderStore } from "../store/index";
import { useQuizStore } from "../store/quiz";

import { useRouter, useRoute } from "vue-router";
import { PLOMBERIE_ID } from "../constants";

const router = useRouter();
const route = useRoute();
const orderStore = useOrderStore();
const quizStore = useQuizStore();

const routeId = ref(route.params.id || PLOMBERIE_ID);

let currentQuiz = reactive(quizStore.items[0]);

function selectAnswer(id: string, label: string) {
  orderStore.addAnswer(currentQuiz.id, label);

  if (quizStore.items.some((q) => q.parentAnswer == id)) {
    router.push({ name: "quiz", params: { id } });
  } else {
    router.push({ name: "summary" });
  }
}

watch(
  () => route.params.id,
  (newId) => {
    loadQuiz(newId as string);

    orderStore.cleanState(currentQuiz.id);
  },
  {
    immediate: true,
  }
);

function loadQuiz(id: string) {
  if (id === PLOMBERIE_ID) {
    currentQuiz = quizStore.items[0];
  } else {
    const data = quizStore.items.find((item) => item.parentAnswer == id);

    if (data) {
      currentQuiz = data;
    }
  }
}

onMounted(() => {
  loadQuiz(routeId.value as string);
});
</script>

<style scoped></style>

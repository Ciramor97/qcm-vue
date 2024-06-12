<template>
  <div class="bg-[#F2F2F2] flex flex-col pt-20 md:px-12 lg:px-[150px]">
    <div class="pt-4 gap-3 mb-3 flex flex-col items-center">
      <h1
        class="text-black text-2xl md:text-[34px] leading-[51px] font-bold text-center"
      >
        {{ currentQuiz.question }}
      </h1>
      <Separator color="#FF445F" />
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

import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const orderStore = useOrderStore();

const routeId = ref(route.params.id || "66663358c71ed5439e6bb6f0"); // replace 1 by the first quiz id

let currentQuiz = reactive(orderStore.items[0]);

function selectAnswer(id: string, label: string) {
  orderStore.addAnswer(currentQuiz.id, label);

  if (orderStore.items.some((q) => q.parentAnswer == id)) {
    router.push({ name: "quiz", params: { id } });
  } else {
    router.push({ name: "summary" });
  }
}

watch(
  () => route.params.id,
  (newId) => {
    console.log(`new Id is ${newId}`);

    loadQuiz(newId as string);
    //  orderStore.cleanState(newId);
    orderStore.cleanState(currentQuiz.id);
    console.log(
      "==== orderStore.orderData.quizAnswers",
      orderStore.orderData.quizAnswers
    );
  },
  {
    immediate: true,
  }
);

function loadQuiz(id: string) {
  const isFirstQuiz = orderStore.items.find(
    (item) => item.id == id
  )?.parentAnswer;

  if (isFirstQuiz === null) {
    currentQuiz = orderStore.items[0];
  } else {
    const data = orderStore.items.find((item) => item.parentAnswer == id);
    console.log("data=loadquiz", data);

    if (data) {
      currentQuiz = data;
    }
  }
  console.log("data=loadquiz currentQuiz==", currentQuiz);
}

onMounted(() => {
  loadQuiz(routeId.value as string);
});
</script>

<style scoped></style>

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
      <ul class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2 list-none">
        <AnswerCard
          v-for="item in currentQuiz.answers"
          :item="item.label"
          @click="selectAnswer(item.id, item.label)"
        />
      </ul>
      <PreviousStepButton
        :with-border="true"
        label="Etape précédente"
        @click="goToPreviousStep"
        ><ArrowLeftOutline
      /></PreviousStepButton>
    </div>
    <ul
      class="bg-lightGreen p-10 mx-10 mb-20 rounded-lg flex flex-col gap-2 text-secondary text-sm list-none"
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
import Separator from "../components/icons/Separator.vue";
import AnswerCard from "../components/AnswerCard.vue";
import PreviousStepButton from "../components/PreviousStepButton.vue";
import Check from "../components/icons/Check.vue";
import { reactive, onMounted, watch, ref } from "vue";
import ArrowLeftOutline from "../components/icons/ArrowLeftOutline.vue";

import { useAnswerStore } from "../store/answer";

import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const answerStore = useAnswerStore();

const routeId = ref(route.params.id || 1);
const items = reactive([
  {
    id: 1,
    question: "Où se situe votre problème ?",
    answers: [
      {
        id: 2,
        label: "WC",
      },
      {
        id: 3,
        label: "Douche/Baignoire",
      },
    ],
  },
  {
    id: 2,
    question: "Quelle est la nature de votre problème ?",
    answers: [
      {
        id: 5,
        label: "Engorgement (WC bouchés)",
      },
      {
        id: 6,
        label: "Fuite (recherche de fuite)",
      },
    ],
  },
  {
    id: 3,
    question: "Quelle est la nature de votre problème ?",
    answers: [
      {
        id: 7,
        label: "Engorgement (Douches bouchés)",
      },
      {
        id: 8,
        label: "Douche à nettoyer",
      },
    ],
  },
  {
    id: 5,
    question: "Votre WC possède t-il un sanibroyeur ?",
    answers: [
      {
        id: 9,
        label: "Oui",
      },
      {
        id: 10,
        label: "Non",
      },
    ],
  },
]);

let currentQuiz = reactive(items[0]);

function selectAnswer(id: string, label: string) {
  // const foundItem = items.find((item) => item.id == id); //back request to get the new items object
  console.log("id");


  //keep it
  answerStore.addAnswer(id, label);

  if (answerStore.items.some((q) => q.id === +id)) {
    console.log(
      "go next==",
      id,
      "===answeer==",
      answerStore.formData.quizAnswers
    );

    router.push({ name: "quiz", params: { id } });
    console.log("can u come here=====");
  } else {
    router.push({ name: "summary" });
  }
}

function goToPreviousStep() {
  router.back();
}

watch(
  () => route.params.id,
  (newId) => {
    console.log(`new Id is ${newId}`);
    loadQuiz(+newId);
    answerStore.cleanState(+newId);
    console.log("====", answerStore.formData.quizAnswers);
  },
  {
    immediate: true,
  }
);

function loadQuiz(id: number) {
  const data = items.find((item) => item.id == id);

  if (data) {
    currentQuiz = { ...data };
  }
}

onMounted(() => {
  console.log("route Id===", routeId.value);

  loadQuiz(routeId.value as any);
});
</script>

<style scoped></style>

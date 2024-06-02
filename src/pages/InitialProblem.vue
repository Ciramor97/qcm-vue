<template>
  <div class="bg-[#F2F2F2] flex flex-col pt-20">
    <div class="pt-4 flex flex-col items-center">
      <h1 class="text-black text-4xl font-bold">
        {{ actualItem.question }}
      </h1>
      <div class="py-3">
        <Separator color="#FF445F" />
      </div>
    </div>
    <div
      class="bg-white px-8 py-[38px] py-4 mx-10 my-4 rounded-lg shadow-custom"
    >
      <div class="grid grid-cols-2 gap-4 mb-4">
        <Response
          v-for="item in actualItem.answers"
          :item="item.label"
          @click="selectAnswer(item.id)"
        />
      </div>

      {{ JSON.stringify(actualItem) }}
      <PreviousStepButton label="Etape précédente" @click="router.back()" />
    </div>
    <div
      class="bg-lightGreen p-10 mx-10 mb-20 rounded-lg flex flex-col space-y-2 text-secondary"
    >
      <p class="flex items-center">
        <Check />
        <span class="ml-2"
          >Plus de <b>1500 professionnels qualifiés</b>, recrutés selon des
          critères et un processus stricts</span
        >
      </p>
      <p class="flex">
        <Check />
        <span class="ml-2"
          >Fourchette tarifaire <b>connue à l’avance</b>, incluant le
          déplacement ainsi qu’un devis gratuits</span
        >
      </p>
      <p class="flex">
        <Check />
        <span class="ml-2"
          >Intervention <b>7j/7 24h/24</b> pour les dépannages d’urgence</span
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Separator from '../components/icons/Separator.vue';
import Response from '../components/Response.vue';
import PreviousStepButton from '../components/PreviousStepButton.vue';
import Check from '../components/icons/Check.vue';
import { reactive, onMounted, watch, ref } from 'vue';

import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const items = reactive([
  {
    id: 1,
    question: 'Où se situe votre problème ?',
    answers: [
      {
        id: 2,
        label: 'WC',
      },
      {
        id: 3,
        label: 'Douche/Baignoire',
      },
    ],
  },
  {
    id: 2,
    question: 'Quelle est la nature de votre problème ?',
    answers: [
      {
        id: 5,
        label: 'Engorgement (WC bouchés)',
      },
      {
        id: 6,
        label: 'Fuite (recherche de fuite)',
      },
    ],
  },
  {
    id: 3,
    question: 'Quelle est la nature de votre problème ?',
    answers: [
      {
        id: 7,
        label: 'Engorgement (Douches bouchés)',
      },
      {
        id: 8,
        label: 'Douche à nettoyer',
      },
    ],
  },
  {
    id: 6,
    question: 'Votre WC possède t-il un sanibroyeur ?',
    answers: [
      {
        id: 9,
        label: 'Oui',
      },
      {
        id: 10,
        label: 'Non',
      },
    ],
  },
]);

let actualItem = reactive(items[0]);
let currentId = ref(null);
function selectAnswer(id) {
  currentId.value = id;
  // const foundItem = items.find((item) => item.id == id); //back request to get the new items object

  console.log('currentId ===', currentId.value);
  router.push({ name: 'initial', params: { id } });
  //actualItem.question = foundItem.question;
  //actualItem.answers = foundItem.answers;
  //console.log('======actual====', actualItem);
}

watch(currentId, (newId) => {
  console.log(`new Id is ${newId}`);
  loadQuiz(currentId.value);
});

function loadQuiz(id: number) {
  console.log('loadquiz==', id);
  const data = items.find((q) => q.id === id);
  console.log('data==', data);

  if (data) {
    actualItem.question = data.question;
    actualItem.answers = data.answers;
  }
}

onMounted(() => {
  const id = +route.params.id;
  console.log('onMounted==', id);
  loadQuiz(id);
});
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

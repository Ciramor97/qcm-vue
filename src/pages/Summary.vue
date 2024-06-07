<template>
  <div class="bg-[#F2F2F2] flex flex-col py-20 md:px-12 lg:px-[150px]">
    <div class="py-4 flex md:flex-row flex-col justify-center gap-4 mx-30 px-10">
      <div class="md:w-2/3 w-full bg-white shadow-custom rounded-lg md:p-4 p-2">
        <EmptyImg  class="w-full h-auto" />
        <!-- <img class="bg-gray-400" :src="empty" alt="Summary" /> -->
        <h1 class="font-semibold text-lg py-4">Bon à savoir</h1>
        <p class="font-semibold text-[12px] text-justify">
          Vous faites face à des WC bouchés qui ne se vident plus correctement ?
          Vous vous interrogez sur les raisons de ce blocage et les solutions
          pour y remédier ? Faites appel à un plombier de MesDépanneurs.fr pour
          un débouchage efficace et rapide de vos toilettes !
          <br />
          <br />
          Informations utiles pour le cas "Débouchage de WC" Le coût du
          débouchage de WC sans sanibroyeur dépend de l'ampleur de l'engorgement
          de vos toilettes et de la complexité à éliminer le bouchon. Le cas
          "Débouchage de WC" comprend les prestations suivantes :
          <br />
          <br />
          <ul>
            <li v-for="item in answerStore.formData.quizAnswers">{{ item }}</li>
          </ul>
          - Les frais de déplacement et de main-d'œuvre,
          <br />
          <br />
          - La fourniture du matériel (pompe manuelle, acides, furet électrique,
          etc)
          <br />
          <br />
          - Le débouchage des WC,
          <br />
          <br />
          - Le nettoyage du chantier.
          <br />
          <br />
          Dans les cas les plus complexes, où le dégorgement dure plus de deux
          heures, le coût total pourrait excéder le devis initial (si l'usage
          d'un furet électrique sur différents niveaux est requis par exemple).
          <br />
          <br />
          Néanmoins, sachez que le plombier vous préviendra en amont de toute
          modification des frais si cette situation se produit.
        </p>
      </div>
      <div class="md:w-1/3 w-full">
        <div class="bg-rose shadow-custom p-4">
          <h1 class="text-roseLight text-base md:text-xl lg:text-2xl font-semibold">
            Réparation d’une fuite de la vanne principale ou avant la vanne
          </h1>
          <ul class="py-6 text-sm flex flex-col space-y-1">
            <InterventionInfo
            v-for="item in interventionInfos"
            :key="item.label"
            :icon="item.icon"
            :label="item.label"
        />
          </ul>
          <PreviousButton
            :withBorder="false"
            label="Demander une intervention"
            @click="router.push({ name: 'userInfos' })"
          />
        </div>
        <p class="text-[10px] pt-6 rounded-lg">
          <b
            >Vous êtes recontactés sous 20 minutes après votre passage de
            commande.</b
          >
          <br />
          Si l'origine de votre panne nécessite un diagnostic complémentaire, il
          s'agit d'une intervention à part entière demandant l'exêrtise d'un
          professionnel. Celle-ci fera l'objet d'une facturation.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InterventionInfo from "../components/InterventionInfo.vue";

import EuroCircle from "../components/icons/EuroCircle.vue";
import CircleValidation from "../components/icons/CircleValidation.vue";
import PreviousButton from "../components/PreviousStepButton.vue";
import EmptyImg from "../components/EmptyImg.vue";

import { useAnswerStore } from "../store/answer";

const answerStore = useAnswerStore();
import { useRouter } from "vue-router";

const interventionInfos = [
  { icon: EuroCircle, label: "Entre 150€ et 300€ TTC" },
  { icon: CircleValidation, label: "Gros matériel" },
  { icon: CircleValidation, label: "Déplacement" },
  { icon: CircleValidation, label: "Petites fournitures" },
  { icon: CircleValidation, label: "Nettoyage du chantier" },
  { icon: CircleValidation, label: "Main d’oeuvre" },
];

const router = useRouter();
</script>

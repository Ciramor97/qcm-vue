<template>
  <div class="bg-[#F2F2F2] flex flex-col py-20 md:px-12 lg:px-[150px]">
    <div
      class="py-4 flex md:flex-row flex-col justify-center gap-4 mx-30 px-10 sm:px-6"
    >
      <div
        class="md:w-2/3 sm:w-full bg-white shadow-custom rounded-lg md:p-4 py-2 px-4"
      >
        <Form
          :validation-schema="schema"
          @submit="onSubmit"
          v-slot="{ errors }"
        >
          <h1>
            <span
              class="bg-light-pink px-2 text-white font-extrabold text-center mr-2"
              >1</span
            >
            <span class="font-semibold text-lg">Informations</span>
          </h1>

          <div
            class="my-3 mb-8 grid sm:grid-cols-1 md:grid-cols-2 md:gap-4 gap-3"
          >
            <BaseInput
              name="firstname"
              label="Prénom"
              :error="errors.firstname"
            />
            <BaseInput name="lastname" label="Nom" :error="errors.lastname" />
            <BaseInput
              name="adress"
              label=" Adresse (numéro et voie)"
              :error="errors.adress"
            />
            <BaseInput
              name="postalCode"
              label="Code postal"
              :error="errors.postalCode"
            />
            <BaseInput name="phone" label="Téléphone" :error="errors.phone" />
            <BaseInput
              name="email"
              label="Adresse email"
              :error="errors.email"
            />
          </div>

          <h1>
            <span
              class="bg-light-pink px-2 text-white font-extrabold text-center mr-2"
              >2</span
            >
            <span class="font-semibold text-lg">Modes de paiement</span>
          </h1>
          <div class="mt-6">
            <div class="gap-2 flex flex-col">
              <BaseRadioInput
                value="PAY_ON_LINE"
                id="pay-on-line"
                label="Payer en ligne"
              />
              <BaseRadioInput
                value="PAY_ON_SITE"
                id="pay-on-site"
                label="Payer sur place"
              />

              <span
                v-if="errors.payment_mode"
                :class="{ 'text-light-pink text-[10px]': errors.payment_mode }"
                >{{ errors.payment_mode }}</span
              >
            </div>

            <div class="ml-4 mt-6 gap-3 flex flex-col">
              <label for="cgu" class="text-xs flex items-center">
                <input
                  id="cgu"
                  type="checkbox"
                  class="w-5 h-5 accent-light-pink mr-1"
                  name="use_terms"
                  v-model="useTerms"
                  value="CGU"
                />
                <p>
                  J'accepte les {{ " " }}
                  <span class="text-blue"
                    >conditions générales d'utilisation du service</span
                  >
                </p>
              </label>
              <label for="drdr" class="text-xs flex items-center">
                <input
                  id="drdr"
                  type="checkbox"
                  class="w-5 h-5 accent-light-pink mr-1"
                  name="use_terms"
                  v-model="useTerms"
                  value="DRDR"
                />
                <p>
                  J'ai bien pris connaissance des {{ " " }}
                  <span class="text-blue"
                    >dispositions relatives au droit de rétractation</span
                  >
                </p>
              </label>
              <label
                for="electronic_received"
                class="text-xs flex items-center"
              >
                <input
                  id="electronic_received"
                  type="checkbox"
                  name="use_terms"
                  class="w-5 h-5 accent-light-pink mr-1"
                  v-model="useTerms"
                  value="ELOFFER"
                />
                Je souhaite recevoir par voie électronique des offres
                commerciales personnalisées
              </label>
              <p
                class="text-light-pink font-semibold text-sm"
                v-if="errorUseTermMessage"
              >
                *{{ " " }}{{ errorUseTermMessage }}
              </p>
            </div>

            <div
              class="mt-4 md:gap-4 md:flex-row gap-2 flex flex-col md:w-full"
            >
              <PreviousStepButton
                :with-border="true"
                label="Etape précédente"
                @click.prevent="router.back()"
                ><ArrowLeftOutline
              /></PreviousStepButton>

              <PreviousStepButton
                :loading="loading"
                :with-border="false"
                label="Passer commande et payer en ligne"
              />
            </div>
          </div>
        </Form>
      </div>
      <div class="md:w-1/3 sm:w-full">
        <div class="bg-pink shadow-custom p-4 rounded-lg flex flex-col">
          <h1
            class="text-light-pink text-sm md:text-lg font-semibold text-center md:text-start"
          >
            Réparation d'une fuite de la vanne principale ou avant la vanne
          </h1>
          <ul class="py-6 text-sm flex flex-col space-y-1">
            <InterventionInfo
              v-for="item in interventionInfos"
              :key="item.label"
              :icon="item.icon"
              :label="item.label"
            />
          </ul>
        </div>
        <div
          class="bg-pink shadow-custom p-4 md:p-2 rounded-lg text-center mt-6 flex items-center flex-col"
        >
          <h1
            class="text-light-pink text-sm md:text-lg font-semibold mb-3 text-center"
          >
            Besoin d'une assistance téléphonique ?
          </h1>
          <PreviousStepButton
            v-if="showPhoneNumber"
            :withBorder="false"
            label="Afficher le numéro"
            @click="showPhoneNumber = !showPhoneNumber"
          />

          <p v-else class="font-semibold">0671106711</p>
        </div>
        <p class="text-[10px] pt-6 rounded-lg">
          <b
            >Vous êtes recontactés sous 20 minutes après votre passage de
            commande.</b
          >
          <br />
          L'artisan vous proposera un rendez-vous dès qu'il aura pris
          connaissance de votre commande. Une fois sur place, il analysera la
          situation et vous présentera un devis définitif. En cas de non
          acceptation du devis, aucun frais n'est engagé (ni déplacement, ni
          établissement du devis).
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

import EuroIcon from "../components/icons/EuroIcon.vue";
import CircleCheckIcon from "../components/icons/CircleCheckIcon.vue";
import ArrowLeftOutline from "../components/icons/ArrowLeftOutline.vue";
import InterventionInfo from "../components/InterventionInfo.vue";
import PreviousStepButton from "../components/Button.vue";
import BaseInput from "../components/BaseInput.vue";
import BaseRadioInput from "../components/BaseRadioInput.vue";

import { Form, useForm } from "vee-validate";
import * as yup from "yup";

import { useToast } from "vue-toastification";

import { useRouter } from "vue-router";
import { useOrderStore } from "../store/index";

const toast = useToast();
const router = useRouter();
const orderStore = useOrderStore();

const interventionInfos = [
  { icon: EuroIcon, label: "Entre 150€ et 300€ TTC" },
  { icon: CircleCheckIcon, label: "Gros matériel" },
  { icon: CircleCheckIcon, label: "Déplacement" },
  { icon: CircleCheckIcon, label: "Petites fournitures" },
  { icon: CircleCheckIcon, label: "Nettoyage du chantier" },
  { icon: CircleCheckIcon, label: "Main d’oeuvre" },
];

const useTerms = ref<string[]>([]);
const errorUseTermMessage = ref<string | null>(null);
const showPhoneNumber = ref(true);
const loading = ref(false);

const schema = yup.object({
  email: yup
    .string()
    .email("L'email n'est pas valide")
    .required("Ce champs est requis"),
  firstname: yup.string().required("Ce champs est requis"),
  lastname: yup.string().required("Ce champs est requis"),
  postalCode: yup.number().required("Ce champs est requis"),
  phone: yup.number().required("Ce champs est requis"),
  adress: yup.string().required("Ce champs est requis"),
  payment_mode: yup.string().required("Vous devez choisir un mode de paiement"),
});

async function onSubmit(values, { resetForm }) {
  if (!useTerms.value.includes("DRDR") && !useTerms.value.includes("CGU")) {
    errorUseTermMessage.value = "Veuillez accepter les termes d'utilisation";
    return;
  }

  orderStore.setUserInfos(values);
  loading.value = true;
  const order = await orderStore.makeOrder();
  loading.value = false;
  if (order?.status == 201) {
    useTerms.value = [];
    errorUseTermMessage.value = null;
    toast.success("Votre commande a été passée avec succès", {
      timeout: 1000,
    });
    router.push({ name: "home" });
    resetForm();
  } else {
    toast.error(
      "Une erreur est intervenue lors de la création de la commande",
      {
        timeout: 1000,
      }
    );
  }
}
</script>

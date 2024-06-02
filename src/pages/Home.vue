<template>
  <div
    class="bg-secondary w-full h-full flex flex-col items-center rounded-t-lg"
  >
    <div class="pt-20 flex flex-col items-center">
      <h1 class="text-black text-4xl font-bold text-white">
        Mon problème concerne :
      </h1>
      <div class="py-6">
        <Separator color="#FFF" />
      </div>
      <div
        class="grid grid-cols-3 gap-4 hover:cursor-pointer"
        @click="
          router.push({
            name: 'initial',
            params: { id: 1 },
          })
        "
      >
        <div class="bg-rose px-10 pt-4 pb-3 rounded-lg shadow-custom relative">
          <Plomberie />
          <div
            class="bg-primary absolute bottom-0 mb-3 text-center p-1 text-white font-bold text-sm"
          >
            Plomberie
          </div>
        </div>

        <div class="bg-rose px-10 pt-4 pb-3 rounded-lg shadow-custom relative">
          <Electricite />
          <div class="bg-primary text-center p-1 text-white font-bold text-sm">
            Electricité
          </div>
        </div>

        <div
          class="bg-rose px-10 pt-4 pb-3 rounded-lg shadow-custom relative justify-center flex"
        >
          <Chauffage />
          <div
            class="bg-primary absolute bottom-0 mb-3 text-center p-1 text-white font-bold text-sm"
          >
            Chauffage
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Separator from '../components/icons/Separator.vue';
import ProblemType from '../components/ProblemType.vue';
import Plomberie from '../components/icons/Plomberie.vue';
import Electricite from '../components/icons/Electricite.vue';
import Chauffage from '../components/icons/Chauffage.vue';

import { useRouter } from 'vue-router';

const router = useRouter();
const problemTypes = ['Plomberie', 'Electricite', 'Chauffage'];
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

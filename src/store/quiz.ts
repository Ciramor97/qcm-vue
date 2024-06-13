import { defineStore } from "pinia";
import { ref } from "vue";
import axiosInstance from "../api/index";
import { Quiz } from "../types/index";

export const useQuizStore = defineStore(
  "quiz",
  () => {
    let items = ref<Quiz[]>([]);

    async function getQuiz() {
      try {
        const { data } = await axiosInstance.get("/quiz");

        items.value = data.map((quiz) => ({
          id: quiz._id,
          parentAnswer: quiz.parentAnswer,
          question: quiz.label,
          answers: [...quiz.answers].map((answer) => ({
            id: answer._id,
            label: answer.label,
          })),
        }));

        return items.value;
      } catch (error) {}
    }

    return {
      getQuiz,
      items,
    };
  },
  {
    persist: {
      key: "quiz-key",
    },
  }
);

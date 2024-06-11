import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axiosInstance from "../api/index";
import { UserInfos, Quiz, Order } from "../types/index";

export const useQuizStore = defineStore(
  "quiz",
  () => {
    const quizData = reactive<Order>({
      userInfos: null,
      quizAnswers: null,
    });
    let tab: string[] = [];

    let items = ref<Quiz[]>([]);

    function addAnswer(id: string, label: string) {
      quizData.quizAnswers = quizData.quizAnswers ?? {};

      quizData.quizAnswers[id] = label;
      console.log("[ quizData.quizAnswers]==", quizData.quizAnswers);

      tab.push(id);
    }

    function cleanState(id: string | null) {
      console.log("id to clean", id);
      console.log("tab", tab);

      if (!id) {
        tab = [];
        quizData.quizAnswers = {};
        return;
      }
      if (tab.includes(id) || id == "66663358c71ed5439e6bb6f0") {
        const idx = tab.findIndex((el) => el === id);

        if (idx !== tab.length - 1) {
          const ids = tab.filter((_, index) => {
            return index > idx;
          });

          ids.forEach((id) => {
            if (quizData.quizAnswers) {
              delete quizData.quizAnswers[id];
            }
          });
          tab = tab.filter((_, index) => {
            return index <= idx;
          });
        }
      }
    }

    function setUserInfos(user: UserInfos) {
      quizData.userInfos = { ...user };
    }

    async function getQuiz() {
      try {
        const { data } = await axiosInstance.get("/quiz");
        console.log("data from server==", data[0].id);
        //replace test by items
        items.value = data.map((quiz) => ({
          id: quiz._id,
          parentAnswer: quiz.parentAnswer,
          question: quiz.label,
          answers: [...quiz.answers].map((answer) => ({
            id: answer._id,
            label: answer.label,
          })),
        }));
        console.log("data from server MAP", items.value);

        return items.value;
      } catch (error) {}
    }

    async function makeOrder() {
      try {
        const response = await axiosInstance.post("/order", {
          ...quizData,
        });
        return response;
      } catch (error) {
        console.log("error", error);
      }
    }

    return {
      setUserInfos,
      addAnswer,
      getQuiz,
      makeOrder,
      cleanState,
      items,
      tab,
      quizData,
    };
  },
  {
    persist: {
      key: "quiz-key",
    },
  }
);

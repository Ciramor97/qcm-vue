import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import axiosInstance from "../api/index";
import { useToast } from "vue-toastification";

type UserInfos = {
  email: string;
  firstname: string;
  lastname: string;
  postalCode: string;
  phone: string;
  adress: string;
  payment_mode: string;
};

type Answer = {
  id: number;
  label: string;
};
type Quiz = {
  id: number;
  question: string;
  answers: Answer[];
};
type FormDataType = {
  userInfos: UserInfos | null;
  quizAnswers: { [key: string]: string } | null;
};

const toast = useToast();

export const useAnswerStore = defineStore(
  "answer",
  () => {
    const formData = reactive<FormDataType>({
      userInfos: null,
      quizAnswers: null,
    });
    let tab = [];

    let items = ref([
      // {
      //   id: 1,
      //   question: "Où se situe votre problème ?",
      //   answers: [
      //     {
      //       id: 2,
      //       label: "WC",
      //     },
      //     {
      //       id: 3,
      //       label: "Douche/Baignoire",
      //     },
      //   ],
      // },
      // {
      //   id: 2,
      //   question: "Quelle est la nature de votre problème ?",
      //   answers: [
      //     {
      //       id: 5,
      //       label: "Engorgement (WC bouchés)",
      //     },
      //     {
      //       id: 6,
      //       label: "Fuite (recherche de fuite)",
      //     },
      //   ],
      // },
      // {
      //   id: 3,
      //   question: "Quelle est la nature de votre problème ?",
      //   answers: [
      //     {
      //       id: 7,
      //       label: "Engorgement (Douches bouchés)",
      //     },
      //     {
      //       id: 8,
      //       label: "Douche à nettoyer",
      //     },
      //   ],
      // },
      // {
      //   id: 5,
      //   question: "Votre WC possède t-il un sanibroyeur ?",
      //   answers: [
      //     {
      //       id: 9,
      //       label: "Oui",
      //     },
      //     {
      //       id: 10,
      //       label: "Non",
      //     },
      //   ],
      // },
    ]);

    let actualItem = ref<Quiz | null>(null);

    async function getAnswers() {
      try {
        const { data } = await axiosInstance.get("/");
        console.log("data from server==", data);
        // items = data.map((quiz) => ({
        //   id: quiz._id,
        //   question: quiz.label,
        //   answers: [...quiz.answers].map((answer) => ({
        //     id: answer._id,
        //     label: answer.label,
        //   })),
        // }));
        const donnes = [
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
        ];
        items.value = [...donnes];
        console.log("items==", items.value);

        return data;
      } catch (error) {}
    }

    function addAnswer(id: number, label: string) {
      console.log("[Add answers avant===]", formData.quizAnswers);

      formData.quizAnswers = formData.quizAnswers ?? {};
      // console.log(
      //   "Apres===",
      //   formData.quizAnswers,
      //   "==id==",
      //   id,
      //   "==label==",
      //   label
      // );

      formData.quizAnswers[id] = label;
      console.log("[Add answersapres===]", formData.quizAnswers);
      tab.push(id);
    }

    function cleanState(id) {
      console.log("idCleanState==", id);

      if (!id) {
        tab = [];
        formData.quizAnswers = {};
        return;
      }
      if (tab.includes(id)) {
        const idx = tab.findIndex((el) => el === id);
        console.log("idx==", idx);

        if (idx !== tab.length - 1) {
          const ids = tab.filter((_, index) => {
            return index > idx;
          });

          ids.forEach((id) => {
            if (formData.quizAnswers) {
              delete formData.quizAnswers[id];
            }
          });
          tab = tab.filter((el, index) => {
            return index <= idx;
          });
        }
      }
    }

    function setUserInfos(user: UserInfos) {
      formData.userInfos = { ...user };
    }
    function loadQuiz(id: number) {
      console.log("loadquiz==", id);
      console.log(
        "Test test ===",
        items.value.find((item) => item.id == 2)
      );

      const data = items.value.find((item) => item.id == id);
      console.log("data==", data);

      if (data) {
        actualItem.value = { ...data };
      }
      // console.log("actualItem LoadQuiz", actualItem);
    }

    async function makeOrder() {
      console.log("===all data in store==", formData);
      try {
        await axiosInstance.post("/order", {
          ...formData,
        });
        toast.success("Votre commande a été passée avec succès", {
          timeout: 1500,
        });
      } catch (error) {
        console.log("error", error);
      }
    }

    function removeAnswer(id: number) {
      if (formData.quizAnswers && formData.quizAnswers[id]) {
        delete formData.quizAnswers[id];
      }
    }

    return {
      setUserInfos,
      addAnswer,
      removeAnswer,
      getAnswers,
      loadQuiz,
      makeOrder,
      cleanState,
      actualItem,
      items,
      formData,
    };
  },
  {
    persist: {
      key: "answers-key",
    },
  }
);

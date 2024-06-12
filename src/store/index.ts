import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import axiosInstance from "../api/index";
import { UserInfos, CreateOrder } from "../types/index";
import { useQuizStore } from "./quiz";
import { PLOMBERIE_ID } from "../constants";
export const useOrderStore = defineStore(
  "order",
  () => {
    const quizStore = useQuizStore();
    const items = ref(quizStore.items);
    const orderData = reactive<CreateOrder>({
      userInfos: null,
      quizAnswers: null,
    });
    let tab: string[] = [];

    function addAnswer(quizId: string, label: string) {
      orderData.quizAnswers = orderData.quizAnswers ?? {};

      orderData.quizAnswers[quizId] = label;
      console.log("[ orderData.quizAnswers]==", orderData.quizAnswers);

      tab.push(quizId);
      //tab.push(id);
    }

    function cleanState(id: string | null) {
      console.log("id to clean", id);
      console.log("tab", tab);

      if (!id) {
        tab = [];
        orderData.quizAnswers = {};
        return;
      }
      if (tab.includes(id) || id == PLOMBERIE_ID) {
        const idx = tab.findIndex((el) => el === id);

        if (idx !== tab.length - 1) {
          const ids = tab.filter((_, index) => {
            return index > idx;
          });

          ids.forEach((id) => {
            if (orderData.quizAnswers) {
              delete orderData.quizAnswers[id];
            }
          });
          tab = tab.filter((_, index) => {
            return index <= idx;
          });
        }
      }
      console.log("tab in store==", tab);
    }

    function setUserInfos(user: UserInfos) {
      orderData.userInfos = { ...user };
    }

    async function makeOrder() {
      try {
        const response = await axiosInstance.post("/order", {
          ...orderData,
        });
        return response;
      } catch (error) {
        console.log("error", error);
      }
    }

    async function getOrderList() {
      try {
        const { data } = await axiosInstance.get("/order");
        return data;
      } catch (error) {
        console.log("error", error);
      }
    }

    async function getOrder(id: string) {
      try {
        const { data } = await axiosInstance.get(`/order/${id}`);
        return data;
      } catch (error) {
        console.log("error", error);
      }
    }
    return {
      setUserInfos,
      addAnswer,
      cleanState,
      makeOrder,
      getOrderList,
      getOrder,
      tab,
      orderData,
      items,
    };
  },
  {
    persist: {
      key: "store-key",
    },
  }
);

// export { axiosInstance };

import { beforeEach, describe, expect, it, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useOrderStore } from "./index";
import { useQuizStore } from "./quiz";
import {
  initItems,
  initTab,
  tab,
  mockedQuizData,
  mockedUser,
  quizAnswersAfterCleanState,
} from "./index.fixture";

describe("[store/orderStore]", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("should add user answer to quiz, cleanState, set user infos and create order", async () => {
    const orderStore = useOrderStore();
    const quizStore = useQuizStore();

    // init values
    expect(quizStore.items).toEqual(initItems.value);
    expect(orderStore.tab).toEqual(initTab);
    expect(orderStore.orderData.quizAnswers).toEqual(null);
    expect(orderStore.orderData.userInfos).toEqual(null);

    await quizStore.getQuiz();

    // adding user answer to quiz
    orderStore.addAnswer("66663358c71ed5439e6bb6f0", "Douche");
    orderStore.addAnswer("6666c8c5d5aa9c44af52c70b", "Fuite de douche");
    orderStore.addAnswer("6666ce3ed5aa9c44af52c766", "Du robinet");
    expect(orderStore.tab.length).toEqual(3);
    expect(orderStore.tab).toEqual(tab);
    expect(orderStore.orderData.quizAnswers).toEqual(
      mockedQuizData.quizAnswers
    );

    // clean the state to update user choice
    orderStore.cleanState("6666ce3ed5aa9c44af52c766");
    orderStore.cleanState("6666c8c5d5aa9c44af52c70b");

    // adding different answer
    orderStore.addAnswer("6666c8c5d5aa9c44af52c70b", "Fuite de baignoire");
    orderStore.addAnswer("6666ce50d5aa9c44af52c76f", "Du tuyau d'évacuation ");
    expect(orderStore.orderData.quizAnswers).toEqual(
      quizAnswersAfterCleanState
    );

    // setting user informations
    orderStore.setUserInfos(mockedUser);
    expect(orderStore.orderData.userInfos).toEqual(mockedQuizData.userInfos);

    // get success when create order
    const response = await orderStore.makeOrder();
    expect(response?.status).toEqual(201);
  });
});

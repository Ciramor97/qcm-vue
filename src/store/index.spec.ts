import { beforeEach, describe, expect, it, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useQuizStore } from "./index";
import {
  initItems,
  initTab,
  tab,
  mockedQuizData,
  mockedUser,
  quizAnswersAfterCleanState,
} from "./index.fixture";

describe("[store/quiz.store]", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("should add user answer to quiz, cleanState, set user infos and create order", async () => {
    const store = useQuizStore();

    // init values
    expect(store.items).toEqual(initItems.value);
    expect(store.tab).toEqual(initTab);
    expect(store.quizData.quizAnswers).toEqual(null);
    expect(store.quizData.userInfos).toEqual(null);

    await store.getQuiz();

    // adding user answer to quiz
    store.addAnswer("66663358c71ed5439e6bb6f0", "Douche");
    store.addAnswer("6666c8c5d5aa9c44af52c70b", "Fuite de douche");
    store.addAnswer("6666ce3ed5aa9c44af52c766", "Du robinet");
    expect(store.tab.length).toEqual(3);
    expect(store.tab).toEqual(tab);
    expect(store.quizData.quizAnswers).toEqual(mockedQuizData.quizAnswers);

    // clean the state to update user choice
    store.cleanState("6666ce3ed5aa9c44af52c766");
    store.cleanState("6666c8c5d5aa9c44af52c70b");

    // adding different answer
    store.addAnswer("6666c8c5d5aa9c44af52c70b", "Fuite de baignoire");
    store.addAnswer("6666ce50d5aa9c44af52c76f", "Du tuyau d'évacuation ");
    expect(store.quizData.quizAnswers).toEqual(quizAnswersAfterCleanState);

    // setting user informations
    store.setUserInfos(mockedUser);
    expect(store.quizData.userInfos).toEqual(mockedQuizData.userInfos);

    // get success when create order
    const response = await store.makeOrder();
    expect(response?.status).toEqual(201);
  });
});

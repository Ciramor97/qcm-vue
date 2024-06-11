import { beforeEach, describe, expect, it, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useQuizStore } from "./index";
import {
  initItems,
  initTab,
  tab,
  mockedQuizData,
  mockedGetOrderList,
  mockedUser,
} from "./index.fixture";
vi.mock("@/hooks/backProduct", () => {
  const BackProduct = {
    get: vi.fn().mockImplementation(() => {
      return { data: mockedProduct };
    }),

    create: vi.fn().mockImplementation(() => {
      return { data: mockedOrder };
    }),
  };
  return { BackProduct: BackProduct };
});

describe("[store/quiz.store]", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    vi.clearAllMocks();
  });

  it("should set product quantity and update totalOrderAmount", async () => {
    const orderStore = useOrderStore();
    const store = useQuizStore();
    const productStore = useProductStore();
    expect(orderStore.orderProducts).toEqual(initMockedOrderProducts.value);
    expect(store.items).toEqual(initItems.value);
    expect(store.tab).toEqual(initTab);
    expect(store.quizData.quizAnswers).toEqual(null);
    expect(store.quizData.userInfos).toEqual(null);

    await store.getQuiz();
    expect(orderStore.totalOrderAmount).toEqual(totalOrderAmount.value);
    productStore.product = mockedProductToOrder;
    expect(BackCustOrder.get).toHaveBeenCalledTimes(1);
    expect(orderStore.items.length).toEqual(19);

    orderStore.addProduct();
    await store.addAnswer("66663359c71ed5439e6bb6f2", "WC");
    await store.addAnswer(
      "6666371ec71ed5439e6bb705",
      "Engorgement(WC bouchés)"
    );
    await store.addAnswer("6666cb3fd5aa9c44af52c727", "WC simple");
    expect(orderStore.tab.length).toEqual(3);
    expect(orderStore.tab).toEqual(tab);
    expect(orderStore.quizData.quizAnswers).toEqual(mockedQuizData.quizAnswers);

    await store.cleanState("6666cb3fd5aa9c44af52c727");
    expect(store.tab.length).toEqual(2);
    expect(orderStore.tab).toEqual(
      tab.filter((id) => id == "6666cb3fd5aa9c44af52c727")
    );
    await store.addAnswer(
      "6666371ec71ed5439e6bb705",
      "Engorgement(WC bouchés)"
    );

    await store.setUserInfos(mockedUser);
    expect(orderStore.quizData.userInfos).toEqual(mockedQuizData.userInfos);

    await store.makeOrder();
    expect(BackCustOrder.get).toHaveBeenCalledTimes(1);

    expect(orderStore.orderProducts).toEqual(mockedOrderProducts.value);
    orderStore.setProductQuantity("A0220200207000012561", 4);
    expect(orderStore.orderProducts).toEqual(mockedOrderProductsQuantity.value);
    expect(orderStore.totalOrderAmount).toEqual(30);
    orderStore.deleteProduct("A0220200207000012561");
    expect(orderStore.totalOrderAmount).toEqual(0);
  });
});

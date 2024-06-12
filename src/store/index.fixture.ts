import { ref, reactive } from "vue";
import { CreateOrder, Quiz, UserInfos } from "../types";

let initItems = ref<Quiz[]>([]);
let initTab: string[] = [];

const tab = [
  "66663358c71ed5439e6bb6f0",
  "6666c8c5d5aa9c44af52c70b",
  "6666ce3ed5aa9c44af52c766",
];

const mockedUser: UserInfos = {
  firstname: "POP",
  lastname: "POP",
  adress: "POP",
  postalCode: "6887",
  phone: "787899889",
  email: "pop@gmail.com",
  payment_mode: "PAY_ON_LINE",
};

const mockedGetOrderList = ref([
  {
    userInfos: {
      _id: "666850cf0ee49d4d7e8c055e",
      firstname: "POP",
      lastname: "POP",
      adress: "POP",
      postalCode: "6887",
      phone: "787899889",
      email: "pop@gmail.com",
      payment_mode: "PAY_ON_LINE",
    },
    _id: "666850cf0ee49d4d7e8c055d",
    quizAnswers: {
      "66663358c71ed5439e6bb6f0": "Douche",
      "6666c8c5d5aa9c44af52c70b": "Fuite de douche",
      "6666ce3ed5aa9c44af52c766": "Du robinet",
    },
    createdAt: "2024-06-11T13:27:43.880Z",
    updatedAt: "2024-06-11T13:27:43.880Z",
    __v: 0,
  },
]);

const mockedQuizData: CreateOrder = reactive({
  quizAnswers: {
    "66663358c71ed5439e6bb6f0": "Douche",
    "6666c8c5d5aa9c44af52c70b": "Fuite de douche",
    "6666ce3ed5aa9c44af52c766": "Du robinet",
  },
  userInfos: mockedUser,
});

const quizAnswersAfterCleanState = {
  "66663358c71ed5439e6bb6f0": "Douche",
  "6666c8c5d5aa9c44af52c70b": "Fuite de baignoire",
  "6666ce50d5aa9c44af52c76f": "Du tuyau d'évacuation ",
};

export {
  initItems,
  initTab,
  mockedUser,
  tab,
  mockedQuizData,
  mockedGetOrderList,
  quizAnswersAfterCleanState,
};

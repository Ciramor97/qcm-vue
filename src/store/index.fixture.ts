import { ref, reactive } from "vue";
import { Order, Quiz } from "../types";

let initItems = ref<Quiz[]>([]);
let initTab: string[] = [];

const mockedUser = {
  email: "string",
  firstname: "string",
  lastname: "string",
  postalCode: 122334,
  phone: "983736353",
  adress: "string",
  payment_mode: "PAY_ONLINE",
};

const mockedGetOrderList = ref([
  {
    userInfos: {
      _id: "6667199d19b6f846b539cc6a",
      firstname: "Adeline",
      lastname: "MADEGNAN",
      adress: "3 Square Cézanne 34070",
      postalCode: "59800",
      phone: "0745681068",
      email: "madegnan70@gmail.com",
      payment_mode: "PAY_ON_LINE",
    },
    _id: "6667199d19b6f846b539cc69",
    quizAnswers: {
      "66663359c71ed5439e6bb6f2": "WC",
      "6666371ec71ed5439e6bb707": "Probleme de dysfonctionnement(cuvette...)",
      "6666cb6dd5aa9c44af52c73b": "Autre",
    },
    createdAt: "2024-06-10T15:19:57.422Z",
    updatedAt: "2024-06-10T15:19:57.422Z",
    __v: 0,
  },
  {
    userInfos: {
      _id: "6666f53319b6f846b539cc58",
      firstname: "PAPA",
      lastname: "PAPA",
      adress: "PAPA",
      postalCode: "3563656",
      phone: "7476464787",
      email: "papa@gmail.com",
      payment_mode: "PAY_ON_SITE",
    },
    _id: "6666f53319b6f846b539cc57",
    quizAnswers: {
      "66663359c71ed5439e6bb6f3": "Lavabo",
      "6666c93dd5aa9c44af52c71b": "Fuite / robinetterie",
      "6666cd48d5aa9c44af52c755": "Directement du robinet",
    },
    createdAt: "2024-06-10T12:44:35.720Z",
    updatedAt: "2024-06-10T12:44:35.720Z",
    __v: 0,
  },
  {
    userInfos: {
      _id: "6666f1c919b6f846b539cc51",
      firstname: "Adeline",
      lastname: "MADEGNAN",
      adress: "3 Square Cézanne 34070",
      postalCode: "59800",
      phone: "0745681068",
      email: "madegnan70@gmail.com",
      payment_mode: "PAY_ON_SITE",
    },
    _id: "6666f1c919b6f846b539cc50",
    quizAnswers: {
      "66663359c71ed5439e6bb6f2": "WC",
      "6666371ec71ed5439e6bb705": "Engorgement(WC bouchés)",
      "6666cb3fd5aa9c44af52c727": "WC simple",
    },
    createdAt: "2024-06-10T12:30:01.807Z",
    updatedAt: "2024-06-10T12:30:01.807Z",
    __v: 0,
  },
]);

const mockedQuizData = reactive({
  quizAnswers: {
    "6666cb3fd5aa9c44af52c727": "WC simple",
    "66663359c71ed5439e6bb6f2": "WC",
    "6666371ec71ed5439e6bb705": "Engorgement(WC bouchés)",
  },
  userInfos: mockedUser,
});
const tab = [
  "66663359c71ed5439e6bb6f2",
  "6666371ec71ed5439e6bb705",
  "6666cb3fd5aa9c44af52c727",
];
export {
  initItems,
  initTab,
  mockedUser,
  tab,
  mockedQuizData,
  mockedGetOrderList,
};

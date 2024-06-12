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
  id: string;
  label: string;
};
type Quiz = {
  id: string;
  question: string;
  parentAnswer: string;
  answers: Answer[];
};
type CreateOrder = {
  userInfos: UserInfos | null;
  quizAnswers: { [key: string]: string } | null;
};

type GetOrderList = {
  _id: string;
  userInfos: {
    firstname: string;
    lastname: string;
  };
  createdAt: string;
};

type GetQuizAnswer = Answer & { answer: string };
type GetOrder = {
  quiz: GetQuizAnswer[];
  user: UserInfos;
};

export { UserInfos, Quiz, CreateOrder, GetOrder, GetOrderList };

type UserInfos = {
  email: string;
  firstname: string;
  lastname: string;
  postalCode: number;
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
type Order = {
  userInfos: UserInfos | null;
  quizAnswers: { [key: string]: string } | null;
};

export { UserInfos, Quiz, Order };

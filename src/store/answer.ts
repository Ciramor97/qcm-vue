import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Answer {
  questionId: number;
  answerId: number;
  answerLabel: string;
}

export const useAnswerStore = defineStore('answer', () => {

 const answers = ref<Answer[]>([])
  
 function addAnswer(questionId: number, answerId: number, answerLabel: string) {
      answers.value.push({ questionId, answerId, answerLabel });
  }

function getAnswers() {
    return answers.value;
  }

 function getAnswer(questionId: number) {
    return answers.value.find(answer => answer.questionId === questionId);
  }

 function removeAnswer(questionId: number) {
    answers.value = answers.value.filter(answer => answer.questionId !== questionId);
  }

  return {
   answers,
   addAnswer,
   getAnswer,
   getAnswers,
   removeAnswer
  };
});

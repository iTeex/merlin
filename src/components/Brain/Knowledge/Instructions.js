import { AllowedQuestions } from '../QuestionParser';

export const Instructions = () => {
  const response = {
    answer: '',
    tone: '',
    speak: true
  };

  AllowedQuestions.map(q => response.answer += q + '\n');

  return Promise.resolve(response);
};
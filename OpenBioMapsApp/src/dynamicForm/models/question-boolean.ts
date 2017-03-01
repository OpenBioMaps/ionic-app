import { QuestionBase } from './question-base';

export class BooleanQuestion extends QuestionBase<string> {
  type = 'boolen';
  

  constructor(options: {} = {}) {
    super(options);
  }
}
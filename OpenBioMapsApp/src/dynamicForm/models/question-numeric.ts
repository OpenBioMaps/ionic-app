import { QuestionBase } from './question-base';

export class NumericQuestion extends QuestionBase<string> {
  type = 'numeric';

  constructor(options: {} = {}) {
    super(options);
  }
}
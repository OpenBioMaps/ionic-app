import { QuestionBase } from './question-base';

export class DateQuestion extends QuestionBase<string> {
  type = 'date';

  constructor(options: {} = {}) {
    super(options);
  }
}
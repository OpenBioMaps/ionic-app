import { QuestionBase } from './question-base';

export class PointQuestion extends QuestionBase<string> {
  type = 'point';

  constructor(options: {} = {}) {
    super(options);
  }
}

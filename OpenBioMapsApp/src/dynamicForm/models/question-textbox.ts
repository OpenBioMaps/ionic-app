import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  type = 'text';

  constructor(options: {} = {}) {
    super(options);
  }
}

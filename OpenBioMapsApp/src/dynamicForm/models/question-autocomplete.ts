import { QuestionBase } from './question-base';

export class AutoCompleteQuestion extends QuestionBase<string> {
  type = 'autocomplete';

  constructor(options: {} = {}) {
    super(options);
  }
}
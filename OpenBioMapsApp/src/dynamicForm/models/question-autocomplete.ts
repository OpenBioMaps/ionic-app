import { QuestionBase } from './question-base';

export class AutoCompleteQuestion extends QuestionBase<string> {
  type = 'autocomplete';
  controlType: string;

  constructor(options: {} = {}) {
    super(options);
    this.controlType = options['controlType'] || '';
  }
}
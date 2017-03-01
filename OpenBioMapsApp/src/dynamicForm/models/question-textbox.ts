import { QuestionBase } from './question-base';

export class TextboxQuestion extends QuestionBase<string> {
  type = 'text';
  controlType: string;

  constructor(options: {} = {}) {
    super(options);
    this.controlType = options['controlType'] || '';
  }
}

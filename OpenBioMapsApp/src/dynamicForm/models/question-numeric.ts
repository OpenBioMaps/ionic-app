import { QuestionBase } from './question-base';

export class NumericQuestion extends QuestionBase<string> {
  type = 'numeric';
  controlType: number;

  constructor(options: {} = {}) {
    super(options);
    this.controlType = options['controlType'] || '';
  }
}
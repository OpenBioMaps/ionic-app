import { QuestionBase } from './question-base';

export class DateQuestion extends QuestionBase<string> {
  type = 'date';
  controlType: string;

  constructor(options: {} = {}) {
    super(options);
    this.controlType = options['controlType'] || '';
  }
}
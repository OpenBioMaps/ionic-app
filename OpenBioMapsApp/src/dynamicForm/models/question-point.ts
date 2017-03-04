import { QuestionBase } from './question-base';

export class PointQuestion extends QuestionBase<string> {
  type = 'point';
  controlType: string;

  constructor(options: {} = {}) {
    super(options);
    this.controlType = options['controlType'] || '';
  }
}

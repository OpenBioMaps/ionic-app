import { QuestionBase } from './question-base';

export class UnknownQuestion extends QuestionBase<any>{
	Type = 'unknown';

	constructor(options: {} = {}) {
	    super(options);
	    this.value = options['value'];
	}
}
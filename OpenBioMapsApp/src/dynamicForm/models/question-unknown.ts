import { QuestionBase } from './question-base';

export class UnknownQuestion extends QuestionBase<any>{
	type = 'unknown';

	constructor(options: {} = {}) {
		super();
	    this.value = options;
	}
}
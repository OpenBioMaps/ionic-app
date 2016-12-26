import { Injectable }       from '@angular/core';
import { QuestionBase }     from '../models/question-base';
import { JsonConverter }    from '../../utils/json-converter';

@Injectable()
export class QuestionService {
  json: string = `[{
      "key": "brave",
      "questionType": "dropdown",
      "label": "Bravery Rating",
      "order": 3,
      "options": [
        {"key": "solid",  "value": "Solid"},
        {"key": "great",  "value": "Great"},
        {"key": "good",   "value": "Good"},
        {"key": "unproven", "value": "Unproven"}
      ]
    }, {
      "key": "firstName",
      "questionType": "textbox",
      "label": "First name",
      "value": "Bombasto",
      "required": true,
      "order": 1
    }, {
      "key": "emailAddress",
      "questionType": "textbox",
      "label": "Email",
      "type": "email",
      "order": 2
    }]`;

  // Todo: get from a remote source of question metadata
  getQuestions(): Promise<QuestionBase<any>[]> {
    let questions: QuestionBase<any>[] = JsonConverter.convert(this.json);

    return Promise.resolve(questions.sort((a, b) => a.order - b.order));
  }

  // See the "Take it slow" appendix
  getQuestionsSlowly(): Promise<QuestionBase<any>[]> {
    return new Promise<QuestionBase<any>[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getQuestions());
  }
}

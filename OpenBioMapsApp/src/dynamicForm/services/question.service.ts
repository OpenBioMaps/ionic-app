import { Injectable }       from '@angular/core';
import { DropdownQuestion } from '../models/question-dropdown';
import { QuestionBase }     from '../models/question-base';
import { TextboxQuestion }  from '../models/question-textbox';

@Injectable()
export class QuestionService {
  // Todo: get from a remote source of question metadata
  getQuestions(): Promise<QuestionBase<any>[]> {
    let questions: QuestionBase<any>[] = [
      new DropdownQuestion({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new TextboxQuestion({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return Promise.resolve(questions.sort((a, b) => a.order - b.order));
  }

  // See the "Take it slow" appendix
  getQuestionsSlowly(): Promise<QuestionBase<any>[]> {
    return new Promise<QuestionBase<any>[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getQuestions());
  }
}

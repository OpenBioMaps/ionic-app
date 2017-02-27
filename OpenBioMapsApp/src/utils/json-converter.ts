import { QuestionBase }     from '../dynamicForm/models/question-base';
import { DropdownQuestion } from '../dynamicForm/models/question-dropdown';
import { TextboxQuestion }  from '../dynamicForm/models/question-textbox';
import { UnknownQuestion } from '../dynamicForm/models/question-unknown';

export class JsonConverter {

  // TODO Remove logs
  static convert(json: any[]): QuestionBase<any>[] {
    let questions: QuestionBase<any>[] = [];
    console.log(json);

    json.forEach(object => {
      console.log(object);

      let question: QuestionBase<any>;
      switch (object.type) {
        case 'textbox':
          question = new TextboxQuestion(object);
          break;
        case 'dropdown':
          question = new DropdownQuestion(object);
          break;
        default:
          question = new UnknownQuestion(object);
          break;
      }
      questions.push(question);
    });

    console.log(questions);
    return questions;
  }
}

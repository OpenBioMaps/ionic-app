import { QuestionBase }     from '../dynamicForm/models/question-base';
import { DropdownQuestion } from '../dynamicForm/models/question-dropdown';
import { TextboxQuestion }  from '../dynamicForm/models/question-textbox';


export class JsonConverter {

  // TODO Handle invalid json
  static convert(json: any[]): QuestionBase<any>[] {
    let questions: QuestionBase<any>[] = [];

    json.forEach(object => {
      let question: QuestionBase<any>;
      switch (object.questionType) {
        case 'textbox':
          question = new TextboxQuestion(object);
          break;
        case 'dropdown':
          question = new DropdownQuestion(object);
          break;
        default:

      }
      questions.push(question);
    });

    return questions;
  }
}

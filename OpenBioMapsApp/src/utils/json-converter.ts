import { QuestionBase }     from '../dynamicForm/models/question-base';
import { DropdownQuestion } from '../dynamicForm/models/question-dropdown';
import { TextboxQuestion }  from '../dynamicForm/models/question-textbox';


export class JsonConverter {

  // TODO Handle invalid json
  // TODO Remove logs
  static convert(json: any[]): QuestionBase<any>[] {
    let questions: QuestionBase<any>[] = [];
    console.log(json);

    json.forEach(object => {
      console.log(object);

      let question: QuestionBase<any>;
      switch (object.questionType) {
        case 'textbox':
          question = new TextboxQuestion(object);
          break;
        case 'dropdown':
          question = new DropdownQuestion(object);
          break;
        default:
          // TODO Add default question model
          question = new QuestionBase<any>();
          break;
      }
      questions.push(question);
    });

    console.log(questions);
    return questions;
  }
}

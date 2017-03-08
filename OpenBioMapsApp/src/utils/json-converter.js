import { DropdownQuestion } from '../dynamicForm/models/question-dropdown';
import { TextboxQuestion } from '../dynamicForm/models/question-textbox';
import { UnknownQuestion } from '../dynamicForm/models/question-unknown';
import { NumericQuestion } from '../dynamicForm/models/question-numeric';
import { DateQuestion } from '../dynamicForm/models/question-date';
import { BooleanQuestion } from '../dynamicForm/models/question-boolean';
import { PointQuestion } from '../dynamicForm/models/question-point';
import { AutoCompleteQuestion } from '../dynamicForm/models/question-autocomplete';
export var JsonConverter = (function () {
    function JsonConverter() {
    }
    // TODO Remove logs
    JsonConverter.convert = function (json) {
        var questions = [];
        console.log(json);
        json.forEach(function (object) {
            console.log(object);
            var question;
            switch (object.type) {
                case 'text':
                    question = new TextboxQuestion(object);
                    break;
                case 'dropdown':
                    question = new DropdownQuestion(object);
                    break;
                case 'numeric':
                    question = new NumericQuestion(object);
                    break;
                case 'date':
                    question = new DateQuestion(object);
                    break;
                case 'boolen':
                    question = new BooleanQuestion(object);
                    break;
                case 'point':
                    question = new PointQuestion(object);
                    break;
                case 'autocomplete':
                    question = new AutoCompleteQuestion(object);
                    break;
                default:
                    question = new UnknownQuestion(object);
                    break;
            }
            questions.push(question);
        });
        console.log(questions);
        return questions;
    };
    return JsonConverter;
}());
//# sourceMappingURL=json-converter.js.map
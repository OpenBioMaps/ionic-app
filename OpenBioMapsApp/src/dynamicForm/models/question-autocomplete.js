var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from './question-base';
export var AutoCompleteQuestion = (function (_super) {
    __extends(AutoCompleteQuestion, _super);
    function AutoCompleteQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.type = 'autocomplete';
        this.controlType = options['controlType'] || '';
    }
    return AutoCompleteQuestion;
}(QuestionBase));
//# sourceMappingURL=question-autocomplete.js.map
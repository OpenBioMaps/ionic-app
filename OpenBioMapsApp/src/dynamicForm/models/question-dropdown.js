var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from './question-base';
export var DropdownQuestion = (function (_super) {
    __extends(DropdownQuestion, _super);
    function DropdownQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.type = 'dropdown';
        this.options = [];
        this.options = options['options'] || [];
    }
    return DropdownQuestion;
}(QuestionBase));
//# sourceMappingURL=question-dropdown.js.map
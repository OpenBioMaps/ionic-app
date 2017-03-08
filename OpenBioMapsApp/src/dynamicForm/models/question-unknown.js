var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from './question-base';
export var UnknownQuestion = (function (_super) {
    __extends(UnknownQuestion, _super);
    function UnknownQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this);
        this.type = 'unknown';
        this.value = options;
    }
    return UnknownQuestion;
}(QuestionBase));
//# sourceMappingURL=question-unknown.js.map
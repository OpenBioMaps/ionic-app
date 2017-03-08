var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { QuestionBase } from './question-base';
export var NumericQuestion = (function (_super) {
    __extends(NumericQuestion, _super);
    function NumericQuestion(options) {
        if (options === void 0) { options = {}; }
        _super.call(this, options);
        this.type = 'numeric';
        this.controlType = options['controlType'] || '';
    }
    return NumericQuestion;
}(QuestionBase));
//# sourceMappingURL=question-numeric.js.map
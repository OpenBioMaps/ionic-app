import { Component, Input } from '@angular/core';
export var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    DynamicFormQuestionComponent.prototype.hasError = function (key) { return this.form.controls[this.question.key].hasError(key); };
    DynamicFormQuestionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'df-question',
                    templateUrl: 'dynamic-form-question.component.html'
                },] },
    ];
    /** @nocollapse */
    DynamicFormQuestionComponent.ctorParameters = [];
    DynamicFormQuestionComponent.propDecorators = {
        'question': [{ type: Input },],
        'form': [{ type: Input },],
    };
    return DynamicFormQuestionComponent;
}());
//# sourceMappingURL=dynamic-form-question.component.js.map
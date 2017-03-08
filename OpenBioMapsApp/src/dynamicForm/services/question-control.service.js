import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
export var QuestionControlService = (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    };
    QuestionControlService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    QuestionControlService.ctorParameters = [];
    return QuestionControlService;
}());
//# sourceMappingURL=question-control.service.js.map
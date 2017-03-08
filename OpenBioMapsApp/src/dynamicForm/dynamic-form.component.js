import { Component, EventEmitter, Input, Output } from '@angular/core';
import { QuestionControlService } from './services/question-control.service';
export var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.onSubmitted = new EventEmitter();
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.onSubmitted.emit(this.form);
        this.payLoad = JSON.stringify(this.form.value);
    };
    DynamicFormComponent.decorators = [
        { type: Component, args: [{
                    selector: 'dynamic-form',
                    templateUrl: 'dynamic-form.component.html',
                    providers: [QuestionControlService]
                },] },
    ];
    /** @nocollapse */
    DynamicFormComponent.ctorParameters = [
        { type: QuestionControlService, },
    ];
    DynamicFormComponent.propDecorators = {
        'questions': [{ type: Input },],
        'onSubmitted': [{ type: Output },],
    };
    return DynamicFormComponent;
}());
//# sourceMappingURL=dynamic-form.component.js.map
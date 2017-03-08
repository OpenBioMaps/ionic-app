import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { QuestionService } from '../../dynamicForm/services/question.service';
import { ObmApiService } from '../../services/obmApi.service';
export var DynamicForm = (function () {
    function DynamicForm(navCtrl, navParams, questionService, api, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.questionService = questionService;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.formId = navParams.get('id');
        this.url = navParams.get('url');
        this.questionService.getQuestions(this.url, this.formId)
            .then(function (questions) { return _this.questions = questions; });
    }
    DynamicForm.prototype.onSubmitted = function (form) {
        this.api.upload(JSON.stringify(form.value));
        this.showToast();
    };
    DynamicForm.prototype.showToast = function () {
        var toast = this.toastCtrl.create({
            message: 'TODO: Save form data and clear values!',
            duration: 3000
        });
        toast.present();
    };
    DynamicForm.decorators = [
        { type: Component, args: [{
                    selector: 'page-dynamic-form',
                    templateUrl: 'dynamicForm.html',
                    providers: [QuestionService]
                },] },
    ];
    /** @nocollapse */
    DynamicForm.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: QuestionService, },
        { type: ObmApiService, },
        { type: ToastController, },
    ];
    return DynamicForm;
}());
//# sourceMappingURL=dynamicForm.js.map
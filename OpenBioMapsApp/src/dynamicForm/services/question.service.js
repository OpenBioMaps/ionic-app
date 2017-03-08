import { Injectable } from '@angular/core';
import { ObmApiService } from '../../services/obmApi.service';
import { RepoService } from '../../services/repo.service';
import { JsonConverter } from '../../utils/json-converter';
export var QuestionService = (function () {
    function QuestionService(api, repo) {
        this.api = api;
        this.repo = repo;
    }
    QuestionService.prototype.getQuestions = function (url, id) {
        return this.api.loadForm(url, id)
            .then(function (json) {
            var questions = JsonConverter.convert(json);
            return Promise.resolve(questions.sort(function (a, b) { return a.order - b.order; }));
        });
    };
    QuestionService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    QuestionService.ctorParameters = [
        { type: ObmApiService, },
        { type: RepoService, },
    ];
    return QuestionService;
}());
//# sourceMappingURL=question.service.js.map
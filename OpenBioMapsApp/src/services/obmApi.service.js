import { Injectable } from '@angular/core';
import { RepoService } from './repo.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export var ObmApiService = (function () {
    function ObmApiService(repo) {
        this.repo = repo;
    }
    ObmApiService.prototype.loadFormList = function (url) {
        url += '&' + ObmApiService.GET_FORMS;
        return this.repo.loadUrl(url);
    };
    ObmApiService.prototype.loadForm = function (url, id) {
        url += '&' + ObmApiService.GET_FORM + '=' + id.toString();
        return this.repo.loadUrl(url);
    };
    ObmApiService.prototype.upload = function (json, url) {
        if (url === void 0) { url = 'http://aries.ektf.hu/~szugyi/upload.php'; }
        return this.repo.upload(url);
    };
    // TODO let us set the baseurl
    ObmApiService.GET_FORMS = 'get_api_forms';
    ObmApiService.GET_FORM = 'get_api_form';
    ObmApiService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ObmApiService.ctorParameters = [
        { type: RepoService, },
    ];
    return ObmApiService;
}());
//# sourceMappingURL=obmApi.service.js.map
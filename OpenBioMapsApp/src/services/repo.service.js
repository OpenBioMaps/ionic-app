import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { StorageService } from './storage.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export var RepoService = (function () {
    function RepoService(http, storage) {
        this.http = http;
        this.storage = storage;
    }
    RepoService.prototype.loadUrl = function (url) {
        var _this = this;
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            // Save response to local cache
            return _this.storage.setKey(url, response.json());
        })
            .catch(function (e) {
            // Try to get cached result
            return _this.storage.getKey(url);
        })
            .then(function (response) {
            if (!response) {
                throw 'Exception: Response is empty';
            }
            return response;
        });
    };
    RepoService.prototype.upload = function (url) {
        var fd = new FormData();
        fd.append('test_text', 'Hey');
        fd.append('test_int', 20);
        var headers = new Headers();
        //headers.append('Content-Type', 'multipart/form-data');
        this.http.post(url, fd, { headers: headers })
            .toPromise()
            .then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        });
    };
    RepoService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    RepoService.ctorParameters = [
        { type: Http, },
        { type: StorageService, },
    ];
    return RepoService;
}());
//# sourceMappingURL=repo.service.js.map
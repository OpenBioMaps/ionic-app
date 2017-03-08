import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DynamicForm } from '../dynamicForm/dynamicForm';
import { ObmApiService } from '../../services/obmApi.service';
import { StorageService } from '../../services/storage.service';
export var FormSelector = (function () {
    function FormSelector(navCtrl, navParams, api, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.storage = storage;
        this.storage
            .getSettings()
            .then(function (settings) {
            if (settings) {
                _this.url = settings.url;
                return _this.api.loadFormList(_this.url);
            }
            else {
            }
        })
            .then(function (response) {
            _this.forms = response;
        })
            .catch(function (e) {
            _this.error = e;
        });
    }
    FormSelector.prototype.onItemClick = function (event, form) {
        this.navCtrl.push(DynamicForm, {
            url: this.url,
            id: form.id
        });
    };
    FormSelector.decorators = [
        { type: Component, args: [{
                    selector: 'page-form-selector',
                    templateUrl: 'formSelector.html'
                },] },
    ];
    /** @nocollapse */
    FormSelector.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: ObmApiService, },
        { type: StorageService, },
    ];
    return FormSelector;
}());
//# sourceMappingURL=formSelector.js.map
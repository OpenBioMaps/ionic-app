import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
export var StorageService = (function () {
    function StorageService(storage) {
        this.storage = storage;
    }
    StorageService.prototype.setKey = function (key, value) {
        return this.storage.set(key, value);
    };
    StorageService.prototype.getKey = function (key) {
        return this.storage.get(key);
    };
    StorageService.prototype.setSettings = function (settings) {
        return this.setKey(StorageService.KEY_SETTINGS, settings);
    };
    StorageService.prototype.getSettings = function () {
        return this.getKey(StorageService.KEY_SETTINGS);
    };
    StorageService.KEY_SETTINGS = 'settings';
    StorageService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    StorageService.ctorParameters = [
        { type: Storage, },
    ];
    return StorageService;
}());
//# sourceMappingURL=storage.service.js.map
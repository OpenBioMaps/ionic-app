import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
export var Settings = (function () {
    function Settings(navCtrl, navParams, storage, formBuilder, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.formBuilder = formBuilder;
        this.toastCtrl = toastCtrl;
        this.settingsForm = this.formBuilder
            .group({
            title: [''],
            url: ['', Validators.required]
        });
        this.storage
            .getSettings()
            .then(function (settings) {
            if (settings) {
                _this.settingsForm.setValue(settings);
            }
        });
    }
    Settings.prototype.saveSettings = function () {
        var _this = this;
        this.storage
            .setSettings(this.settingsForm.value)
            .then(function () { return _this.showSavedToast(); });
    };
    Settings.prototype.showSavedToast = function () {
        var toast = this.toastCtrl.create({
            message: 'Settings saved',
            duration: 3000
        });
        toast.present();
    };
    Settings.decorators = [
        { type: Component, args: [{
                    selector: 'page-settings',
                    templateUrl: 'settings.html'
                },] },
    ];
    /** @nocollapse */
    Settings.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
        { type: StorageService, },
        { type: FormBuilder, },
        { type: ToastController, },
    ];
    return Settings;
}());
//# sourceMappingURL=settings.js.map
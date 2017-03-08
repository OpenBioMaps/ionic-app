import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { FormSelector } from '../pages/formSelector/formSelector';
import { Settings } from '../pages/settings/settings';
import { ObmApiService } from '../services/obmApi.service';
import { RepoService } from '../services/repo.service';
import { StorageService } from '../services/storage.service';
export var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = FormSelector;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Form Selector', component: FormSelector },
            { title: 'Settings', component: Settings }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, page.params);
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html',
                    providers: [ObmApiService, RepoService, StorageService]
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map
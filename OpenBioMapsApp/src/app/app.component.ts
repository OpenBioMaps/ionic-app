import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { DynamicForm } from '../pages/dynamicForm/dynamicForm';
import { FormSelector } from '../pages/formSelector/formSelector';
import { Settings } from '../pages/settings/settings';

import { ObmApiService } from '../services/obmApi.service';
import { RepoService } from '../services/repo.service';
import { StorageService } from '../services/storage.service';

@Component({
  templateUrl: 'app.html',
  providers:  [ObmApiService, RepoService, StorageService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FormSelector;

  pages: Array<{title: string, component: any, params?: any}>;

  constructor(public platform: Platform) {


    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Form Selector', component: FormSelector },
      { title: 'Settings', component: Settings }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component, page.params);
  }
}

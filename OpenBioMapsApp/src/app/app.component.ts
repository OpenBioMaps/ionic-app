import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { FormSelector } from '../pages/formSelector/formSelector';
import { Settings } from '../pages/settings/settings';
import { NoteList } from '../pages/noteList/noteList';

import { DatabaseService } from '../services/database.service';
import { ObmApiService } from '../services/obmApi.service';
import { RepoService } from '../services/repo.service';
import { StorageService } from '../services/storage.service';

import { TranslateService } from 'ng2-translate';

@Component({
  templateUrl: 'app.html',
  providers:  [DatabaseService, ObmApiService, RepoService, StorageService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = FormSelector;

  pages: Array<{title: string, component: any, params?: any}>;


  constructor(public platform: Platform,
    private db: DatabaseService,
    private storage: StorageService,
    private translate: TranslateService) {
    this.initializeApp();

    this.storage
      .getSettings()
      .then(settings => {
        if(settings) {
          this.translate.setDefaultLang(settings.language);
        }
      });
      
    this.db.init()
      .then(() => {
        this.db.loadAllForms()
          .then(res => {
            console.log(JSON.stringify(res));
          })
      });
  
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'FORM_SELECTOR', component: FormSelector },
      { title: 'SETTINGS', component: Settings },
      { title: 'NOTELIST', component: NoteList}
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

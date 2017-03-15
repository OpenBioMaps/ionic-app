import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { SettingsModel } from '../../models/settings';

import { Http } from '@angular/http';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate/ng2-translate';

import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class Settings {
  settingsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: StorageService,
              private formBuilder: FormBuilder,
              private toastCtrl: ToastController,
              public translateService: TranslateService ) {
    this.settingsForm = this.formBuilder
      .group({
        title: [''],
        url: ['', Validators.required],
        language: ['']
      });


    this.storage
      .getSettings()
      .then(settings => {
        if(settings) {
          this.settingsForm.setValue(settings);
          this.translateService.setDefaultLang(settings.language);
        }
      });
  }

  saveSettings() {
    let settings: SettingsModel = new SettingsModel(this.settingsForm.value);
    this.storage
      .setSettings(settings)
      .then(() => this.showSavedToast());
      this.translateService.setDefaultLang(settings.language);
      
  }

  showSavedToast() {
    let toast = this.toastCtrl.create({
      message: 'Settings saved',
      duration: 3000
    });
    toast.present();
  }
}

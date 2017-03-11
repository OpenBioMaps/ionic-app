import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';
import { SettingsModel } from '../../models/settings';

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
              private toastCtrl: ToastController ) {
    this.settingsForm = this.formBuilder
      .group({
        title: [''],
        url: ['', Validators.required]
      });

    this.storage
      .getSettings()
      .then(settings => {
        if(settings) {
          this.settingsForm.setValue(settings);
        }
      });
  }

  saveSettings() {
    let settings: SettingsModel = new SettingsModel(this.settingsForm.value);
    this.storage
      .setSettings(settings)
      .then(() => this.showSavedToast());
  }

  showSavedToast() {
    let toast = this.toastCtrl.create({
      message: 'Settings saved',
      duration: 3000
    });
    toast.present();
  }
}

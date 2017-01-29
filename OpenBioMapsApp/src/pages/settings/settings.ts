import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { NavController, NavParams, ToastController } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers:  [ StorageService ]
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
    this.storage
      .setSettings(this.settingsForm.value)
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

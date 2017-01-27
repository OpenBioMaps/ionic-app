import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { NavController, NavParams } from 'ionic-angular';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
  providers:  [StorageService]
})
export class Settings {
  settingsForm: FormGroup;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private storage: StorageService,
              private formBuilder: FormBuilder ) {
  this.settingsForm = this.formBuilder.group({
                  url: ['', Validators.required]
                });
    this.storage.getUrl().then(url => this.settingsForm.controls['url'].setValue(url));
  }

  saveSettings() {
    this.storage.setUrl(this.settingsForm.get('url').value);
  }
}

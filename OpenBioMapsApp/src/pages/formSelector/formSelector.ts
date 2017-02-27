import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DynamicForm } from '../dynamicForm/dynamicForm';
import { ObmApiService } from '../../services/obmApi.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'page-form-selector',
  templateUrl: 'formSelector.html'
})
export class FormSelector {
  error: any;
  url: string;
  forms: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private api: ObmApiService,
              private storage: StorageService ) {
    this.storage
      .getSettings()
      .then(settings => {
        if(settings) {
          this.url = settings.url;
          return this.api.loadFormList(this.url)
        } else {
          // TODO Display no url set warning
        }
      })
      .then(response => {
        this.forms = response;
      })
      .catch(e => {
        this.error = e;
      });
  }

  onItemClick(event, form) {
    this.navCtrl.push(DynamicForm, {
      url: this.url,
      id: form.id
    });
  }
}

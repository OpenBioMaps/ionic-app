import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { DynamicForm } from '../dynamicForm/dynamicForm';
import { StorageService } from '../../services/storage.service';
import { RepoService } from '../../services/repo.service';

@Component({
  selector: 'page-form-selector',
  templateUrl: 'formSelector.html',
  providers:  [ RepoService, StorageService ]
})
export class FormSelector {
  error: any;
  url: string;
  forms: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private repo: RepoService,
              private storage: StorageService ) {
    this.storage
      .getSettings()
      .then(settings => {
        if(settings) {
          this.url = settings.url;
          return this.repo.loadUrl(this.url);
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

  onItemClick(event, item) {
    this.navCtrl.push(DynamicForm, {
      item: item
    });
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


import { DatabaseService } from '../../services/database.service';
import { ObmForm } from '../../models/obmForm';

/*
  Generated class for the NoteList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-note-list',
  templateUrl: 'noteList.html',
})
export class NoteList {
  result: ObmForm[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: DatabaseService) {
      this.db.loadAllForms().then(result => this.result = result)
      .catch(error => {
        console.log(error);
      });
  }
}

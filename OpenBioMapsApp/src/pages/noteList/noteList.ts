import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DatabaseService } from '../../services/database.service';
import { SyncService } from '../../services/sync.service';
import { ObmForm } from '../../models/obmForm';
import { SavedNote } from '../savedNote/savedNote';

/*
  Generated class for the NoteList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-note-list',
  templateUrl: 'noteList.html',
  providers:  [ SyncService ]
})
export class NoteList {
  result: ObmForm[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private db: DatabaseService,
    private syncService: SyncService ) {
      this.syncService.startSync();
      this.db.loadAllForms().then(result => this.result = result)
      .catch(error => {
        console.log(error);
      });
  }

  onItemClick(){
    
  }
}

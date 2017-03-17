import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NoteList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-note-list',
  templateUrl: 'noteList.html'
})
export class NoteList {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

}

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from './models/question-base';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';

@Component({
  selector: 'df-question',
  templateUrl: 'dynamic-form-question.component.html',
  providers: [Geolocation, Diagnostic]
})

export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  val: string = null;


  constructor(private geolocation: Geolocation,
    private alertCtrl: AlertController,
    private diagnostic: Diagnostic) { }


  get isValid() { return this.form.controls[this.question.key].valid; }
  public hasError(key: string) { return this.form.controls[this.question.key].hasError(key); }

  getGeolocation() {
    this.diagnostic.isGpsLocationAvailable().then((result) => {
      if (result) {
        this.geolocation.getCurrentPosition().then((resp) => {
          console.log("koordináták:" + resp.coords.latitude.toString() + ',' + resp.coords.longitude.toString());
          this.val = resp.coords.latitude.toString() + ',' + resp.coords.longitude.toString();
        })
      }
      else {
        let alert = this.alertCtrl.create({
          title: 'GPS is disabled',
          message: 'GPS is disabled on your device. Please check your settings!',
          buttons: [{
            text: 'OK',
            handler: () => {
              this.diagnostic.switchToLocationSettings();
            }
          }]
        });
        alert.present();
      }
    })
  }
}

import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { QuestionBase }     from './models/question-base';
import { Geolocation } from '@ionic-native/geolocation';
import { AlertController } from  'ionic-angular';

@Component({
  selector: 'df-question',
  templateUrl: 'dynamic-form-question.component.html',
  providers: [ Geolocation ]
})

export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  val: string = null;
  

  constructor(private geolocation: Geolocation,
              private alertCtrl: AlertController) { }
              

  get isValid() { return this.form.controls[this.question.key].valid; }
  public hasError(key: string) { return this.form.controls[this.question.key].hasError(key); }

  getGeolocation(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this.val = resp.coords.latitude.toString() + ',' +  resp.coords.longitude.toString();
      }).catch((error) => {
        //console.log('Error getting location', error);
        var alert = this.alertCtrl.create({
        title: 'Error on GPS',
        subTitle: 'You need active the GPS',
        buttons: ['Ok']
        });
      alert.present();
    });
    
  }
  
}

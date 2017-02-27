import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { NavController, NavParams, ToastController } from 'ionic-angular';

import { QuestionService } from '../../dynamicForm/services/question.service';
import { ObmApiService } from '../../services/obmApi.service';

@Component({
  selector: 'page-dynamic-form',
  templateUrl: 'dynamicForm.html',
  providers:  [QuestionService]
})
export class DynamicForm {
  formId: number;
  url: string;
  questions: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private questionService: QuestionService,
    private api: ObmApiService,
    private toastCtrl: ToastController) {

    this.formId = navParams.get('id');
    this.url = navParams.get('url');
    this.questionService.getQuestions(this.url, this.formId)
      .then(questions => this.questions = questions);
  }

  onSubmitted(form: FormGroup) {
    this.api.upload(JSON.stringify(form.value));
    this.showToast();
  }

  showToast() {
    let toast = this.toastCtrl.create({
      message: 'TODO: Save form data and clear values!',
      duration: 3000
    });
    toast.present();
  }
}

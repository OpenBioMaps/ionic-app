import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-dynamic-form',
  templateUrl: 'dynamicForm.html',
  providers:  [QuestionService]
})
export class DynamicForm {
  questions: any[];

  constructor(public navCtrl: NavController, service: QuestionService) {
    service.getQuestionsSlowly().then(questions => this.questions = questions);;
  }
}

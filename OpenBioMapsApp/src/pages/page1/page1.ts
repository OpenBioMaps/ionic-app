import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QuestionService } from '../../dynamicForm/services/question.service';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers:  [QuestionService]
})
export class Page1 {
  questions: any[];

  constructor(public navCtrl: NavController, service: QuestionService) {
    service.getQuestionsSlowly().then(questions => this.questions = questions);;
  }
}

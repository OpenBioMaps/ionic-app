import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { QuestionService } from '../../dynamicForm/services/question.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'page-dynamic-form',
  templateUrl: 'dynamicForm.html',
  providers:  [QuestionService, UploadService]
})
export class DynamicForm {
  questions: any[];

  constructor(public navCtrl: NavController,
    private questionService: QuestionService,
    private uploadService: UploadService) {
    this.questionService.getQuestionsSlowly().then(questions => this.questions = questions);
    this.uploadService.upload();
  }
}

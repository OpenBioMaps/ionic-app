import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { QuestionService } from '../../dynamicForm/services/question.service';
import { ObmApiService } from '../../services/obmApi.service';
import { RepoService } from '../../services/repo.service';
import { StorageService } from '../../services/storage.service';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'page-dynamic-form',
  templateUrl: 'dynamicForm.html',
  providers:  [QuestionService, ObmApiService, RepoService, StorageService, UploadService]
})
export class DynamicForm {
  formId: number;
  url: string;
  questions: any[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private questionService: QuestionService,
    private uploadService: UploadService) {

    this.formId = navParams.get('id');
    this.url = navParams.get('url');
    this.questionService.getQuestionsSlowly(this.url, this.formId)
      .then(questions => this.questions = questions);

    //this.uploadService.upload();
  }
}

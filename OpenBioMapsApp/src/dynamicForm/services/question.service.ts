import { Injectable }       from '@angular/core';
import { Http }             from '@angular/http';
import { QuestionBase }     from '../models/question-base';
import { JsonConverter }    from '../../utils/json-converter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class QuestionService {
  jsonUrl: string = 'https://raw.githubusercontent.com/OpenBioMaps/ionic-app/master/form.json';

  constructor(public http: Http) {
  }

  // TODO handle errors
  // TODO json loading could be separated into another service
  getQuestions(): Promise<QuestionBase<any>[]> {
    return this.http.get(this.jsonUrl).toPromise()
      .then(result => {
        let json = result.json();
        let questions: QuestionBase<any>[] = JsonConverter.convert(json);
        return Promise.resolve(questions.sort((a, b) => a.order - b.order));
      });
  }

  getQuestionsSlowly(): Promise<QuestionBase<any>[]> {
    return new Promise<QuestionBase<any>[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getQuestions());
  }
}

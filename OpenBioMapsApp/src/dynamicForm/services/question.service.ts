import { Injectable }       from '@angular/core';

import { QuestionBase }     from '../models/question-base';
import { ObmApiService }    from '../../services/obmApi.service';
import { RepoService }      from '../../services/repo.service';
import { JsonConverter }    from '../../utils/json-converter';

@Injectable()
export class QuestionService {

  constructor(private api: ObmApiService,
              private repo: RepoService) { }

  getQuestions(url: string, id: number): Promise<QuestionBase<any>[]> {
    if(id) {
      return this.api.loadForm(url, id)
        .then(json => {
          let questions: QuestionBase<any>[] = JsonConverter.convert(json);
          return Promise.resolve(questions.sort((a, b) => a.order - b.order));
        });
    } else {
      // TODO We will not need this
      return this.repo.loadUrl(url)
        .then(json => {
          let questions: QuestionBase<any>[] = JsonConverter.convert(json);
          return Promise.resolve(questions.sort((a, b) => a.order - b.order));
        });
    }
  }

  getQuestionsSlowly(url: string, id: number): Promise<QuestionBase<any>[]> {
    return new Promise<QuestionBase<any>[]>(resolve => setTimeout(resolve, 2000))
      .then(() => this.getQuestions(url, id));
  }
}

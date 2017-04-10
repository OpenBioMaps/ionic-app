import { Injectable }   from '@angular/core';

import { RepoService } from './repo.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ObmApiService {
  // TODO let us set the baseurl
  private static readonly GET_FORMS = 'get_api_forms';
  private static readonly GET_FORM = 'get_api_form';

  constructor(private repo: RepoService) {}

  loadFormList(url: string): Promise<any> {
    url += '&' + ObmApiService.GET_FORMS;
    return this.repo.loadUrl(url);
  }

  loadForm(url: string, id: number): Promise<any> {
    url += '&' + ObmApiService.GET_FORM + '=' + id.toString();
    return this.repo.loadUrl(url);
  }

  upload(json: any, url: string = 'http://aries.ektf.hu/~szugyi/upload.php'): Promise<any> {
    return this.repo.upload(json, url);
  }
}

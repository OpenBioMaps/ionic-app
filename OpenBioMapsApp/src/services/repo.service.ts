import { Injectable }     from '@angular/core';
import { Http, Headers }  from '@angular/http';

import { StorageService } from './storage.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RepoService {

    constructor(private http: Http,
                private storage: StorageService) {}

    loadUrl(url: string): Promise<any> {
      return this.http.get(url)
        .toPromise()
        .then(response => {
          // Save response to local cache
          return this.storage.setKey(url, response.json());
        })
        .catch(e => {
          // Try to get cached result
          return this.storage.getKey(url);
        })
        .then(response => {
            if(!response) {
              throw 'Exception: Response is empty';
            }
            return response;
        });
    }

    upload(json: any, url: string): Promise<any> {
      var fd = this.getFormData(json);
      console.log("Form data is");
      console.log(fd);

      var headers = new Headers();
      //headers.append('Content-Type', 'multipart/form-data');

      return this.http.post(url, fd, {headers: headers})
        .toPromise();
    }

    private getFormData(object) {
      const formData = new FormData();
      Object.keys(object).forEach(key => formData.append(key, object[key]));
      return formData;
    }
}

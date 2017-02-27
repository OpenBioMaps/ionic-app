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

    upload(url: string) {
      var fd = new FormData();
      fd.append('test_text', 'Hey');
      fd.append('test_int', 20);

      var headers = new Headers();
      //headers.append('Content-Type', 'multipart/form-data');

      this.http.post(url, fd, {headers: headers})
      .toPromise()
      .then(function (data) {
        console.log(data);
      }).catch(function (error) {
        console.log(error);
      });
    }
}

import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

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
              throw 'Response is empty';
            }
            return response;
        });
    }
}

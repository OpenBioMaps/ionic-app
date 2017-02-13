import { Injectable }   from '@angular/core';
import { Http, Headers }         from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UploadService {

    constructor(private http: Http) {}

    upload() {
      var fd = new FormData();
      fd.append('test_text', 'Hey');
      fd.append('test_int', 20);

      var headers = new Headers();
      //headers.append('Content-Type', 'multipart/form-data');

      this.http.post('http://aries.ektf.hu/~szugyi/upload.php', fd, {headers: headers})
      .toPromise()
      .then(function (data) {
        console.log(data);
      }).catch(function (error) {
        console.log(error);
      });
    }
}

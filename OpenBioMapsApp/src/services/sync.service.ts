import { Injectable }   from '@angular/core';

import { DatabaseService } from './database.service'
import { ObmApiService } from './obmApi.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SyncService {

  constructor(private api: ObmApiService,
    private db: DatabaseService) {}

  startSync() {
    // TODO Load only unprocessed forms
    this.db.loadAllForms()
      .then(forms => {
        forms.forEach(form => {
          // TODO Use the url saved with the data
          console.log("Upload this");
          console.log(form.data);
          this.api.upload(JSON.parse(form.data))
            .then(data => {
              console.log("The response was");
              console.log(data);
              console.log(JSON.stringify(data));
            });
        });
      });
  }
}

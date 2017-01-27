import { Injectable }       from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StorageService {
  private static readonly KEY_URL = 'url';
  private storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  setUrl(url: string): Promise<any> {
    return this.storage.set(StorageService.KEY_URL, url);
  }

  getUrl(): Promise<any> {
    return this.storage.get(StorageService.KEY_URL);
  }
}

import { Injectable }       from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StorageService {
  private static readonly KEY_SETTINGS = 'settings';

  private storage;

  constructor(storage: Storage) {
    this.storage = storage;
  }

  setSettings(settings: any): Promise<any> {
    return this.storage.set(StorageService.KEY_SETTINGS, settings);
  }

  getSettings(): Promise<any> {
    return this.storage.get(StorageService.KEY_SETTINGS);
  }
}

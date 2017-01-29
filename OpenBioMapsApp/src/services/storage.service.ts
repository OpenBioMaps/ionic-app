import { Injectable }       from '@angular/core';
import { Storage } from '@ionic/storage';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class StorageService {
  private static readonly KEY_SETTINGS = 'settings';

  constructor(private storage: Storage) {
  }

  setKey(key: string, value: any): Promise<any> {
    return this.storage.set(key, value);
  }

  getKey(key: string): Promise<any> {
    return this.storage.get(key);
  }

  setSettings(settings: any): Promise<any> {
    return this.setKey(StorageService.KEY_SETTINGS, settings);
  }

  getSettings(): Promise<any> {
    return this.getKey(StorageService.KEY_SETTINGS);
  }
}

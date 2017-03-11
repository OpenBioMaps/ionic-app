import { Injectable }       from '@angular/core';
import { Storage } from '@ionic/storage';

import { SettingsModel } from '../models/settings'

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

  setSettings(settings: SettingsModel): Promise<any> {
    return this.setKey(StorageService.KEY_SETTINGS, settings);
  }

  getSettings(): Promise<SettingsModel> {
    return this.getKey(StorageService.KEY_SETTINGS)
      .then(json => {
        return new SettingsModel(json);
      });
  }
}

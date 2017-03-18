import { Injectable } from '@angular/core';
import { SQLite } from 'ionic-native';
import { Platform } from 'ionic-angular';

import { ObmForm } from '../models/obmForm';
 
@Injectable()
export class DatabaseService {

  public database: SQLite;
 
  constructor(private platform: Platform) {}

  public init(): Promise<any> {
    return this.platform.ready().then(() => {
      this.database = new SQLite();
      return this.database.openDatabase({
          name: "obm.db",
          location: "default"
        }).then(() => {
          ObmForm.create(this.database);
        });
    });
  }

  public saveForm(data: ObmForm): Promise<any> {
    if(!this.database) {
      return Promise.reject(new Error('No local database connection!'));
    }

    return data.insert(this.database);
  }

  public loadAllForms(): Promise<ObmForm[]> {
    if(!this.database) {
      return Promise.reject(new Error('No local database connection!'));
    }
    
    return ObmForm.getAll(this.database);
  }
}
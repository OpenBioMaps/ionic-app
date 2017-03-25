import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';

import { ObmForm } from '../models/obmForm';
 
@Injectable()
export class DatabaseService {
  db: SQLiteObject;

  constructor(private platform: Platform, private sqlite: SQLite) {}

  public init(): Promise<any> {
    return this.platform.ready().then(() => {
      return this.sqlite.create({
          name: "obm.db",
          location: "default"
        }).then((db: SQLiteObject) => {
          this.db = db;
          ObmForm.create(this.db);
        });
    });
  }

  public saveForm(data: ObmForm): Promise<any> {
    if(!this.db) {
      return Promise.reject(new Error('No local database connection!'));
    }

    return data.insert(this.db);
  }

  public loadAllForms(): Promise<ObmForm[]> {
    if(!this.db) {
      return Promise.reject(new Error('No local database connection!'));
    }
    
    return ObmForm.getAll(this.db);
  }
}
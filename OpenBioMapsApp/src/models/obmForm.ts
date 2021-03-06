import { SQLiteObject } from '@ionic-native/sqlite';

export class ObmForm {
  private static readonly CRATE_SQL: string = `CREATE TABLE IF NOT EXISTS 
                                              form_data 
                                                (id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                date TEXT, 
                                                url TEXT, 
                                                data TEXT)`;

  private static readonly INSERT_SQL: string = `INSERT INTO form_data (date, url, data) VALUES (?, ?, ?)`;
  private static readonly SELECT_SQL: string = `SELECT * FROM form_data`;

  public id: number;
  date: Date;
  url: string;
  data: string;
 
  constructor(row: {
      id?: number,
      date: Date,
      url: string,
      data: string
    }) {
    this.id = row.id;
    this.date = row.date;
    this.url = row.url;
    this.data = row.data;
  }

  public static create(db: SQLiteObject) {
    db.executeSql(ObmForm.CRATE_SQL, {});
  }

  public static getAll(db: SQLiteObject): Promise<ObmForm[]> {
    return db.executeSql(ObmForm.SELECT_SQL, []).then((data) => {
            let result: ObmForm[] = [];
            for(var i = 0; i < data.rows.length; i++) {
                let row = data.rows.item(i);
                result.push(new ObmForm(row));
            }
            return result;
        }, (error) => {
            console.log("DB ERROR: " + JSON.stringify(error));
        });
  }

  public insert(db: SQLiteObject): Promise<any> {
    return db.executeSql(ObmForm.INSERT_SQL, [ this.date, this.url, this.data]).catch(error => {
        console.log("DB ERROR: " + JSON.stringify(error));
      });
  }
}

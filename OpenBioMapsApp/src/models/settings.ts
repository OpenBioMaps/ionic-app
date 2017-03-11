export class SettingsModel {
  title: string;
  url: string;
  language: string;
 
  constructor(json: {
      title?: string,
      url?: string,
      language?: string
    }) {
    if (!json) {
        json = {};
    }

    this.title = json.title || '';
    this.url = json.url || '';
    this.language = json.language || '';
    console.log("SettingsModel constructor");
  }
}

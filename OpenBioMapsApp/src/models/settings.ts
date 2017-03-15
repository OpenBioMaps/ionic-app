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
    this.url = json.url || 'http://openbiomaps.org/pds/service.php?service=PFS&table=dinpi';
    this.language = json.language || '';
  }
}

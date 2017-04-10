export class SettingsModel {
  url: string;
  language: string;
 
  constructor(json: {
      url?: string,
      language?: string
    }) {
    if (!json) {
        json = {};
    }

    this.url = json.url || 'http://openbiomaps.org/pds/service.php?service=PFS&table=dinpi';
    this.language = json.language || 'hu';
  }
}

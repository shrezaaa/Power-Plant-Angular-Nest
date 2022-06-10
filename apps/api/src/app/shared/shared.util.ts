import { XMLParser } from 'node_modules/fast-xml-parser';

export class SharedUtil {
  static parser = new XMLParser();

  public static parseObjectData(raw) {
    Object.keys(raw).forEach((key) => {
      if (typeof raw[key] == 'string') {
        let parsedXml = this.parser.parse(raw[key]);        
        if (JSON.stringify(parsedXml) != "{}") {
          if(parsedXml.row){
            parsedXml = parsedXml.row;
          }
          raw[key] = parsedXml
        }
      }
    });
    return raw;
  }
}

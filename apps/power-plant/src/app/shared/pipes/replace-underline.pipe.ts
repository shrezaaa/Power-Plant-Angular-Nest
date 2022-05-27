import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "replaceUnderline",
})
export class ReplaceUnderlinePipe implements PipeTransform {
  transform(value: any): any {
    const isNullOrUndefined = (value) =>
      value === undefined || value === null ? true : false;
    typeof value === "string" && value.length === 0 ? (value = "-") : value;
    return value || !isNullOrUndefined(value) ? value : "-";
  }
}

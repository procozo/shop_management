import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({
  name: "sanitizeHtml",
})
export class SantizehtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content: string): any {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}

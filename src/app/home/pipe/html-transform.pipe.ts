import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
@Pipe({
  name: 'htmlTransform'
})
export class HtmlTransformPipe implements PipeTransform {
  constructor(private sanitized: DomSanitizer) {}
  transform(value:any) : SafeHtml{
    return this.sanitized.bypassSecurityTrustHtml(value);
  }

}

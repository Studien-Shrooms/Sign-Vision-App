import { Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from './translation.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
@Pipe({
  name: 'translate',
  pure: false,
})
export class TranslatePipe implements PipeTransform {

  constructor(private translationService: TranslationService,private sanitizer: DomSanitizer) {}

  transform(value: string): string {
    return this.translationService.getTranslation(value);
  }

}

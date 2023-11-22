import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sentenceCase',
})
export class SentenceCasePipe implements PipeTransform {
  transform(value?: string): string {
    if (!value) return '';
    return value.replace(value[0], value[0].toUpperCase());
  }
}

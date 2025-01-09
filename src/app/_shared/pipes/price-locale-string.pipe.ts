import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceLocaleString',
  pure: false
})export class PriceLocaleStringPipe implements PipeTransform {
  transform(value: string | number) {
    return value.toLocaleString('fa-IR')
  }
}

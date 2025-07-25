import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from '../../../Shared/interfaces/Iproducts';

@Pipe({
  name: 'term'
})
export class TermPipe implements PipeTransform {

  transform( word: string , numberOfCharacters: number): unknown {
    return word.split(' ').slice(0, numberOfCharacters).join(' ');
  }

}

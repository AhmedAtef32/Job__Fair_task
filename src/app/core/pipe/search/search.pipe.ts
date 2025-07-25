import { Pipe, PipeTransform } from '@angular/core';
import { Iproducts } from '../../../Shared/interfaces/Iproducts';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arr: Iproducts[], searchWord:string): Iproducts[] {
    return arr.filter(item => item.title.toLowerCase().includes(searchWord.toLowerCase()));
  }

}

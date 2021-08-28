import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr'
})
export class SqrPipe implements PipeTransform {

  transform(myval: number): number {
    return myval*myval;
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dcp'
})
export class DcpPipe implements PipeTransform {

  transform(val: number,ext:string='GB'): string {
    return (val/1024).toFixed(2)+ext;
  }

}

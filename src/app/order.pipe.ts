import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Array<any>, key: string, orderDirect: boolean): Array<any> {

    if (!key) {
      return value;
    }
    if (orderDirect) {
      value.sort((a, b) => {
        return a[key].toString().localeCompare(b[key]).toString();
      });
      return value;
    } else {
      value.sort((a, b) => {
        return b[key].toString().localeCompare(a[key]).toString();
      });
      return value;
    }
  }

}

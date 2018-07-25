import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

@Pipe({ name:  'filter',  pure:  false })
export class FilterPipe implements PipeTransform {
transform(products:  any[],  filterType:  string[]):  any[] {
if  (!filterType || filterType.length === 0) { return products; }
return products.filter(paint => filterType.includes(paint.type));
}
}


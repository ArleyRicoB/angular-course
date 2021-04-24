import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, ocultar: boolean = true ): string {
    // if ( ocultar ) {
    //   let cadena: string = '';
    //   for (let index = 0; index < value.length; index++) {
    //     cadena+='*';
    //   }
    //   return cadena;
    // }
    // return value;

    return ocultar ? '*'.repeat( value.length ) : value;
  }

}

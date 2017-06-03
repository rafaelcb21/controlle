import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'numerobrasil'
})
export class NumberBrasil implements PipeTransform {
    transform(value: any, type: string) {
        if(value.length == 0){
            return '0,00'+value;
        } 
        if(value.length == 1){
            return '0,0'+value;
        }
        if(value.length == 2){
            return '0,'+value;
        }
        if(value.length >= 3){
            let numeroString = parseFloat(value.slice(0,-2) +'.'+ value.slice(-2));            
            return numeroString.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
        }           
    }
}
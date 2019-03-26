import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'cpf' })
export class CpfPipe implements PipeTransform {
    transform(cpf: number): string {
        const cpfString = cpf.toString();
        const lengthCpf = cpfString.length;
        return `${cpfString.substr(0, lengthCpf - 2)}-${cpfString.substring(lengthCpf - 2)}`;
    }

}

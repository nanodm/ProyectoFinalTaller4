import { Persona } from 'src/app/persona';

export class Paciente {

    getId(): number {
        return this.id;
    }
    
    constructor
    (public nombre:string, public especie:string,
     public sexo:string, public duenio:Persona, public id?:number) { }

}
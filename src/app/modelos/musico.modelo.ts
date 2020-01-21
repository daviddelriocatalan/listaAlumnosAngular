export class Musico {
    public id: number;
    public nombre: string; 
    public apellidos: string;
    public ciudad: string;
    public grupos:Array<string> = []; 

    constructor (id: number, nombre: string, apellidos: string, ciudad: string, grupos:Array<string>){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos; 
        this.ciudad = ciudad;
        this.grupos = grupos;
    }

}
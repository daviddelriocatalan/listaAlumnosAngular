export class Musico {
    public id: number;
    public nombre: String; 
    public apellidos: String;
    public ciudad: String;
    public grupos:Array<String> = []; 

    constructor (id: number, nombre: String, apellidos: String, ciudad: String, grupos:Array<String>){
        this.id = id;
        this.nombre = nombre;
        this.apellidos = apellidos; 
        this.ciudad = ciudad;
        this.grupos = grupos;
    }

}
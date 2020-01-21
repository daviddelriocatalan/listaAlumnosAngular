import { Component, OnInit } from '@angular/core';

import { Musico } from '../modelos/musico.modelo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  musicos:Array<Musico> = [
    {id: 1 , nombre: 'Freddie', apellidos: 'Mercury', ciudad: 'Londres', grupos: ['Queen', 'Freddie&Montse']},
    {id: 2 , nombre: 'Eric', apellidos: 'Clapton', ciudad: 'Londres', grupos: ['Cream', 'The Yardbirds', 'Derek & Dominos']},
    {id: 3 , nombre: 'James', apellidos: 'Hetfield', ciudad: 'San Francisco', grupos: ['Metallica']},
    {id: 4 , nombre: 'Adam', apellidos: 'Lambert', ciudad: 'Los Angeles', grupos: ['Queen + Adam Lambert']},
    {id: 5 , nombre: 'Robert', apellidos: 'Plant', ciudad: 'London', grupos: ['The New Yardbirds', 'Led Zeppelin']}
  ];

  verMusico(musico){
    alert("ID: " + musico.id + " - Nombre: " + musico.nombre + " - Apellidos: " + musico.apellidos + " - Ciudad: " + musico.ciudad + " - Grupos: " + musico.grupos);
  }

  verFormularioCrearAlumno : boolean = false;

  mostrarFormularioCrearAlumno(){
    if (this.verFormularioCrearAlumno) {
      this.verFormularioCrearAlumno = false;
    } else{
      this.verFormularioCrearAlumno = true;
    }
  }

  idMusicos : number = this.musicos.length;

  calcularIdNuevoMusico(){
    console.log(this.idMusicos + 1);
    return this.idMusicos + 1;
  }

  crearMusico(){

  }

  constructor() { 

    /* this.musicos.push({id: 2 , nombre: 'Eric', apellidos: 'Clapton', ciudad: 'Londres', grupos: ['Cream', 'The Yardbirds', 'Derek & Dominos']});
    this.musicos.push({id: 3 , nombre: 'James', apellidos: 'Hetfield', ciudad: 'San Francisco', grupos: ['Metallica']});
    this.musicos.push({id: 4 , nombre: 'Adam', apellidos: 'Lambert', ciudad: 'Los Angeles', grupos: ['Queen + Adam Lambert']});
    this.musicos.push({id: 5 , nombre: 'Robert', apellidos: 'Plant', ciudad: 'London', grupos: ['The New Yardbirds', 'Led Zeppelin']}); */
  


  }

  ngOnInit() {
  }

}

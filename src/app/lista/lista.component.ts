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

  verFormulario : boolean = false;

  mostrarFormularioCrearAlumno(){
    if (this.verFormulario) {
      this.verFormulario = false;
    } else{
      this.verFormulario = true;
    }
  }

  mostrarFormularioModificarAlumno(musico){
    if (this.verFormulario) {
      this.verFormulario = false;
    } else{
      this.verFormulario = true;
    }
  }

  calcularIdNuevoMusico(){
    let idMusicos  = this.musicos.length;
    console.log(idMusicos + 1);
    return idMusicos + 1;
  }

  nombreMusico : String;
  apellidoMusico : String;
  ciudadMusico : String;
  grupoMusico : String;
  
  crearMusico(){
    this.musicos.push({id: this.calcularIdNuevoMusico() , nombre: this.nombreMusico, apellidos: this.apellidoMusico, ciudad: this.ciudadMusico, grupos: [this.grupoMusico]});
    //alert("Nombre: " + this.nombreMusico + " - Apellidos: " + this.apellidoMusico + " - Ciudad: " + this.ciudadMusico + " - Grupos: " + this.grupoMusico);
  }

  modificarMusico(){
    console.log("MODIFICAR MUSICO");
  }

  borrarMusico(){
    console.log("BORRAR MUSICO");
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

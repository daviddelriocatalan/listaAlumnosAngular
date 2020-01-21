import { Component, OnInit } from '@angular/core';

import { Musico } from '../modelos/musico.modelo';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  musicos: Array<Musico> = [
    { id: 0, nombre: 'Freddie', apellidos: 'Mercury', ciudad: 'Londres', grupos: 'Queen, Freddie&Montse' },
    { id: 1, nombre: 'Eric', apellidos: 'Clapton', ciudad: 'Londres', grupos: 'Cream, The Yardbirds, Derek & Dominos' },
    { id: 2, nombre: 'James', apellidos: 'Hetfield', ciudad: 'San Francisco', grupos: 'Metallica' },
    { id: 3, nombre: 'Adam', apellidos: 'Lambert', ciudad: 'Los Angeles', grupos: 'Queen + Adam Lambert' },
    { id: 4, nombre: 'Robert', apellidos: 'Plant', ciudad: 'London', grupos: 'The New Yardbirds, Led Zeppelin' }
  ];

  calcularIdNuevoMusico() {
    console.log(this.musicos.length + 1);
    return this.musicos.length + 1;
  }

  verMusico(musico) {
    alert("ID: " + musico.id + " - Nombre: " + musico.nombre + " - Apellidos: " + musico.apellidos + " - Ciudad: " + musico.ciudad + " - Grupos: " + musico.grupos);
  }

  verFormularioCrear: boolean = true;
  verFormularioModificar: boolean = true;

  mostrarFormularioCrear() {
    if (this.verFormularioCrear) {
      this.verFormularioCrear = false;
    } else {
      this.verFormularioCrear = true;
    }
  }

  idMusico: string;
  nombreMusico: string = "Name";
  apellidoMusico: string = "SHURname";
  ciudadMusico: string = "City";
  grupoMusico: string = "Band";

  mostrarFormularioModificar(musico) {
    if (this.verFormularioModificar) {
      this.verFormularioModificar = false;
      console.log("ID: " + musico.id + " - Nombre: " + musico.nombre + " - Apellidos: " + musico.apellidos + " - Ciudad: " + musico.ciudad + " - Grupos: " + musico.grupos);
      this.idMusico = musico.id;
      this.nombreMusico = musico.nombre;
      this.apellidoMusico = musico.apellidos;
      this.ciudadMusico = musico.ciudad;
      this.grupoMusico = musico.grupos;
    } else {
      this.verFormularioModificar = true;
      this.nombreMusico = "Name";
      this.apellidoMusico = "SHURname";
      this.ciudadMusico = "City";
      this.grupoMusico = "Band";

    }
  }  

  crearMusico() {
    this.musicos.push({ id: this.calcularIdNuevoMusico(), nombre: this.nombreMusico, apellidos: this.apellidoMusico, ciudad: this.ciudadMusico, grupos: this.grupoMusico });
    //alert("Nombre: " + this.nombreMusico + " - Apellidos: " + this.apellidoMusico + " - Ciudad: " + this.ciudadMusico + " - Grupos: " + this.grupoMusico);
  }

  modificarMusico() {
    console.log("MODIFICAR MUSICO");

    for (let i = 0; i < this.musicos.length; i++) {
      if (this.musicos[i].id == parseInt(this.idMusico)) {
        this.musicos.splice(i, 1);
        console.log("MODIFICADO BORRADO");
        this.musicos.push({ id: parseInt(this.idMusico), nombre: this.nombreMusico, apellidos: this.apellidoMusico, ciudad: this.ciudadMusico, grupos: this.grupoMusico });
        console.log("MODIFICADO CREADO");
      }
    }

  }

  borrarMusico(musico) {
    console.log("BORRAR MUSICO");
    console.log(musico.id);

    for (let i = 0; i < this.musicos.length; i++) {
      if (this.musicos[i].id == musico.id) {
        this.musicos.splice(i, 1);
        console.log("BORRADO");
      }
    }
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

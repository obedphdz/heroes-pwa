import { Component, OnInit } from '@angular/core';
import { Persona } from '../app.module';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //modelo de persona vacio
  PersonaRegistro: Persona;
  ArrayPersonas: Persona[];

  constructor() {
    this.ArrayPersonas = JSON.parse(
      localStorage.getItem('PersonasRegistradasMP2') || '[]'
    );
    this.PersonaRegistro={
      nombre :"",
      correo:"",
      sexo:"",
      fecha:new Date
    }
  }

  ngOnInit() {}

  formularioEnviado() {
    if (
      this.PersonaRegistro.nombre != '' &&
      this.PersonaRegistro.sexo != '' &&
      this.PersonaRegistro.correo != ''
    ) {
      //nuevo registro
      Swal.fire({
        title: 'Usuario Agregado con exito',
        text: 'bienvenid@ ' + this.PersonaRegistro.nombre,
        icon: 'success',
        confirmButtonText: 'ok',
        timerProgressBar: true,
        timer: 2500,
      });
      this.ArrayPersonas.push(this.PersonaRegistro); //agrega al array
      localStorage.setItem(
        'PersonasRegistradasMP2',
        JSON.stringify(this.ArrayPersonas)
      ); //guarda en el local
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Existen campos vacios',
        icon: 'error',
        confirmButtonText: 'ok',
        timerProgressBar: true,
        timer: 2000,
      });
    }
    this.reiniciarFormulario();
  }

  reiniciarFormulario() {
    //limpiar el formulario
    this.PersonaRegistro={
      nombre :"",
      correo:"",
      sexo:"",
      fecha:new Date
    }
  }
}

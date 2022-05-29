import { Component, OnInit } from '@angular/core';
import { Persona } from '../app.module';

@Component({
  selector: 'app-usuarios-registrados',
  templateUrl: './usuarios-registrados.component.html',
  styleUrls: ['./usuarios-registrados.component.css']
})
export class UsuariosRegistradosComponent implements OnInit {
  ArrayPersonasLocal: Persona[];

  constructor() {
    this.ArrayPersonasLocal = JSON.parse(
      localStorage.getItem('PersonasRegistradasMP2') || '[]'
    );
  }

  ngOnInit(): void {
  }



}

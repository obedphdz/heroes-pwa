import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  buscarUnHeroe(nombre: String){
    if(nombre != ""){
      this.router.navigate(['/buscador',nombre]);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Campo vacio',
        text: 'No escribiste ningun nombre',
        timer: 2500,
        timerProgressBar: true,
        showConfirmButton: false
      })
    }
    
  }
}

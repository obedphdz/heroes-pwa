import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  nombreh:string = "";
  indice:number=0;
  miheroe:Heroe = {
    nombre:"",
    bio:"",
    img:"",
    aparicion:"",
    casa:""
  }


  constructor(private heroeService: HeroeService, private activatedRouter:ActivatedRoute, private router: Router) { 
    this.activatedRouter.params.subscribe ( params => {
      this.nombreh = params['nombreh'];
      this.indice = this.heroeService.searchHeroe(this.nombreh);
      console.log(this.indice);
      if(this.indice!=-1){
        this.miheroe = this.heroeService.getUnHeroe(this.indice);
      }else{
        this.noExisteHeroe();
      }
    });
  }

  ngOnInit(): void {
  }


  noExisteHeroe(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No existen resultados de ' + this.nombreh,
      timer: 2500,
      timerProgressBar: true,
      showConfirmButton: false
    })
    setTimeout(()=>{
      this.router.navigate(['/home']);
      
    },2550);
  }

}

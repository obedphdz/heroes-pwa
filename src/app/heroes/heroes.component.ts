import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  misHeroes:Heroe[] = [];
  constructor(public miServicio:HeroeService) { 
    console.log("Constructor de heroes");
  }

  ngOnInit(): void {
    console.log("ngOnInit de heroes");
    this.misHeroes=this.miServicio.getHeroe();
    console.log(this.misHeroes);

  }

}

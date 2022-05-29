import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../heroe';
import { HeroeService } from '../shared/heroe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-un-heroe',
  templateUrl: './un-heroe.component.html',
  styleUrls: ['./un-heroe.component.css']
})
export class UnHeroeComponent implements OnInit {
  @Input() heroe!: Heroe;

  constructor(public heroeService:HeroeService, public activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe ( params => {
      this.heroe=heroeService.getUnHeroe(params['id']);
    })
   }

  ngOnInit(): void {
  }

}

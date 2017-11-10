import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HeroesComponent implements OnInit {

  public heroes:Hero[] = HEROES;
  public selectedHero:Hero;

  constructor() { }

  ngOnInit() {
  }

  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
}

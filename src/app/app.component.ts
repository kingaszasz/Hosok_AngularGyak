import { Component, OnInit } from '@angular/core';
import { Hero, HeroList } from './hero';
import { HeroServiceService } from './hero-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  counter: number = 0;
  heroes: Hero[];
  hero: Hero;
  key: string = '';
  orderDirect: boolean = false;
  constructor(private hSErvice: HeroServiceService) {
    this.heroes = this.hSErvice.heroList;
    this.hero = this.hSErvice.heroList[0];

  }
  kiir(hero: Hero) {
    this.hero = hero;
  }
  ngOnInit() {
    setInterval(() => this.counter++, 1000);
  }
}

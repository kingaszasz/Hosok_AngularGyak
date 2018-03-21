import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';


@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {
  hero: Hero = new Hero();
  constructor(private hService: HeroServiceService) { }

  ngOnInit() {
  }

  submitNewHero() {
    let h: Hero = new Hero;
    for (let k in this.hero) {
      h[k] = this.hero[k];
    }
    this.hService.heroList.push(h);
    this.hero = new Hero;

  }
}

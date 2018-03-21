import { Injectable } from '@angular/core';
import { Hero } from './hero';

@Injectable()
export class HeroServiceService {
  heroList: Hero[] = [{
    name: "Magneto",
    special: "magnetic",
    address: "Cairo"
  },
  {
    name: "Wonder Woman",
    special: "fantastic",
    address: "Atlanta"
  },
  {
    name: "Iron Man",
    special: "rich",
    address: "New York"
  },
  {
    name: "Thor",
    special: "God",
    address: "Miami"
  },
  {
    name: "Kinga",
    special: "has kids",
    address: "Budapest"
  }];
  constructor() { }

}

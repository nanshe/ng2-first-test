import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    moduleId: module.id,    //for templateUrl
    selector: 'my-heroes',
    templateUrl: 'heroes.component.html',
    styleUrls: [ 'heroes.component.css' ]
})
export class HeroesComponent implements OnInit {
    heroes : Hero[]; 
    selectedHero: Hero;

    constructor (private _heroService: HeroService) {
    }

    ngOnInit() {
        this.getHeroes();
    }
     
    getHeroes() {
        // Asynchronous Promise
        // pass callback function as argument to Promise's then method
        // the callback sets the heroes property to an array of heroes returned
        //  by the service
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
        
        //this.heroes = this._heroService.getHeroes(); //this is synchronous
    }

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }

   
}


import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component ({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html'
})
export class HeroDetailComponent {
    //passing data to a nested component using input decorator - part of component's public api
    @Input() 
    hero: Hero;
}   
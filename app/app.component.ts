import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    title = 'Customer App';
    name = 'Nancy';
    newColor = 'green';

    changeColor() {
        this.newColor = this.newColor === 'green' ? 'red' : 'green';
    }
}

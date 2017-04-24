import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>
             <b>Mi primera pagina de Angular 2</b>`,
})
export class AppComponent  { name = 'Faustito'; }

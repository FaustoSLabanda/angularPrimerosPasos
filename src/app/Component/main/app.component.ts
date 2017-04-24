import { Component } from '@angular/core';
import{ Producto } from '../../Classes/Producto';
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent  { 
    producto : Producto = new Producto(1,'Patatas',1,3,'Patatas para freir');
 }

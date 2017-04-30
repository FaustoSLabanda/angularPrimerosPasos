import { Component, Input } from '@angular/core';
import { Centro } from '../../Classes/Centro';
import { Router } from '@angular/router';
import { ListaCompraServiceAPI } from '../../Services/listaCompraApi-service/listaCompraApi-service';

@Component({
    moduleId: module.id,
    selector: 'listado-centros',
    templateUrl: 'listado-centros.component.html'
})

export class ListadoCentrosComponent {
   @Input() centros : Array<Centro>;
    displayProducto(productos:Centro){
          console.log(productos);
    }
}
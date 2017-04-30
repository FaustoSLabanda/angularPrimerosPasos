import { Component, Input } from '@angular/core';
import {Usuario} from '../../Classes/Usuario';
import { ListaCompraService } from '../../Services/listaCompraClases-service/listaComplaClase-service';

@Component({
    moduleId: module.id,
    selector : 'listado-usuarios',
    templateUrl : 'listado-usuarios.component.html'
})

export class ListadoUsuario{
     @Input() usuarios : Array<Usuario>;
    displayProducto(usuarios:Usuario){
          console.log(usuarios);
    }
}
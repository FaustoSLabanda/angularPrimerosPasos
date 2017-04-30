import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Classes/Producto';
import { ListaCompraService } from '../../Services/listaCompraClases-service/listaComplaClase-service';

@Component({
    moduleId: module.id,
    selector: 'listado-productos',
    templateUrl: 'listado-productos.component.html'
})

export class ListadoProductosComponent implements OnInit {
    productos: Array<Producto>;
    constructor(
        private servicio: ListaCompraService) { }
    ngOnInit() {
        this.servicio.getPoductos().then(data => {
            this.productos = data;
        });
    }
}
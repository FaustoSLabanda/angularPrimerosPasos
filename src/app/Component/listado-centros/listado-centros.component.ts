import { Component, OnInit } from '@angular/core';
import { Centro } from '../../Classes/Centro';
import { Router } from '@angular/router';
import { ListaCompraServiceAPI } from '../../Services/listaCompraApi-service/listaCompraApi-service';

@Component({
    moduleId: module.id,
    selector: 'listado-centros',
    templateUrl: 'listado-centros.component.html'
})

export class ListadoCentrosComponent implements OnInit {
    centros: Array<Centro>;
    constructor(
        private servicioApi: ListaCompraServiceAPI) { }
    ngOnInit() {
        this.servicioApi.getProductos().subscribe(data => {
            this.centros = data;
            
        });
    }

}
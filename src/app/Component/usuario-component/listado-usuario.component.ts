import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../Classes/Usuario';
import { ListaCompraService } from '../../Services/listaCompraClases-service/listaComplaClase-service';

@Component({
    moduleId: module.id,
    selector: 'listado-usuarios',
    templateUrl: 'listado-usuarios.component.html'
})

export class ListadoUsuario implements OnInit {
    usuarios: Array<Usuario> = [];
    constructor(
        private servicio: ListaCompraService) { }
    ngOnInit() {
        this.servicio.getUsuarios().then(data => {
            this.usuarios = data;
        });
    }
}
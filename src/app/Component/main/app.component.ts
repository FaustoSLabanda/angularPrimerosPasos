import { Component, OnInit } from '@angular/core';
import { Producto } from '../../Classes/Producto';
import { Centro } from '../../Classes/Centro';
import { Usuario } from '../../Classes/Usuario';
import { ListaCompraService } from '../../Services/listaCompraClases-service/listaComplaClase-service';
import { ListaCompraServiceAPI } from '../../Services/listaCompraApi-service/listaCompraApi-service';
@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  productosXXX: Array<Producto> = [];
  centros: Array<Centro> = [];
  usuarios: Array<Usuario> = [];

  constructor(private servicio: ListaCompraService,
    private servicioApi: ListaCompraServiceAPI) { }

  ngOnInit() {
    this.servicio.getPoductos().then(data => {
      this.productosXXX = data;
    });


    this.servicio.getUsuarios().then(data => {
      this.usuarios = data;
    });

    this.servicioApi.getProductos().subscribe(data => {
      this.centros = data;
      console.log(this.centros);
    });
  }

  guardar(model: Producto) {
    let v = Math.max.apply(Math, this.productosXXX.map(function (o) { return o.id; }));
    model.id = ++v;
    this.productosXXX.push(model);
  }
}

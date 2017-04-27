import { Component ,OnInit} from '@angular/core';
import{ Producto } from '../../Classes/Producto';
import { ListaCompraService} from '../../Services/listaCompraClases-service/listaComplaClase-service';
@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit { 
    productosXXX : Array<Producto> =[];

    constructor(private servicio : ListaCompraService){}

    ngOnInit(){
      this.servicio.getPoductos().then(data =>{
        this.productosXXX = data;
      });
    }

    guardar(model:Producto){
      let v = Math.max.apply(Math,this.productosXXX.map(function(o){return o.id;}));
      model.id = ++v;
      this.productosXXX.push(model);
    }
 }

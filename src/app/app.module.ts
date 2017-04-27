import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppComponent }  from './Component/main/app.component';
import {FormularioProductoComponent} from './Component/formulario-producto/formulario-producto.component';
import {ListadoProductosComponent} from './Component/listado-productos/listado-productos.component';
import {ListaCompraService} from './Services/listaCompraClases-service/listaComplaClase-service';

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,FormularioProductoComponent,ListadoProductosComponent ],
  bootstrap:    [ AppComponent ],
  providers : [ListaCompraService]
})
export class AppModule { }

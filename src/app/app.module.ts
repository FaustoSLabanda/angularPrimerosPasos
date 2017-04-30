import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {DefaultComponent} from './Component/default-component/default-component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent }  from './Component/main/app.component';
import {FormularioProductoComponent} from './Component/formulario-producto/formulario-producto.component';
import {ListadoProductosComponent} from './Component/listado-productos/listado-productos.component';
import {ListadoCentrosComponent} from './Component/listado-centros/listado-centros.component';
import {ListadoUsuario} from './Component/usuario-component/listado-usuario.component';
import {ListaCompraService} from './Services/listaCompraClases-service/listaComplaClase-service';
import {ListaCompraServiceAPI} from './Services/listaCompraApi-service/listaCompraApi-service';
import {routing} from './Routes/app.routing';

@NgModule({
  imports:      [ BrowserModule,FormsModule ,HttpModule,routing],
  declarations: [ AppComponent,DefaultComponent,FormularioProductoComponent,ListadoProductosComponent ,ListadoCentrosComponent,ListadoUsuario],
  bootstrap:    [ DefaultComponent ],
  providers : [ListaCompraService,ListaCompraServiceAPI]
})
export class AppModule { }

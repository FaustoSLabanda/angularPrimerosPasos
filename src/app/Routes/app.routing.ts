import {Routes, RouterModule} from '@angular/router';
import {FormularioProductoComponent} from '../Component/formulario-producto/formulario-producto.component';
import {ListadoProductosComponent} from '../Component/listado-productos/listado-productos.component';
import {ListadoCentrosComponent} from '../Component/listado-centros/listado-centros.component';
import {AppComponent} from '../Component/main/app.component';

const appRoutes:Routes=[
    {path:'centros', component:ListadoCentrosComponent},
     {path:'formulario', component:FormularioProductoComponent},
      {path:'productos', component:ListadoProductosComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
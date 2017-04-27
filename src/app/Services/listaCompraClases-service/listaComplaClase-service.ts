import {Injectable} from '@angular/core';
import {Producto} from '../../Classes/Producto';

const PRODUCTOS : Array<Producto> =[
    new Producto(1,'Patatas',3,3,'Para freir'),
    new Producto(2,'Huevos',1,3,'Para freir'),
    new Producto(3,'Pan',30,3,'Para mojar'),
    new Producto(4,'Helado',43,3,'Para postre'),
    new Producto(5,'Galletas',83,3,'Para para postre'),
];

const RETRASO = 500;

@Injectable()

export class ListaCompraService{
    getPoductos(){
        return new Promise<Producto[]>(data =>{
            setTimeout(()=>{
                data(PRODUCTOS);
            }, RETRASO);
        });
    }
}
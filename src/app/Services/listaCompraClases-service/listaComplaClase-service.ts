import {Injectable} from '@angular/core';
import {Producto} from '../../Classes/Producto';
import {Usuario} from '../../Classes/Usuario';

const PRODUCTOS : Array<Producto> =[
    new Producto(1,'Patatas',3,3,'Para freir'),
    new Producto(2,'Huevos rotos ',1,3,'Para freir'),
    new Producto(3,'Pan',30,3,'Para mojar'),
    new Producto(4,'Helado',43,3,'Para postre'),
    new Producto(5,'Galletas',83,3,'Para para postre'),
];

const USUARIOS : Array<Usuario> =[
    new Usuario(1,'Fausto','Silva Labanda','1186954K','fauger2008@hotmail.com',28),
    new Usuario(1,'Carina','Palacios Gavilanez','11875544M','cary688@hotmail.com',30),
    new Usuario(1,'Javier','Silva Labanda','18776954P','javitopapi@hotmail.com',27),
    new Usuario(1,'Jose','Silva Labanda','15886954J','josepirobo@hotmail.com',22),
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

     getUsuarios(){
        return new Promise<Usuario[]>(data =>{
            setTimeout(()=>{
                data(USUARIOS);
            }, RETRASO);
        });
    }
}
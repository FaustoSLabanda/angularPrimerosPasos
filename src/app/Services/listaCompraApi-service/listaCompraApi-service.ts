import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Producto } from '../../Classes/Producto';

@Injectable()

export class ListaCompraServiceAPI {
    private apiUrl = "http://visor.sintesis.com//Suggestions/GetCenterSuggestions?input=j";
    constructor(private http:Http){

    }

   getProductos(): Observable<Producto[]>{
       return this.http.get(this.getUrl('clara')).map(this.getDatos).catch(this.error);
   }

    private error(error:any){
        let msg = (error.message)? error.message : "Error desconocido";
        console.log(msg);
        return Observable.throw(msg);
    }
    private getDatos(data:Response){
        let datos = data.json();
        return datos || [];
    }
    private getUrl(modelo:String){
        return this.apiUrl + modelo;
    }
}
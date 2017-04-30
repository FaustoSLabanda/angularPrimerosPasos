import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Centro } from '../../Classes/Centro';

@Injectable()

export class ListaCompraServiceAPI {
    private apiUrl = "http://visor.sintesis.com//Suggestions/GetCenterSuggestions?input=";
    constructor(private http: Http) {

    }

    getProductos(): Observable<Centro[]> {
        return this.http.get(this.getUrl('clara')).map(this.getDatos).catch(this.error);
    }

    private error(error: any) {
        let msg = (error.message) ? error.message : "Error desconocido";
        console.log(msg);
        return Observable.throw(msg);
    }
    private getDatos(data: Response) {
        let datos = data.json();
        if (datos) {
            return datos.Suggestions || [];
        } else {
            return [];
        }

    }
    private getUrl(modelo: String) {
        return this.apiUrl + modelo;
    }
}
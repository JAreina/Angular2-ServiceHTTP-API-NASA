import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'; // OPERADOR MAP PARA HTTP 




@Injectable()
export class FotoDiariaService {
    foto:any={};
     API_KEY:string="OBTENER UN API KEY DE LA WEB DE LA API DE LA NASA Y COLOCARLA AQUÍ";
    query :string =`https://api.nasa.gov/planetary/apod?api_key=${this.API_KEY}`;


    constructor ( private _http:Http){}

    obtenerFotoDiaria():any{
          return this._http.get(this.query).map(res =>{
                      console.log(res.json());
                    return  this.foto= res.json();
          })
    }
}

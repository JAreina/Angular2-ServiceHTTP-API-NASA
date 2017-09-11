import { Component } from '@angular/core';
import { FotoDiariaService } from "../servicios/fotodiaria.service";
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'foto-diaria',
  templateUrl: './fotodiaria.component.html',
  styleUrls: ['./fotodiaria.component.css']
})
export class FotoDiariaComponent {
  title = 'Foto Diaria de la NASA';
  fotodiaria:any={};
   url:any;

constructor(private _fotoServices: FotoDiariaService,
                      private satinizer : DomSanitizer){
   this.obtenerFoto();
}


    obtenerFoto(){
      return this._fotoServices.obtenerFotoDiaria().subscribe((data:any )=>{
           this.fotodiaria= data;
           //console.log(this.fotodiaria);
           this.url=this.satinizer.bypassSecurityTrustResourceUrl( this.fotodiaria.url);
           this.fotodiaria.url = this.url;
    })
    }
}

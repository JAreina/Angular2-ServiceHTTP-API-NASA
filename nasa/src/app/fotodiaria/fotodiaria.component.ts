import { Component } from '@angular/core';
import { FotoDiariaService } from "../servicios/fotodiaria.service";

@Component({
  selector: 'foto-diaria',
  templateUrl: './fotodiaria.component.html',
  styleUrls: ['./fotodiaria.component.css']
})
export class FotoDiariaComponent {
  title = 'Foto Diaria de la NASA';
  fotodiaria:any={};

constructor(private _fotoServices: FotoDiariaService){
   this.obtenerFoto();
}


    obtenerFoto(){
      return this._fotoServices.obtenerFotoDiaria().subscribe((data:any )=>{
           this.fotodiaria= data;
           console.log(this.fotodiaria);
    })
    }
}

import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
import { Injectable } from '@angular/core';  
import { Articulo } from 'src/Models/Articulo'
import { ROOT_URL } from 'src/Models/config'
import { Observable } from 'rxjs';  
@Injectable()  
export class DataService { 

    articulo: Observable<Articulo[]>;  
      newarticulo: Articulo;  
      constructor(private http: HttpClient) {  
       }  

      getArticulo() {  
        return this.http.get<Articulo[]>(ROOT_URL + 'Articulo');  
  }  

AddArticulo(art: Articulo) {  
     const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {
        Sku_Codigo: art.Sku_Codigo,
        Sku_NumeroSerie: art.Sku_NumeroSerie,
        Sku_Descripcion: art.Sku_Descripcion,
        Sku_Cantidad: art.Sku_Cantidad,
        Sku_Cat_ID: art.Sku_Cat_ID,
        Sku_Sub_Cat_ID: art.Sku_Sub_Cat_ID,
        Sku_Latitud: art.Sku_Latitud,
        Sku_Longitud: art.Sku_Longitud   
    }  
    console.log(ROOT_URL);  
     return this.http.post<Articulo>(ROOT_URL + '/Articulo', body, { headers });  
}  

  EditArticulo(art: Articulo) {  
    console.log(art);  
    const params = new HttpParams().set('ID', art.Sku_ID);  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
        Sku_Codigo: art.Sku_Codigo,
        Sku_NumeroSerie: art.Sku_NumeroSerie,
        Sku_Descripcion: art.Sku_Descripcion,
        Sku_Cantidad: art.Sku_Cantidad,
        Sku_Cat_ID: art.Sku_Cat_ID,
        Sku_Sub_Cat_ID: art.Sku_Sub_Cat_ID,
        Sku_Latitud: art.Sku_Latitud,
        Sku_Longitud: art.Sku_Longitud,
        Sku_ID : art.Sku_ID
    }  
    return this.http.put<Articulo>(ROOT_URL + 'Articulo/' + art.Sku_ID, body, { headers, params })  
 }

DeleteArticulo(art: Articulo) {  
    const params = new HttpParams().set('ID', art.Sku_ID);  
    const headers = new HttpHeaders().set('content-type', 'application/json');  
    var body = {  
        Sku_Codigo: art.Sku_Codigo,
        Sku_NumeroSerie: art.Sku_NumeroSerie,
        Sku_Descripcion: art.Sku_Descripcion,
        Sku_Cantidad: art.Sku_Cantidad,
        Sku_Cat_ID: art.Sku_Cat_ID,
        Sku_Sub_Cat_ID: art.Sku_Sub_Cat_ID,
        Sku_Latitud: art.Sku_Latitud,
        Sku_Longitud: art.Sku_Longitud,
        Sku_ID : art.Sku_ID 
    }  
    return this.http.delete<Articulo>(ROOT_URL + '/Articulo/' + art.Sku_ID)  
   }  
 }
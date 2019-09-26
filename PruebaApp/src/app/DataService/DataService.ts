// import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';  
// import { Injectable } from '@angular/core';  
// import { Articulo } from 'src/app/Models/Articulo'
// import { ROOT_URL } from 'src/app/Models/config'
// import { Observable } from 'rxjs';  
// @Injectable()  
// export class DataService { 

//     articulo: Observable<Articulo[]>;  
//       newarticulo: Articulo;  
//       constructor(private http: HttpClient) {  
//        }  

//       getArticulo() {  
//         return this.http.get<Articulo[]>(ROOT_URL + 'Articulo');  
//   }  

// AddArticulo(art: Articulo) {  
//      const headers = new HttpHeaders().set('content-type', 'application/json');  
//     var body = {
//         Sku_Codigo: art.Sku_Codigo,
//         Sku_NumeroSerie: art.Sku_NumeroSerie,
//         Sku_Descripcion: art.Sku_Descripcion,
//         Sku_Cantidad: art.Sku_Cantidad,
//         Sku_Cat_ID: art.Sku_Cat_ID,
//         Sku_Sub_Cat_ID: art.Sku_Sub_Cat_ID,
//         Sku_Latitud: art.Sku_Latitud,
//         Sku_Longitud: art.Sku_Longitud   
//     }  
//     console.log(ROOT_URL);  
//      return this.http.post<Articulo>(ROOT_URL + '/Articulo', body, { headers });  
// }  

//   EditArticulo(art: Articulo) {  
//     console.log(art);  
//     const params = new HttpParams().set('ID', art.Sku_ID.toString());  
//     const headers = new HttpHeaders().set('content-type', 'application/json');  
//     var body = {  
//         Sku_Codigo: art.Sku_Codigo,
//         Sku_NumeroSerie: art.Sku_NumeroSerie,
//         Sku_Descripcion: art.Sku_Descripcion,
//         Sku_Cantidad: art.Sku_Cantidad,
//         Sku_Cat_ID: art.Sku_Cat_ID,
//         Sku_Sub_Cat_ID: art.Sku_Sub_Cat_ID,
//         Sku_Latitud: art.Sku_Latitud,
//         Sku_Longitud: art.Sku_Longitud,
//         Sku_ID : art.Sku_ID
//     }  
//     return this.http.put<Articulo>(ROOT_URL + 'Articulo/' + art.Sku_ID, body, { headers, params })  
//  }

// DeleteArticulo(art: Articulo) {  
//     const params = new HttpParams().set('ID', art.Sku_ID.toString());  
//     const headers = new HttpHeaders().set('content-type', 'application/json');  
//     var body = {  
//         Sku_Codigo: art.Sku_Codigo,
//         Sku_NumeroSerie: art.Sku_NumeroSerie,
//         Sku_Descripcion: art.Sku_Descripcion,
//         Sku_Cantidad: art.Sku_Cantidad,
//         Sku_Cat_ID: art.Sku_Cat_ID,
//         Sku_Sub_Cat_ID: art.Sku_Sub_Cat_ID,
//         Sku_Latitud: art.Sku_Latitud,
//         Sku_Longitud: art.Sku_Longitud,
//         Sku_ID : art.Sku_ID 
//     }  
//     return this.http.delete<Articulo>(ROOT_URL + '/Articulo/' + art.Sku_ID)  
//    }  
//  }

import {
  Injectable
} from '@angular/core';
import {
  Articulo
} from 'src/app/Models/Articulo'
import {
  HttpClient
} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  formData: Articulo;
  list: Articulo[];
  readonly rootURL = "http://localhost:7000/api"

  constructor(private http: HttpClient) {}

  postArticulo(formData: Articulo) {
    return this.http.post(this.rootURL + '/Articulo', formData);

  }

  refreshList() {
    this.http.get(this.rootURL + '/Articulo')
      .toPromise().then(res => this.list = res as Articulo[]);
  }

  putArticulo(formData: Articulo) {
    return this.http.put(this.rootURL + '/Articulo/' + formData.Sku_Cat_ID, formData);

  }

  deleteArticulo(id: number) {
    return this.http.delete(this.rootURL + '/Articulo/' + id);
  }
}

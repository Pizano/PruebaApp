// import { Component, OnInit, ViewChild } from '@angular/core';  
// import { ArticuloAddComponent } from '../articulo-add/articulo-add.component';  
// import { DataService } from '../DataService/DataService'  
// import { Articulo } from 'src/app/Models/Articulo'
// import { Router } from '@angular/router';  
// import { ArticuloUpdateComponent } from '../articulo-update/articulo-update.component';  
// @Component({  
// selector: 'app-articulo-list',  
// templateUrl: './articulo-list.component.html',  
// styleUrls: ['./articulo-list.component.css']  
// })  
// export class ArticuloListComponent implements OnInit {  
//     emplist: Articulo[];  
//     dataavailbale: Boolean = false;  
//     tempemp: Articulo  

// constructor(dataservice:DataService, private route: Router) {  }  
// ngOnInit() {  
//     this.LoadData();  
// }  

// LoadData() {  
//     this.dataservice.getArticulo().subscribe((tempdate) => {  
//     this.emplist = tempdate;  
//     console.log(this.emplist);  
//     if (this.emplist.length > 0) {  
//         this.dataavailbale = true;  
//     }     
//     else {  
//         this.dataavailbale = false;  
//     }  
// }  
// )  
// , err => {  
//     console.log(err);  
// }  
// }  
// deleteconfirmation(id: string) {  

// if (confirm("Are you sure you want to delete this ?")) {  
// this.tempemp = new Articulo();  
// this.tempemp.Sku_ID = +id;  
// this.dataservice.DeleteArticulo(this.tempemp).subscribe(res => {  
//     alert("Deleted successfully !!!");  
//     this.LoadData();  
// })  
// }  
// }  
// @ViewChild('empadd',{static: false}) addcomponent: ArticuloAddComponent  
// @ViewChild('regForm',{static: false}) editcomponent: ArticuloUpdateComponent  
// loadAddnew() {  
//     this.addcomponent.objemp.Sku_ID = null
//     this.addcomponent.objemp.Sku_Codigo = ""
//     this.addcomponent.objemp.Sku_NumeroSerie = ""
//     this.addcomponent.objemp.Sku_Descripcion = ""  
//     this.addcomponent.objemp.Sku_Cantidad = ""  
//     this.addcomponent.objemp.Sku_Cat_ID = null  
//     this.addcomponent.objemp.Sku_Sub_Cat_ID = null  
//     this.addcomponent.objemp.Sku_Latitud = ""
//     this.addcomponent.objemp.Sku_Longitud = ""  
// }  
// loadnewForm(id: number, Sku_Codigo: string, Sku_NumeroSerie: string, Sku_Descripcion: string, Sku_Cantidad: string, Sku_Cat_ID: number, Sku_Sub_Cat_ID :number, Sku_Latitud: string, Sku_Longitud :string) {  

//     this.addcomponent.objemp.Sku_ID = id
//     this.addcomponent.objemp.Sku_Codigo = Sku_Codigo
//     this.addcomponent.objemp.Sku_NumeroSerie = Sku_NumeroSerie
//     this.addcomponent.objemp.Sku_Descripcion = Sku_Descripcion
//     this.addcomponent.objemp.Sku_Cantidad = Sku_Cantidad  
//     this.addcomponent.objemp.Sku_Cat_ID = Sku_Cat_ID  
//     this.addcomponent.objemp.Sku_Sub_Cat_ID = Sku_Sub_Cat_ID  
//     this.addcomponent.objemp.Sku_Latitud = Sku_Latitud
//     this.addcomponent.objemp.Sku_Longitud = Sku_Longitud  
// }  
// RefreshData() {  
//     this.LoadData();  
// }  
// }

import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/DataService/DataService';
import { Articulo } from 'src/app/Models/Articulo';
import { ToastrService } from 'ngx-toastr';

@Component({
selector: 'app-articulo-list',
templateUrl: './articulo-list.component.html',
styleUrls: ['./articulo-list.component.css']
})
export class ArticuloListComponent implements OnInit {

constructor(private service: DataService,
    private toastr: ToastrService) { }

ngOnInit() {
    this.service.refreshList();
}

populateForm(emp: Articulo) {
    this.service.formData = Object.assign({}, emp);
}

onDelete(id: number) {
    if (confirm('Are you sure to delete this record?')) {
    this.service.deleteArticulo(id).subscribe(res => {
        this.service.refreshList();
        this.toastr.warning('Deleted successfully', 'EMP. Register');
    });
    }
}

}

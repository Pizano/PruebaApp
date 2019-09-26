import { Component, OnInit,Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Articulo } from 'src/Models/Articulo';
import { Router } from '@angular/router';
import {DataService} from '../DataService/DataService'
@Component({
    selector: 'app-articulo-add',
    templateUrl: './articulo-add.component.html',
    styleUrls: ['./articulo-add.component.css']
})
export class ArticuloAddComponent implements OnInit     {

    @Input() cleardata: boolean = false;
    @Output() nameEvent = new EventEmitter<string>();
    objtempemp:Articulo;
    @Input() objemp :Articulo=new Articulo();;
    @ViewChild('closeBtn') cb: ElementRef;
    constructor(private dataservice:DataService,private route:Router) {

    }

    ngOnInit() {
        // this.ResetValues();
    }

    ResetValues(){

    }

    Register(regForm:NgForm){
        this.objtempemp=new Articulo();

        this.objtempemp.Sku_Codigo=regForm.value.Sku_Codigo;
        this.objtempemp.Sku_NumeroSerie=regForm.value.Sku_NumeroSerie;
        this.objtempemp.Sku_Descripcion=regForm.value.Sku_Descripcion;
        this.objtempemp.Sku_Cantidad=regForm.value.Sku_Cantidad;
        this.objtempemp.Sku_Cat_ID=regForm.value.Sku_Cat_ID;
        this.objtempemp.Sku_Sub_Cat_ID=regForm.value.Sku_Sub_Cat_ID;
        this.objtempemp.Sku_Latitud=regForm.value.Sku_Latitud;
        this.objtempemp.Sku_Longitud=regForm.value.Sku_Longitud;
        this.dataservice.AddArticulo(this.objtempemp).subscribe(res=>{
            alert("Articulo agregado correctamente");
            this.TakeHome();
        }
    )
}

    TakeHome(){
        this.nameEvent.emit("ccc");
        this.cb.nativeElement.click();
        this.route.navigateByUrl('');
    }
}
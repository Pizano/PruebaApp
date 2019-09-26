import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/DataService/DataService';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
selector: 'app-articulo',
templateUrl: './articulo.component.html',
styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

constructor(private service: DataService,
    private toastr: ToastrService) { }

ngOnInit() {
    this.resetForm();
}

resetForm(form?: NgForm) {
    if (form != null)
    form.resetForm();
    this.service.formData = {
      Sku_ID: null,
      Sku_Codigo: '',
      Sku_NumeroSerie: '',
      Sku_Descripcion: '',
      Sku_Cantidad: '',
      Sku_Cat_ID: null,
      Sku_Sub_Cat_ID: null,
      Sku_Latitud: '',
      Sku_Longitud: ''
    }
}


onSubmit(form: NgForm) {
    if (form.value.Sku_ID == null)
    this.insertRecord(form);
    else
    this.updateRecord(form);
}

insertRecord(form: NgForm) {
    this.service.postArticulo(form.value).subscribe(res => {
    this.toastr.success('Inserted successfully', 'EMP. Register');
    this.resetForm(form);
    this.service.refreshList();
    });
}

updateRecord(form: NgForm) {
    this.service.putArticulo(form.value).subscribe(res => {
    this.toastr.info('Updated successfully', 'EMP. Register');
    this.resetForm(form);
    this.service.refreshList();
    });

}

}

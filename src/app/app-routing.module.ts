
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{SupplierComponent} from './supplier/supplier.component';
import { SuppliercategoryComponent } from './suppliercategory/suppliercategory.component';


const routes: Routes = [
  {path:'supplier', component:SupplierComponent},
  {path:'suppliercategory', component:SuppliercategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

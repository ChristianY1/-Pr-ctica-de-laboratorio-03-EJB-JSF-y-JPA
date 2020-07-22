import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductolistaComponent} from './components/productolista/productolista.component';


const routes: Routes = [
  {path: 'Producto', component: ProductolistaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

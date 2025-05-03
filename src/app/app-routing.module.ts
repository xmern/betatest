import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCarsComponent } from './all-cars/all-cars.component';

const routes: Routes = [
  {path:'cars', component:AllCarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

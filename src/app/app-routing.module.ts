import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetListComponent } from './get-list/get-list.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  {path:'',component:GetListComponent},
  {path:'insert',component:InsertComponent},
  {path:'insert/:id',component:InsertComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}

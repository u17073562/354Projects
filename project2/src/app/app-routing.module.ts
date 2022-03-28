import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverinfoComponent } from './driverinfo/driverinfo.component';
import { IdIdimageComponent } from './id-idimage/id-idimage.component';


const routes: Routes = [
  {path: 'driverinfo', component:DriverinfoComponent},
{path: 'id-idimage', component:IdIdimageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

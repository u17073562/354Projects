import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { IdimageComponent } from './idimage/idimage.component';

const routes: Routes = [
{path: '', component:DriverInfoComponent},
{path: 'idimage', component:IdimageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

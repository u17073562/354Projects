import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { IdimageComponent } from './idimage/idimage.component';
import { DriverServiceService } from './service/driver-service.service';





@NgModule({
  declarations: [
    AppComponent,
    IdimageComponent,
    DriverInfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [DriverServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

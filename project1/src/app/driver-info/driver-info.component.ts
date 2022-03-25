import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverServiceService } from '../service/driver-service.service';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {

  driverForm :any;
  submitted =false

  constructor(private driverservice:DriverServiceService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
     this.driverForm = this.formBuilder.group({
      fName: ['', [Validators.required]],
      idNo: ['', [Validators.required, this.driverservice.verifyID]],
      otp: ['', [Validators.required]],
      agree: [false, [Validators.requiredTrue]],
    });
  }

  onSubmit() {
    this.submitted=true;
    if (this.driverForm.valid && this.driverForm.formValidation) {
      this.router.navigate(['/idimage']);
    }
      return 'no';
  }

  formValidation(driverForm:FormGroup) {
    Object.keys(driverForm.controls).forEach(field => {
      console.log(field);
      const control = driverForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.formValidation(control);
      }
    });
  }
}



import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverServiceService } from '../service/driver-service.service';

@Component({
  selector: 'app-driver-info',
  templateUrl: './driver-info.component.html',
  styleUrls: ['./driver-info.component.css']
})
export class DriverInfoComponent implements OnInit {

  driverForm! :FormGroup;

  constructor(private driverservice:DriverServiceService,private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
     this.driverForm = this.formBuilder.group({
      fName:[null, [Validators.required]],
      idNo: [null, [Validators.required]],
      otp: [null, [Validators.required]],
    });
  }

  onSubmit() :void {
    if (this.driverForm.valid) {
      this.router.navigate(['/idimage']);
    } else {
      Object.values(this.driverForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: false });
        }
      });
    }
  }
  reset() {
    this.driverForm.reset();
  }
  submitForm(): void {
    if (this.driverForm.valid) {
     this.driverForm.value;
      this.router.navigate(['/idimage']);
    } else {
      Object.values(this.driverForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}



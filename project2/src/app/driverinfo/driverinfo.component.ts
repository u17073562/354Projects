import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DriverserviceService } from '../service/driverservice.service';

@Component({
  selector: 'app-driverinfo',
  templateUrl: './driverinfo.component.html',
  styleUrls: ['./driverinfo.component.css']
})
export class DriverinfoComponent implements OnInit {

  driverForm!: FormGroup;

  submitForm(): void {
    if (this.driverForm.valid) {

     this.router.navigate(['/id-idimage']);
    }
    else {
      Object.values(this.driverForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }

  }

  constructor(private driverservice:DriverserviceService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.driverForm = this.fb.group({
      fName: [null, [Validators.required]],
      idNo: [null, [Validators.required]],
      otp: [null, [Validators.required]],
    });
  }

}

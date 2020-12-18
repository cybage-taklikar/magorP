import { RegistrationService } from './../../service/Registration/registration.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-registerdialog',
  templateUrl: './registerdialog.component.html',
  styleUrls: ['./registerdialog.component.scss']
})
export class RegisterdialogComponent implements OnInit {

  registrationForm!: FormGroup;
  submitted = false;
 
  constructor(private fb: FormBuilder, private _regServ:RegistrationService) { }

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    });
  }
  
  saveRegistration(registrationForm: any): void{
    console.log(registrationForm);
    this._regServ.create(registrationForm).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
        console.log("Form Submitted!");
        alert("You have registered successfully...");
        },
        error => {
          console.log(error);
          
        });
  }
  get saveRegistrationFormControl(): any {
    return this.registrationForm.controls;
  }
}

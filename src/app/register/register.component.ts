import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegisterForm : FormGroup | any;
  data:any;
  submitted = false;
  constructor(private router:Router,private Formbuilder:FormBuilder,private service:SharedService,private ToastService:NgToastService) { }
  //private ToastService:NgToastService

  ngOnInit(): void {
    this.RegisterForm = this.Formbuilder.group({
      username :           new FormControl(''),
      emailId :        new FormControl(''),
      password:        new FormControl(''),
      confirm_password :new FormControl(''),
      
      
      
    })
  }



  CreateUser(){
    console.log(this.RegisterForm.value);
    this.service.CreateUser(this.RegisterForm.value).subscribe(resultdat=>{
    this.data = resultdat;
    this.ToastService.success({detail:"Success Message",summary:"Registration Successfully Created",duration:5000})
    this.RegisterForm.reset();
    this.router.navigate(['/'])
   })
    

  }

  RedirectLogin(){
    
    this.router.navigate(['/'])
    
    }

}

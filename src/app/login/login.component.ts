import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup | any;
loginres:any;
constructor(private router:Router,private service:SharedService,private Formbuilder:FormBuilder,private ToastService:NgToastService) //private ToastService:NgToastService
{ }

  ngOnInit(): void {
    this.loginForm = this.Formbuilder.group({
      username :           new FormControl(''),
      password:        new FormControl(''),
     
      })
  }

  Login(){
    console.log(this.loginForm.value);
    this.service.GetUser(this.loginForm.value).subscribe(resultdat=>{
     if(resultdat){
      this.loginres = resultdat;
      localStorage.setItem("GetUserName",this.loginres.username);
     this.ToastService.success({detail:"Success Message",summary:"Login Successfully Created",duration:5000})
     this.router.navigate(['Dashboard'])

     }
     else{
      this.ToastService.error({detail:"Success Message",summary:"Invalid UserName and Password",duration:5000})
      this.router.navigate(['/'])
     }
      
     })
      

  }

  redirectregister(){
    
  this.router.navigate(['register'])
  
  }

}

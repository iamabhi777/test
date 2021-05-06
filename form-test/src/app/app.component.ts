import { isNgTemplate } from '@angular/compiler';
import { Component,ElementRef, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-test';
  fname:string = '';
  lname:string = '';
  phNo:string = '';
  email:string = '';
  dob:Date;
  pass:String = '';
  city:string = '';
  state:string = '';
  cpass:string = '';
  counter = 0;
  showMe = false;

  @ViewChild('fnameD') fnameD: ElementRef;
  @ViewChild('lnameD') lnameD: ElementRef;
  @ViewChild('phoneD') phoneD: ElementRef;
  @ViewChild('emailD') emailD: ElementRef;
  @ViewChild('datePickerD') datePicker: ElementRef;
  @ViewChild('passD') passD: ElementRef;
  @ViewChild('cityD') cityD: ElementRef;
  @ViewChild('stateD') stateD: ElementRef;
  @ViewChild('cpassD') cpassD: ElementRef;

  @ViewChild('errorName') errorName: ElementRef;
  @ViewChild('errorLname') errorLname: ElementRef;
  @ViewChild('errorNumber') errorNumber: ElementRef;
  @ViewChild('errorEmail') errorEmail: ElementRef;
  @ViewChild('errorDate') errorDate: ElementRef;

  @ViewChild('errorCpass') errorCpass: ElementRef;

  errorMessage:string = '';


  nameR = /^[a-zA-Z ]{2,30}$/;
	emailR = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	phoneR = /^[0-9]*$/;

  flag = {};


  constructor(){



  }

  ngOnInit(){


  }

  captureField(){


      if(this.dob){
        this.errorDate.nativeElement.innerHTML = '';
      }else{
        this.errorDate.nativeElement.innerHTML = 'Please enter a date';
      }

      if(this.fname!='' && this.nameR.test(this.fname)){
        this.flag['nameFlag'] = true;
        this.errorName.nativeElement.innerHTML = '';
      }else{
        if(this.fname==''){
          this.errorName.nativeElement.innerHTML = 'Please Enter a name';
        }else{
          this.errorName.nativeElement.innerHTML = 'please enter a valid name';
        }

      }

      if(this.email!='' && this.emailR.test(this.email)){
        this.flag['emailFlag'] = true;
        this.errorEmail.nativeElement.innerHTML = '';
      }else{
        if(this.email==''){
          this.errorEmail.nativeElement.innerHTML = 'please enter an email';
        }else{
          this.errorEmail.nativeElement.innerHTML = 'please enter a valid email';
        }

      }

      if(this.lname!='' && this.nameR.test(this.lname)){
        this.flag['lnameFlag'] = true;
        this.errorLname.nativeElement.innerHTML = '';
      }else{
        if(this.lname==''){
          this.errorLname.nativeElement.innerHTML = 'Please enter a last name';
        }else{
          this.errorLname.nativeElement.innerHTML = 'please enter a valid last name';
        }

      }

      if(this.phNo!='' && this.phoneR.test(this.phNo)){
        this.flag['phoneFlag'] = true;
        this.errorNumber.nativeElement.innerHTML = '';
      }else{
        if(this.phNo == ''){
          this.errorNumber.nativeElement.innerHTML = 'Please enter a number';
        }else{
          this.errorNumber.nativeElement.innerHTML = 'please enter a valid number';
        }

      }

      if(this.pass!='' && this.cpass!='' && this.pass == this.cpass){
        this.flag['passFlag'] = true;
        this.errorCpass.nativeElement.innerHTML = '';
      }else{
        this.errorCpass.nativeElement.innerHTML = 'passwords dont match';
      }


      if(this.flag['nameFlag'] && this.flag['lnameFlag'] && this.flag['emailFlag'] && this.flag['phoneFlag'] && this.flag['passFlag']){
        console.log("done");
        this.showMe = true;

      }


  }

  closeMessage(){
    this.showMe  = false;
    location.reload();
  }


  checkDateField(){
    if(this.dob){
      this.errorDate.nativeElement.innerHTML = '';
    }
  }







}

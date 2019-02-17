import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form101.component.html',
  styleUrls: ['./form101.component.scss']
})
export class Form101Component implements OnInit {

  formGroup: FormGroup;
  constructor(
    private formBulid: FormBuilder
  ) {
    
   }

  ngOnInit() {
    this.formGroup = this.formBulid.group({
      firstName: [''],
      lastName: [''],
      Age:[22],
      eMail: ['']
    })
  }
  onSubmit(form: FormGroup){
    const {firstName,lastName,Age,eMail} = form.value;
    const user =  new User(firstName, lastName,Age,eMail);
    console.log(user);
  }

}

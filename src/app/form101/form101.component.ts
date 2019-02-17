import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
      lastName: ['']
    })
  }
  onSubmit(form: FormGroup){
    console.log(form);
  }

}

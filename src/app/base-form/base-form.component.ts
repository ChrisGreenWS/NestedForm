import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-base-form',
  templateUrl: './base-form.component.html',
  styleUrls: ['./base-form.component.css']
})
export class BaseFormComponent implements OnInit {
  myForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  submit() {

    this.submitted = true;
    
    if (this.myForm.invalid) {
      return;
    }

    this.success = true;
    console.log(this.myForm.get('name').errors);
  }

}

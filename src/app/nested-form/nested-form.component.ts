import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})
export class NestedFormComponent implements OnInit {
  @Input() form: FormGroup;

  get isValid() { return this.form.controls["myNumber"].valid; }
  constructor() { }

  ngOnInit() {
    let myNumber = new FormControl(null, Validators.required)
    this.form.addControl('myNumber', myNumber);

  }

}

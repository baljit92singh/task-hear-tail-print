import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  form: FormGroup;
  selectedToss = [];
  maxLength = 0;
  constructor(private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      toss: ['', Validators.required],
    });
  }

  get f() { return this.form.controls; }
  errorMsg;
  onSubmit() {
    if (this.form.invalid) {
      this.errorMsg = "Please select one value"
    }
    if (this.form.controls['toss'].value) {
      this.errorMsg = ""
      var value = this.form.controls['toss'].value;
      if (this.selectedToss[this.selectedToss.length - 1] != undefined && this.selectedToss[this.selectedToss.length - 1][0] === value) {
        this.selectedToss[this.selectedToss.length - 1].push(value);
      } else {
        this.selectedToss.push([value])
      }
      var l = this.selectedToss[this.selectedToss.length - 1].length;
      if (l > this.maxLength) {
        this.maxLength = l;
      }
      console.log(this.selectedToss);
    }
  }

  counter() {
    console.log(this.maxLength)
    return new Array(this.maxLength);
  }
}

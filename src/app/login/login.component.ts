import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../common/common-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false; 

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    }); 
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    this.loading = true;
    console.log(this.form.value)
    this.commonService.login(this.form.value).subscribe(res => {
      if (res) {
        localStorage.setItem('token', JSON.stringify(res.token))
        this.router.navigate(['/dashboard']);
        this.loading = false;
      }
    })
  }
}
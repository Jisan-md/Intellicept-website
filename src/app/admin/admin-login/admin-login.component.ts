import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {

  loginemail: any;
  loginpassword: any;
  submitted = false;
  form: any;
  response: any;
  role: any;

  constructor(
    public router: Router,
    public http: HttpClient,
    public fb: FormBuilder,
    public commonService: CommonService
  ) {}

  ngOnInit(): void {
    document.body.scrollTop = 0;
    this.role = 'admin';
  }

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    role: new FormControl('Admin')
  });

  onSubmitLogin() {
    console.log("Login form data:", this.loginForm.value);
    if (this.loginForm.valid) {
      this.commonService.adminLogin(this.loginForm.value).subscribe((res: any) => {
        console.log("Login success response:", res);

        if (res.status === 'success') {
          this.commonService.setLoginStatus(true);  
          this.router.navigate(['/admin-career']);      
          this.commonService.showToast('success', 'Login Successfully!');
        } else {
          this.commonService.showToast('error', 'Login failed');
        }
      }, error => {
        console.log("Error during login:", error);
        this.commonService.showToast('error', 'Login error occurred');
      });
    } else {
      this.commonService.showToast('error', 'Form is invalid');
    }
  }

  showPassword(event: any) {
    let passwordField = document.querySelector('#Password');
    if (passwordField) {
      const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordField.setAttribute('type', type);
    }
  }
}

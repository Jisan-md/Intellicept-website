import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import {ToastrService} from 'ngx-toastr'



@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  contactForm!: FormGroup;
  isLoading: boolean = true;

  constructor(private fb: FormBuilder, private commonService: CommonService, private toastr: ToastrService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      message: ['']
    });
  }
 
  


  onSubmit() {
    if (this.contactForm.valid) {
      this.commonService.contactUsForm(this.contactForm.value).subscribe((res: any) => {
        this.commonService.showToast('success', "Form submission successful");
        this.contactForm.reset();
      }, (err: any) => {
        this.commonService.showToast('error', "Form submission failed");
        // this.contactForm.markAsPristine();
        // this.contactForm.markAsUntouched();
      });
    } else {
      this.commonService.showToast('error', "Please correct the errors in the form");
    }
  }
}

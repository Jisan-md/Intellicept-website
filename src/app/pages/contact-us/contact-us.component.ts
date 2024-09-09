import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'] // Corrected to styleUrls
})
export class ContactUsComponent {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private commonService: CommonService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], 
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.commonService.contactUsForm(this.contactForm.value).subscribe((res: any) => {
        this.commonService.showToast('success', "Form submission successful");
        this.contactForm.reset();
        this.contactForm.markAsPristine();
        this.contactForm.markAsUntouched();
      }, (err: any) => {
        this.commonService.showToast('error', "Form submission failed");
      });
    } else {
      this.commonService.showToast('error', "Please correct the errors in the form");
    }
  }
}

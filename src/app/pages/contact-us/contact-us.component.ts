import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../services/common.service';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {

  contactForm!: FormGroup;

  constructor(private fb: FormBuilder, private commonService: CommonService) {
   
  }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
   this.commonService.contactUsForm(this.contactForm.value).subscribe((res: any) => {
      // console.log('Form submitted successfully:', res);
      this.commonService.showToast('success', "Form submission successful");
      this.contactForm.reset();
      this.contactForm.markAsPristine();
      this.contactForm.markAsUntouched();
      
    }, (err: any) => {
      // console.error('Form submission failed:', err);
      this.commonService.showToast('error', "Form submission failed");
    });
  }
}
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
      message: ['']
    });
  }

  onSubmit() {
   this.commonService.contactUsForm(this.contactForm.value).subscribe((res: any) => {
      console.log('Form submitted successfully:', res);
    }, (err: any) => {
      console.error('Form submission failed:', err);
    });
  }
}
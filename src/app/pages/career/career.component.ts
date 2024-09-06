import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ CommonService } from '../../services/common.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {

  applyForm!: FormGroup;
  errorMessage: string = '';
  file: File | null = null;

  constructor(private fb: FormBuilder, private commonService: CommonService) {
   
  }

  ngOnInit() {
    this.applyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      desc: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.file = event.target.files[0];
    }
  }

  onSubmit() {
    if (this.applyForm.valid) {
      const formData = new FormData();
      formData.append('name', this.applyForm.get('name')?.value);
      formData.append('email', this.applyForm.get('email')?.value);
      formData.append('phone', this.applyForm.get('phone')?.value);
      formData.append('desc', this.applyForm.get('desc')?.value);
  
      if (this.file) {
        formData.append('file', this.file);
      }
        console.log('Form Data:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      this.commonService.careerForm(formData).subscribe((res: any) => {
        // console.log('Form submitted successfully:', res);
        this.commonService.showToast('success', "Form submission successful");
        this.applyForm.reset();
        this.applyForm.markAsPristine();
        this.applyForm.markAsUntouched();

      });

    } else {
      // this.errorMessage = 'Please fill in all required fields.';
      this.commonService.showToast('error', "Form submission failed.");
    }
  }
  
}

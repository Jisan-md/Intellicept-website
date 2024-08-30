import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent {

  applyForm: FormGroup;
  errorMessage: string = '';
  file: File | null = null;

  constructor(private fb: FormBuilder) {
    this.applyForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      desc: [''],
      file: [null]
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
        formData.append('fileToUpload', this.file);
      }

      console.log('Form submitted:', formData);

      // Call your backend API here with formData
      // Example: this.http.post('your-backend-endpoint', formData).subscribe(...)

    } else {
      this.errorMessage = 'Please fill in all required fields.';
    }
  }
}

// platform/src/app/components/auth/join-us/join-us.component.ts
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { JoinUsService } from '../../../services/join-us.service';

@Component({
  selector: 'app-joinus',
  templateUrl: './join-us.component.html',
  styleUrls: ['./join-us.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class JoinusComponent {
  formData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    companyName: ''
  };

  formSubmitted = false;

  constructor(private joinUsService: JoinUsService) { }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;

    if (!form.valid) {
      return;
    }

    if (!this.isValidPhoneNumber(this.formData.phoneNumber)) {
      alert('Please enter a valid phone number with country code.');
      return;
    }

    this.joinUsService.submitForm(this.formData).subscribe(
      response => {
        console.log('Form submitted successfully', response);
        alert('We will reach you soon');
        this.formSubmitted = false;
        form.resetForm(); 
      },
      error => {
        console.error('Error submitting form', error);
      }
    );
  }

  isValidPhoneNumber(phoneNumber: string): boolean {
    // Regex for phone number with country code (e.g., +1234567890)
    const phoneRegex = /^\+\d{1,3}\d{9,}$/;
    return phoneRegex.test(phoneNumber);
  }
}

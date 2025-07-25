import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
formData = {
    name: '',
    email: '',
    message: ''
  };

  responseMessage = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    this.http.post<any>('http://localhost:3000/contact', this.formData)
      .subscribe({
        next: () => {
          this.responseMessage = 'Your message has been sent!';
          this.formData = { name: '', email: '', message: '' };
        },
        error: () => {
          this.responseMessage = 'Something went wrong. Please try again later.';
        }
      });
  }
}

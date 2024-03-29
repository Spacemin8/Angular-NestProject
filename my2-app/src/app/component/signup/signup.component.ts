import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Auth.service';

interface User {
  username: string;
  email: string;
  password: string;
}
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  Ico1 = '../../../assets/image/Vector.png';
  passkey = '../../../assets/image/Icon4.svg';
  Ico2 = '../../../assets/image/metamask-icon logo.png';
  Ico3 = '../../../assets/image/twitter logo.png';
  Ico4 = '../../../assets/image/Group.png';
  mail = '../../../assets/image/Icon2.svg';
  phone = '../../../assets/image/Icon3.svg';
  user = '../../../assets/image/Icon1.svg';

  username: string = '';
  email = '';
  password: string = '';

  onSubmit() {
    console.log('Username:', this.username);
  }
  constructor(private router: Router, private signupservice: AuthService) {}
  handlelogin(): void {
    this.router.navigate(['/login']);
  }
  sendData(): void {
    this.signupservice
      .signup({
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        (response) => {
          console.log('Data sent successfully', response);
          this.handlelogin();
        },
        (error) => {
          console.error('Error sending data', error);
        }
      );
  }
}

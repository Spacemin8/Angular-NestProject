import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  Ico1 = '../../../assets/image/Vector.png';
  passkey = '../../../assets/image/Icon4.svg';
  Ico2 = '../../../assets/image/metamask-icon logo.png';
  Ico3 = '../../../assets/image/twitter logo.png';
  Ico4 = '../../../assets/image/Group.png';
  mail = '../../../assets/image/Icon2.svg';
  email = '';
  password: string = '';
  constructor(private router: Router, private loginService: AuthService) {}

  onSubmit() {
    console.log('email:', this.email);
  }
  handlesignup(): void {
    this.router.navigate(['/signup']);
  }
  handledashboard(): void {
    this.router.navigate(['/dashboard']);
  }
  login(): void {
    console.log('here');
    this.loginService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response) => {
          const data = response; // Assign the response directly to the data variable
          // Handle login success
          const accesstoken = data.accesstoken;
          const refreshtoken = data.refreshtoken;
          // Store the token in local storage or session storage
          localStorage.setItem('accesstoken', accesstoken);
          localStorage.setItem('refreshtoken', refreshtoken);
          console.log('Token received and stored:', accesstoken);
          console.log('Login successful:', data);
          // alert(data.message);
          this.handledashboard();
        },
        (error) => {
          // Handle login failure
          console.error('Login failed:', error);
          alert(error.message);
        }
      );
  }
}

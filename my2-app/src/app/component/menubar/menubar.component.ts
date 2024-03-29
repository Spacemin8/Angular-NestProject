import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss',
})
export class MenubarComponent {
  constructor(private router: Router) {}
  handlelogin(): void {
    this.router.navigate(['/login']);
  }
  handlesignup(): void {
    this.router.navigate(['/signup']);
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-focusbar',
  templateUrl: './focusbar.component.html',
  styleUrl: './focusbar.component.scss',
})
export class FocusbarComponent {
  Homepage = '../../assets/image/Homepage.png';
  FocusPoint = '../../assets/image/FocusPoint.png';
  Rewards = '../../assets/image/Rewards.png';
  Profile = '../../assets/image/Profile.png';
  Mystatistic = '../../assets/image/My statistic.png';
  Pricing = '../../assets/image/Pricing.png';
  Logout = '../../assets/image/Logout.png';
  butmenu = '../../assets/image/menu-04.png';
  constructor(private router: Router) {}
  handleLogout(): void {
    this.router.navigate(['/signup']);
  }
}

import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { DashboardpageComponent } from './scene/dashboardpage/dashboardpage.component';
import { MenubarComponent } from './component/menubar/menubar.component';
import { ButtonComponent } from './component/button/button.component';
import { LogoComponent } from './component/logo/logo.component';
import { LoginpageComponent } from './scene/loginpage/loginpage.component';
import { SignuppageComponent } from './scene/signuppage/signuppage.component';
import { FocusbarComponent } from './component/focusbar/focusbar.component';
import { FocusfooterComponent } from './component/focusfooter/focusfooter.component';
import { FocuspointComponent } from './component/focuspoint/focuspoint.component';
import { FocusComponent } from './component/focus/focus.component';
import { InputComponent } from './component/input/input.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateModalComponent } from './component/create-modal/create-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardpageComponent,
    MenubarComponent,
    ButtonComponent,
    LogoComponent,
    LoginpageComponent,
    SignuppageComponent,
    FocusbarComponent,
    FocusfooterComponent,
    FocuspointComponent,
    FocusComponent,
    InputComponent,
    CreateModalComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}

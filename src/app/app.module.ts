import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Router/header/header.component';
import { ProfileComponent } from './Router/profile/profile.component';
import { UserDetailsComponent } from './Router/user-details/user-details.component';
import { ErrorComponent } from './Router/error/error.component';
import { RegistrationComponent } from './Router/registration/registration.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: RegistrationComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'profile/:id', component: UserDetailsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    UserDetailsComponent,
    ErrorComponent,
    RegistrationComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

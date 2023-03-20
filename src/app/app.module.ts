import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { StudentsComponent } from './components/students/students.component';
import { StudentsDetailsComponent } from './components/students-details/students-details.component';
import { AddNewStudentComponent } from './components/add-new-student/add-new-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { ErrorComponent } from './components/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    StudentsComponent,
    StudentsDetailsComponent,
    AddNewStudentComponent,
    UpdateStudentComponent,
    ErrorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

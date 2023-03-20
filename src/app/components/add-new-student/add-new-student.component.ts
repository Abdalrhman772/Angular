import { Component } from '@angular/core';
import { StudentsService } from 'src/app/services/students-service.service';

@Component({
  selector: 'app-add-new-student',
  templateUrl: './add-new-student.component.html',
  styleUrls: ['./add-new-student.component.css'],
})
export class AddNewStudentComponent {
  constructor(public myService: StudentsService) {}

  Add(name: any, age: any, track: any) {
    let newStudent = { name, age, track };
    this.myService.AddStudent(newStudent).subscribe();
  }
}

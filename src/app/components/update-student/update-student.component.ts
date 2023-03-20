import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students-service.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css'],
})
export class UpdateStudentComponent {
  Id = 0;
  oldStudent: any;
  constructor(public myService: StudentsService, myActivate: ActivatedRoute) {
    this.Id = myActivate.snapshot.params['id'];

    this.oldStudent = myService.GetStudentById(this.Id).subscribe({
      next: (data) => {
        this.oldStudent = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
    console.log(this.oldStudent);
  }

  edit(name: any, age: any, track: any) {
    let updatedStudent = { name, age, track };
    this.myService.UpdateStudent(this.Id, updatedStudent).subscribe({
      next: () => {},
      error: (err) => {
        console.log(err);
      },
    });
  }
}

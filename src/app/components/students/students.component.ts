import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students-service.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit {
  constructor(public myService: StudentsService) {}

  students: any;
  ngOnInit(): void {
    console.log(this.myService.GetAllStudents());

    this.myService.GetAllStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  
  delete(ID: any) {
    this.myService.DeleteStudent(ID).subscribe({
      next: () => {
        this.ngOnInit();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

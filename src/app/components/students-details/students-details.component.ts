import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/services/students-service.service';

@Component({
  selector: 'app-students-details',
  templateUrl: './students-details.component.html',
  styleUrls: ['./students-details.component.css'],
})
export class StudentsDetailsComponent implements OnInit {
  ID = 0;
  student: any;

  constructor(myActivate: ActivatedRoute, public myService: StudentsService) {
    this.ID = myActivate.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.myService.GetStudentById(this.ID).subscribe({
      next: (data) => {
        this.student = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

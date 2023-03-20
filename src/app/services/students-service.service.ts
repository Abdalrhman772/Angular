import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private myClient: HttpClient) {}

  private base_url = ' http://localhost:3000/students/';

  GetAllStudents() {
    return this.myClient.get(this.base_url);
  }

  GetStudentById(id: any) {
    return this.myClient.get(this.base_url + id);
  }

  AddStudent(student: any) {
    return this.myClient.post(this.base_url, student);
  }

  UpdateStudent(id: any, student: any) {
    return this.myClient.put(this.base_url + id, student);
  }

  DeleteStudent(id: any) {
    return this.myClient.delete(this.base_url + id);
  }
}

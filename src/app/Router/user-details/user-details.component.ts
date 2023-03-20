import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [],
})
export class UserDetailsComponent {
  id = 0;
  constructor(myActivated: ActivatedRoute) {
    this.id = myActivated.snapshot.params['id'];
  }
}

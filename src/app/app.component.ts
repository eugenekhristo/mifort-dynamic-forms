import { Component, OnInit } from '@angular/core';
import { UserInterface, User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userInterface = UserInterface;
  user: User;

  private _formValue = null;

  get formValue() {
    return this._formValue;
  }

  set formValue(value: object) {
    this._formValue = value;
  }

  ngOnInit(): void {
    this.user = new User('Serj', 51);
  }

  onValueChanges(formValue: object) {
    this.formValue = formValue;
  }

  onFormSubmitted(user: User) {
    console.log('%cForm submitted:', 'color: red; font-size: 40px;', user);
  }
}

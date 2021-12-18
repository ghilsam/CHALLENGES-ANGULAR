import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  User = {
    name: 'Doe',
    firstName: 'John',
    age: 25,
    quote: 'two beer or not to beer',
    photo: 'https://randomuser.me/api/portraits/lego/6.jpg',
  };

  constructor() { }

  ngOnInit(): void {
  }

  isShown: boolean = true;
  showHideAge() {
    this.isShown = !this.isShown;
  }

}

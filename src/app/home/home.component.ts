import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
users=[
  {
    id:'1',
    name:'Ram',
    age:11,
    email:'ram@test.com'
  },
    {
    id:'2',
    name:'Rohan',
    age:13,
    email:'Rohan@test.com'
  },
    {
    id:'3',
    name:'Sam',
    age:15,
    email:'Sam@test.com'
  },
    {
    id:'4',
    name:'Ram',
    age:16,
    email:'ram@test.com'
  },
    {
    id:'4',
    name:'John',
    age:19,
    email:'John@test.com'
  },
]
}

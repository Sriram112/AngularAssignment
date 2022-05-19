import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imageSrc='assets/images/images.jpg'
  imageAlt='Logo'

  constructor() { }

  ngOnInit(): void {
  }

}

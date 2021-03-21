import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [
    {path: '../../assets/img1.jpg'},
    {path: '../../assets/img2.jpg'},
    {path: '../../assets/img3.png'}

    
]

  ngOnInit(): void {
  }

}

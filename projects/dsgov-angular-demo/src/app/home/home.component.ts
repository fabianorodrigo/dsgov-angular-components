import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  alerta() {
    alert('au au ');
  }
}

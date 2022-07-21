import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  public name = "rey"
  public arrayName = ["Khoa", "Hoang", "Nhung"]

  public resetName(): void {
    this.name = "";
  }

  constructor() { }

  ngOnInit(): void {
  }

}

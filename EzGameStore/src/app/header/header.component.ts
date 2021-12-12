import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  imageMap: any[];


  constructor() { 
    this.imageMap= [ 
      "./assets/Logo1500px.png 720w"
    ];
  }

    ngOnInit(): void {
    }

}

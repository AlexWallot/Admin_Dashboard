import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defaults',
  templateUrl: './defaults.component.html',
  styleUrls: ['./defaults.component.scss']
})
export class DefaultsComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit(): void {
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen; 
  }

}

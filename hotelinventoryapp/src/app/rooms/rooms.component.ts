import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hniv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Ish Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}

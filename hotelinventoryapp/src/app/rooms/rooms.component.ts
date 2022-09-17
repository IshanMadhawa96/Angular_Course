import { Component, OnInit } from '@angular/core';
import { Room } from './rooms';

@Component({
  selector: 'hniv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Ish Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms:Room={
    totalRoom:100,
    availableRooms:10,
    bookedRooms:10
  };
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
/*
Property binding in Angular helps you
set values for properties of HTML elements or directives.
Use property binding to do things such as toggle button functionality,
set paths programmatically, and share values between components.
*/

/**
 * Event binding lets you listen for and respond to
  user actions such as keystrokes, mouse movements, clicks, and touches.
 */

  /*
  Interpolation refers to embedding expressions into marked up text.
  By default, interpolation uses the double curly braces {{ and }} as delimiters.
  */

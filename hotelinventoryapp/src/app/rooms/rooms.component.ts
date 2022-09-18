import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

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

  roomList :RoomList[] =[
    {
    roomNumber:1,
    roomType : 'Deluxe Room',
    amenities: 'AC,Free wifi,TV,Bathroom',
    price:500,
    photo  : "",
    checkingTime : new Date ('11-nov-2020'),
    checkingoutTime: new Date ('11-nov-2020')
  },
  {
    roomNumber:2,
    roomType : 'Deluxe Room',
    amenities: 'AC,Free wifi,TV,Bathroom',
    price:1500,
    photo  : "",
    checkingTime : new Date ('11-nov-2020'),
    checkingoutTime: new Date ('11-nov-2020')
  },
  {
    roomNumber:3,
    roomType : 'Private Room',
    amenities: 'AC,Free wifi,TV,Bathroom',
    price:1500,
    photo  : "",
    checkingTime : new Date ('11-nov-2020'),
    checkingoutTime: new Date ('11-nov-2020')
  },

]
  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

}
/**
 * Directives are use to change behavior and appearance of DOM element
 * Directives can implement lifecycle hooks
 * directive can have not template
 * two types of directives
    Structural Directives
    Attribute Directives

    Attribute directives modify the appearance or behavior of DOM elements.
     Structural directives add or remove elements from the DOM.
     Structural directives are one of the most powerful features of Angular,
     and yet they're frequently misunderstood.
 */
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

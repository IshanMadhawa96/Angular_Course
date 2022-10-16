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

  roomList:RoomList[]=[];


  constructor() { }

  ngOnInit(): void {
    this. roomList  =[
      {
      roomNumber:1,
      roomType : 'Deluxe Room',
      amenities: 'AC,Free wifi,TV,Bathroom',
      price:500,
      photo  : "",
      checkingTime : new Date ('11-nov-2020'),
      checkingoutTime: new Date ('11-nov-2020'),
      rating:4.54645646
    },
    {
      roomNumber:2,
      roomType : 'Deluxe Room',
      amenities: 'AC,Free wifi,TV,Bathroom',
      price:1500,
      photo  : "",
      checkingTime : new Date ('11-nov-2020'),
      checkingoutTime: new Date ('11-nov-2020'),
      rating:3.54564645
    },
    {
      roomNumber:3,
      roomType : 'Private Room',
      amenities: 'AC,Free wifi,TV,Bathroom',
      price:1500,
      photo  : "",
      checkingTime : new Date ('11-nov-2020'),
      checkingoutTime: new Date ('11-nov-2020'),
      rating:3.5456456
    },

  ]

  }

  toggle(){
    this.hideRooms = !this.hideRooms;
  }

  slelectRoom(room:RoomList){
    console.log(room);
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

 /*

  pipes are used for data transformation
  pipe s don't change actiula object

  Built-in Pipes
  DatePipe
  UpperCasePipe
  LowerCasePipe
  CurrencyPipe
  PresentPipe
  JasonPipe
  SlicePipe
  AsyncPipe

  Use pipes to transform strings, currency amounts, dates, and other data for display.
  Pipes are simple functions to use in template expressions to accept an input value and return
  a transformed value. Pipes are useful because you can use them throughout your application,
  while only declaring each pipe once. For example, you would use a pipe to show a date as April 15,
   1988 rather than the raw string format.

 */



/*

Lifecycle hooks
A component instance has a lifecycle that starts when Angular instantiates the component class
and renders the component view along with its child views. The lifecycle continues with change detection,
as Angular checks to see when data-bound properties change,
and updates both the view and the component instance as needed.
The lifecycle ends when Angular destroys the component instance and
removes its rendered template from the DOM.
Directives have a similar lifecycle, as Angular creates,
updates, and destroys instances in the course of execution.

Your application can use lifecycle hook methods to tap into key events in the
lifecycle of a component or directive to initialize new instances,
initiate change detection when needed, respond to updates during change detection,
and clean up before deletion of instances.
*/

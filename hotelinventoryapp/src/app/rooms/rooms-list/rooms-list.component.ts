import { RoomList } from './../rooms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'hniv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  @Input() rooms:RoomList[]=[]
  @Output() roomSelected = new EventEmitter<RoomList>();
  constructor() { }

  ngOnInit(): void {
  }
  slelectRoom(room:RoomList){
    this.roomSelected.emit(room);
  };
}

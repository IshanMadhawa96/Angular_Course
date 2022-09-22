export interface Room{
  totalRoom:number;
  availableRooms:number;
  bookedRooms:number;
}
export interface RoomList{
  roomNumber:number;
  roomType:string;
  amenities:string;
  price:number;
  photo:string;
  checkingTime:Date;
  checkingoutTime:Date;
  rating:number;
}

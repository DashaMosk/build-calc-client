import {Room} from './room';
export class Facility {
  rooms: Room[] = [];

  constructor(
    public id: number,
    public name: string,
    public description: string
  ) { }


  addNewRoom() {
    this.rooms.push(new Room(0, '', 0, null));
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  removeRoom(index: number) {
    this.rooms = this.rooms.filter((e, i) => i !== index);
  }
}

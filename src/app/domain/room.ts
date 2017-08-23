import {Wall} from './wall';
import {Facility} from './facility';

export class Room {
  walls: Wall[] = [];

  constructor(
    public id: number,
    public name: string,
    public height: number,
    public facility: Facility
  ) { }

  addNewWall() {
    this.walls.push(new Wall(0, '', 0, 0, null));
  }

  addRoom(wall) {
    this.walls.push(wall);
  }

  removeRoom(index: number) {
    this.walls = this.walls.filter((e, i) => i !== index);
  }
}

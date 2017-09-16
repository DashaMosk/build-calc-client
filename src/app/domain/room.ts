import {Facility} from './facility';

export class Room {
  constructor(
    public id: number,
    public name: string,
    public height: number,
    public facility: Facility
  ) { }
}

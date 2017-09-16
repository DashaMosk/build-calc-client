import {Room} from './room';

export class Wall {
  constructor(
    public id: number,
    public name: string,
    public height: number,
    public width: number,
    public room: Room,
    public forFloorCalculation: boolean
  ) { }
}

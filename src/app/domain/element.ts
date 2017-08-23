import {Wall} from './wall';

export class Element {
  constructor(
    public id: number,
    public type: string,
    public height: number,
    public width: number,
    public wall: Wall
  ) { }
}

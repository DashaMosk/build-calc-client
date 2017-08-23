import {Stuff} from './stuff';

export class FacilityEquipment {
  constructor(
    public id: number,
    public stuff: Stuff,
    public type: string,
    public facilityID: number,
    public fType: string
  ) { }
}

export class Result {
  constructor(
    public facilityId: number,
    public roomId: number,
    public stuffId: number,
    public stuffName: string,
    public isClean: boolean,
    public consumption: number,
    public measureName: string,
    public packConsumption: number,
    public packName: string,
    public m2: number,
    public calcConsumption: number,
    public calcPackConsumption: number
  ) { }

}

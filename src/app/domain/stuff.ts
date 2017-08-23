import {Package} from './package';

export interface Stuff {
  id: number;
  name: string;
  packing: Package;
  consumption: number;
  isClean: boolean;
  price: number;

  // used only on front-end
  type: string;
}

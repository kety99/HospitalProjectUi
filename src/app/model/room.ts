import {Ward} from "./ward";
import {HospitalObject} from "./hospital-object";

export class Room extends HospitalObject{
  roomtype: string;
  ocupied: boolean;
  number: number;
  ward: Ward;
}

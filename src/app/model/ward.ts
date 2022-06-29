import {Doctor} from "./doctor";
import {Room} from "./room";
import {Employee} from "./employee";
import {HospitalObject} from "./hospital-object";

export class Ward extends HospitalObject{
  wardtype: string;
  doctors: Array<Doctor>;
  rooms: Array<Room>;
  empolyees: Array<Employee>;
  leader: Doctor;
}

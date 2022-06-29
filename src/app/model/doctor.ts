import {Patient} from "./patient";
import {Ward} from "./ward";
import {User} from "./user";

export class Doctor extends User{
  salary: number;
  specialty: string;
  ward: Ward;
  patients: Array<Patient>

}

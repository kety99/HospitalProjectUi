import {Ward} from "./ward";
import {User} from "./user";

export class Employee extends User{
  employeeType: string;
  salary: number;
  ward: Ward;
}

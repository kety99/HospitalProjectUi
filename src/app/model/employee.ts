import {Ward} from "./ward";
import {User} from "./user";

export class Employee extends User{
  employeetype: string;
  salary: number;
  ward: Ward;
}

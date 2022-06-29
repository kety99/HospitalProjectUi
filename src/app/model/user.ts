import {Person} from "./person";

export class User extends Person{
  username: string;
  password: string;
  accountValid: boolean;
  userRole: string;
}

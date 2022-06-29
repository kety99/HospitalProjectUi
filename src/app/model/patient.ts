import {Person} from "./person";
import {Ward} from "./ward";
import {User} from "./user";

export class Patient extends User{
  illnessInfo:string;
  treatmentInfo: string;
  ward: Ward;


}

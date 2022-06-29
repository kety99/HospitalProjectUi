import {Component, OnInit} from "@angular/core";
import {Patient} from "../model/patient";
import {User} from "../model/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  user: User = new User();

}

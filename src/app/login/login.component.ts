import {Component} from "@angular/core";
import {AuthService} from "../common/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private authService: AuthService) {
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(res => {
      console.log(res);
    });
  }
}

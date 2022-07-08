import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../common/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string;
  password: string;

  constructor(private authService: AuthService, private router: Router) {
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(res => {
      this.authService.token = res.token;
      this.authService.userDetails().subscribe(userDetails => {
        this.authService.user = userDetails;
        this.router.navigate(['/registration']);
      });
    }, err => {
      if (err['status'] === 401) {
        console.log(err);
      }
    });
  }
}


import {Component, OnInit} from "@angular/core";
import {AuthService} from "../common/auth.service";
import {Doctor} from "../model/doctor";
import {Employee} from "../model/employee";
import {Patient} from "../model/patient";
import {User} from "../model/user";
import {Ward} from "../model/ward";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  user: User | Doctor | Employee | Patient = new User();

  constructor(private authService: AuthService, private router: Router) {

  }

  register() {
    console.log(this.user);

    let success = (res) => {
      if(this.user.userRole === 'Patient'){
        this.router.navigate(['/patients']);
      } else if(this.user.userRole === 'Employee'){
        this.router.navigate(['/employees']);
      } else if(this.user.userRole === 'Doctor'){
        this.router.navigate(['/doctors']);
      }
    };
    let error = (err) => {
    };

    if (this.user.userRole === 'Doctor') {
      this.authService.registerDoctor(this.user).subscribe({next: success, error: error});
    } else if (this.user.userRole === 'Employee') {
      this.authService.registerEmployee(this.user).subscribe({next: success, error: error});
    } else if (this.user.userRole === 'Patient') {
      this.authService.registerPatient(this.user).subscribe({next: success, error: error});
    }
  }

  onRoleChange(event) {
    if (event === 'Doctor') {
      this.user = new Doctor();
    } else if (event === 'Patient') {
      this.user = new Patient();
    } else if (event === 'Employee') {
      this.user = new Employee();
    }
    this.user.userRole = event;
  }

}

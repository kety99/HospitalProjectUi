import {Component, OnInit} from "@angular/core";
import {Doctor} from "../model/doctor";
import {PatientService} from "../patient/patient.service";
import {DoctorsService} from "./doctors.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  doctors: Array<Doctor> = [];
  columns: Array<string> = ['firstName', 'lastName'];

  constructor(private doctorsService: DoctorsService, private router: Router) { }

  ngOnInit(): void {
    this.doctorsService.getAll().subscribe({
      next: (res) => {
        this.doctors = res;
      }, error: (err) => {

      }
    })
  }

  details(doctors) {
    this.router.navigate(['/doctors/details/' + doctors.id]);
  }

}

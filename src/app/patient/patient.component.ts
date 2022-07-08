import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Patient } from "../model/patient";
import { PatientService } from "./patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Array<Patient> = [];
  columns: Array<string> = ['personalNumber', 'firstName', 'middleName', 'lastName'];

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe({
      next: (res) => {
        this.patients = res;
      }, error: (err) => {

      }
    })
  }

  details(patient) {
    this.router.navigate(['/patients/details/' + patient.id]);
  }

}

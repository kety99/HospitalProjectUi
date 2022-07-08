import { Component, OnInit } from "@angular/core";
import { Patient } from "../model/patient";
import { PatientService } from "./patient.service";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Array<Patient> = [];
  columns: Array<string> = ['firstname', 'lastname'];

  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.patientService.getAll().subscribe({
      next: (res) => {
        this.patients = res;
      }, error: (err) => {

      }
    })
  }

}

import {Component, OnInit} from "@angular/core";
import {Patient} from "../model/patient";

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: Array<Patient> = [];
  columns: Array<string> = ['firstName', 'lastName'];

  ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      let patient = new Patient();
      patient.firstName = 'patient ' + i;
      patient.lastName = 'Petrov ' + i;
      this.patients.push(patient);
    }
  }

}

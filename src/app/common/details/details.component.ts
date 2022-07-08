import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Doctor } from "src/app/model/doctor";
import { Employee } from "src/app/model/employee";
import { PatientService } from "src/app/patient/patient.service";
import { Patient } from "../../model/patient";

@Component({
  selector: 'app-patient-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  entity: Doctor | Patient | Employee;

  constructor(private route: ActivatedRoute, private patientSerivce: PatientService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['type'] === 'patients') {
        this.patientSerivce.getById(params['id']).subscribe({
          next: (res) => {
            console.log(res);
          }
        })
      }
    })
  }


}

import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {Doctor} from "src/app/model/doctor";
import {Employee} from "src/app/model/employee";
import {PatientService} from "src/app/patient/patient.service";
import {Patient} from "../../model/patient";
import {DoctorsService} from "../../doctor/doctors.service";
import {EmployeesService} from "../../employees/employees.service";

@Component({
  selector: 'app-patient-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  entity: Doctor | Patient | Employee;

  constructor(private route: ActivatedRoute, private patientService: PatientService, private doctorsService: DoctorsService, private employeesService: EmployeesService) {
  }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['type'] === 'patients') {
        this.patientService.getById(params['id']).subscribe({
          next: (res) => {
            this.entity = res;
          }
        })
      }else if (params['type'] === 'doctors') {
        this.doctorsService.getById(params['id']).subscribe({
          next: (res) => {
            this.entity = res;
          }
        })
      } else if (params['type'] === 'employees') {
        this.employeesService.getById(params['id']).subscribe({
          next: (res) => {
            this.entity = res;
          }
        })
      }
    })
  }


}

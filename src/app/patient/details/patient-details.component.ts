import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Patient } from "src/app/model/patient";

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit{

  patient: Patient;

  constructor(private route: ActivatedRoute){}


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id']);
    })
  }


}

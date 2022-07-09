import {Component, OnInit} from "@angular/core";
import {Doctor} from "../model/doctor";
import {DoctorsService} from "../doctor/doctors.service";
import {Employee} from "../model/employee";
import {EmployeesService} from "./employees.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Array<Employee> = [];
  columns: Array<string> = ['firstName', 'lastName'];

  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.employeesService.getAll().subscribe({
      next: (res) => {
        this.employees = res;
      }, error: (err) => {

      }
    })
  }

  details(employees) {
    this.router.navigate(['/employees/details/' + employees.id]);
  }
}

import {Component, OnInit} from '@angular/core';
import {AppService} from "./app.service";
import {AuthService} from "./common/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'hospital-ui';

  constructor(private appService:AppService, private authService:AuthService) {
  }

  ngOnInit(): void {

  }

  onClick(){
    this.appService.getDoctors().subscribe(res=>{
      console.log(res);
    });
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  public services:any[] = [
    {icon:'fa fa-thermometer-three-quarters',name:'Diagnostics'},
    {icon:'fa fa-stethoscope',name:'Health Checkup'},
    {icon:'fa fa-h-square',name:'Vaccination'},
    {icon:'fa fa-heartbeat',name:'Consultation'},
    {icon:'fa fa-plus-square',name:'Dental Care'},
    {icon:'fa fa-heart',name:'Diabetes Care'},
    {icon:'fa fa-child',name:'Child Care'},
    {icon:'fa fa-medkit',name:'Doctor @ Door'}
  ]
  ngOnInit() {
  }

}

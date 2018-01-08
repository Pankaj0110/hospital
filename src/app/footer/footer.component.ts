import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  public consultations:string[] = [
    'GeneralMedicine',
    'Gynaecology & Obstetrics',
    'Paediatrics',
    'Dermatology',
    'ENT'
  ];

  public diagnostics:string[] = [
    'Laboratory',
    'X-Ray',
    'ECG',
    'TMT',
    'Genetic Screening Tests'
  ];

  public healthChecks:string[] = [
    'Health Check',
    'Heart Check',
    'Whole Body Check',
    'Executive Health Check'
  ];

  public speciality:string[] = [
    'Diabetes',
    'Allergy & Asthma',
    'Arthritis',
    'Blood Pressure'
  ];

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  education: string[] = [
    "Mt St. Mary of the West",
    "UC",
    "St. Xavier HS"
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}

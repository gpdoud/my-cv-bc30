import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-cv';
  name: string = "Greg Doud";
  address: string = "4900 Parkway Dr.";
  cityStZip: string = "Mason, OH 45040 ";
  phone: string = "513-322-8888 ";
  email: string = "gdoud@maxtrain.com";
  displayEducation: boolean = true;

}

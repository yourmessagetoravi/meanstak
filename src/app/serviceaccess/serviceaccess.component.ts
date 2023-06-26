import { Component } from '@angular/core';
import { StudentdataService } from '../studentdata.service';

@Component({
  selector: 'app-serviceaccess',
  templateUrl: './serviceaccess.component.html',
  styleUrls: ['./serviceaccess.component.css']
})
export class ServiceaccessComponent {
studentsData:any = [];
constructor(private students:StudentdataService){
  this.studentsData = students.getStudentDetails();
}


}

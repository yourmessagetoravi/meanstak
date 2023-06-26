import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
students = [
  {idno:"101",name:"Pallavi",grade:"A+",fee:100000},
  {idno:"102",name:"Rakesh",grade:"A+",fee:110000},
  {idno:"103",name:"Adithya",grade:"A+",fee:110000}
]
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {
  students = [
    {idno:"101",name:"Pallavi",grade:"A+",fee:100000,dept:"CSE"},
    {idno:"102",name:"Rakesh",grade:"A+",fee:110000,dept:"Data Science"},
    {idno:"103",name:"Adithya",grade:"B+",fee:110000,dept:"AIML"},
    {idno:"104",name:"Pallavi",grade:"A+",fee:100000,dept:"CSE"},
    {idno:"105",name:"Rakesh",grade:"B+",fee:110000,dept:"Data Science"},
    {idno:"106",name:"Adithya",grade:"A+",fee:110000,dept:"AIML"}
  ]

  constructor() { }

  getStudentDetails(){
    return this.students
  }
}

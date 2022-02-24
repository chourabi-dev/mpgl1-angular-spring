import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-employee-form',
  templateUrl: './add-employee-form.component.html',
  styleUrls: ['./add-employee-form.component.css']
})
export class AddEmployeeFormComponent implements OnInit {

  addForm = new FormGroup({
    fullname : new FormControl('', [Validators.required ,Validators.minLength(8) ] ),
    email : new FormControl('',  [ Validators.required , Validators.email ] ),
    department : new FormControl('',Validators.required),
    sex : new FormControl('',Validators.required)
  });

  employees:any[] = [];

  constructor() { }

  ngOnInit(): void {
    console.log(this.addForm);
    
  }

  createEmployee(){
    console.log("Form submited...");

    // get the value from tthe form
    const value = this.addForm.value;

    console.log(value);

    // displaying data
    this.employees.push(value);

    // reset the form to initial state 
    this.addForm.reset();
    
  }

}

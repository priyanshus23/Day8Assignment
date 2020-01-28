import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeecreate',
  templateUrl: './employeecreate.component.html',
  styleUrls: ['./employeecreate.component.css']
})
export class EmployeecreateComponent implements OnInit {

employeeId = "";
employeeName = "";
employeeSalary = "";
employeeDepartment = "";
@Output () employeeCreated = new EventEmitter();
  ngOnInit(): void {

  }
onAddemployee() {
  const empl = {
    id : this.employeeId,
    name : this.employeeName,
    salary : this.employeeSalary,
    department : this.employeeDepartment

  };
  this.employeeCreated.emit( empl );
}

}

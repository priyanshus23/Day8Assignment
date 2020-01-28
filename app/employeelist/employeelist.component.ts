import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor() { }
@Input() emplys = [];

}

import { Component } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-angular';
  storedEmployee =  [];
  onEmplAdded(empl){
    this.storedEmployee.push(empl);
  }
}
